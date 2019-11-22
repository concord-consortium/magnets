import { inject, observer } from "mobx-react";
import * as React from "react";
import { BaseComponent, IBaseProps } from "../base";
import { Stage, withPixiApp } from "@inlet/react-pixi";
import Magnet from "./magnet";
import VectorField from "./vector-field";
import GradientField from "./gradient-field";
import { MagnetType } from "../../models/simulation-magnet";
import FieldLines from "./field-lines";
import { reaction, IReactionDisposer } from "mobx";
import ForceVectors from "./force-vectors";
import { kAppMaxWidth } from "../app";
import SlideArrow from "./slide-arrow";
import LockArrows from "./lock-arrows";

export const kMagnetHeight = 40;

const MagWithApp = withPixiApp(Magnet);
const SlideArrowWithApp = withPixiApp(SlideArrow);

export interface IMagnetProps {
  x: number;
  y: number;
}

export type PossibleMagnet = IMagnetProps | undefined;
export type Magnet = IMagnetProps;

interface IProps {
  width: number;
  height: number;
  showMagnet1: boolean;
  showMagnet2: boolean;
}
interface IState {
  magnet1?: IMagnetProps;
  magnet2?: IMagnetProps;
  rotating1?: boolean;
  rotating2?: boolean;
  movedMagIndex?: number;
}

const initialY = 260;

@inject("stores")
@observer
export class MagnetCanvas extends BaseComponent<IProps, IState> {

  public static getDerivedStateFromProps(props: IProps, state: IState) {
    const newState: IState = {};
    const y = initialY;

    if (props.showMagnet1) {
      if (!state.magnet1) {
        // add new magnet
        const x = props.width / 2;
        newState.magnet1 = {
          x,
          y
        };
      } else {
        newState.magnet1 = state.magnet1;
      }
    }

    if (props.showMagnet2) {
      if (!state.magnet2) {
        // add new magnet
        const x = props.width * 3 / 4;
        newState.magnet2 = {
          x,
          y
        };
        // adjust magnet 1 position if needed
        newState.magnet1 = state.magnet1;
        if (newState.magnet1 && newState.magnet1.x > (x - 250)) {
          newState.magnet1.x = (x - 250);
        }

      } else {
        newState.magnet2 = state.magnet2;
      }
    }
    else {
      newState.magnet2 = undefined;
    }
    return newState;
  }

  private modelReactionDisposer: IReactionDisposer;

  constructor(props: IProps) {
    super(props);
    this.state = {
      rotating1: false,
      rotating2: false
    };
  }

  public componentDidMount() {
    const {simulation} = this.stores;
    this.modelReactionDisposer = reaction(
      // This is mostly a hack to make sure that the component updates whenever the MST model changes
      // This is necessary since the models are passed to a PixiComponent which is not an @observer
      () => simulation.magnets.map(magnet => `${magnet.strength},${magnet.flipped}`),
      () => this.forceUpdate()
    );
  }

  public componentWillUnmount() {
    this.modelReactionDisposer();
  }

  public componentDidUpdate() {
    const {simulation} = this.stores;
    if (simulation.showMagneticForces && this.state.magnet2) {
      // lock y and limit x
      const m1 = this.state.magnet1!;
      const m2 = this.state.magnet2;
      const model1 = simulation.getMagnetAtIndex(0)!;
      const model2 = simulation.getMagnetAtIndex(1)!;

      // check if mag1 or mag2 y is out of bounds
      // check if mag1 or mag2 x is outside screen bounds
      // check if mag 1 or mag2 x are overlapped/reversed - if so, adjust the last moved magnet
      const minMag1X = (model1.magnetLength / 2) + 10;
      let maxMag1X = kAppMaxWidth - (3 * model2.magnetLength / 2) - 50;
      let minMag2X = (3 * model1.magnetLength / 2) + 50;
      const maxMag2X = kAppMaxWidth - (model2.magnetLength / 2) - 10;
      const newState: IState = {};
      if (this.state.movedMagIndex === 1) {
        // last moved was magnet 1, so keep magnet 2 in place while obeying screen bounds
        const mag2X = Math.min(maxMag2X, Math.max(minMag2X, m2.x));
        const maxMag1BlockedX = (mag2X - model2.magnetLength / 2) - (model1.magnetLength / 2) - 40;
        maxMag1X = Math.min(maxMag1X, maxMag1BlockedX);
        newState.movedMagIndex = 0;
      } else if (this.state.movedMagIndex === 2) {
        // last moved was magnet 2 so keep magnet 1 in place while obeying screen bounds
        const  mag1X = Math.min(maxMag1X, Math.max(minMag1X, m1.x));
        const minMag2BlockedX = (mag1X + model1.magnetLength / 2) + (model2.magnetLength / 2) + 40;
        minMag2X = Math.max(minMag2X, minMag2BlockedX);
        newState.movedMagIndex = 0;
      } else {
        // no magnet was moved, but they may have changed size
        const maxMag1BlockedX = (m2.x - model2.magnetLength / 2) - (model1.magnetLength / 2) - 40;
        const minMag2BlockedX = (m1.x + model1.magnetLength / 2) + (model2.magnetLength / 2) + 40;
        if (m1.x > maxMag1BlockedX) {
          const potentialMaxMag1X = maxMag1BlockedX;
          // if moving mag 1 puts it too far to the left, move mag 2 instead
          if (potentialMaxMag1X <= minMag1X) {
            minMag2X = minMag2BlockedX;
          } else {
            maxMag1X = maxMag1BlockedX;
          }
        }
      }
      if (m1.y !== initialY || m1.x < minMag1X || m1.x > maxMag1X) {
        newState.magnet1 = {
          y: initialY,
          x: Math.min(maxMag1X, Math.max(minMag1X, m1.x))
        };
      }
      if (m2.y !== initialY || m2.x < minMag2X || m2.x > maxMag2X) {
        newState.magnet2 = {
          y: initialY,
          x: Math.min(maxMag2X, Math.max(minMag2X, m2.x))
        };
      }
      if (newState.magnet1 || newState.magnet2) {
        this.setState(newState);
      }
    }
  }

  public render() {
    const {simulation} = this.stores;
    const primaryMag = simulation.getMagnetAtIndex(0);
    const primaryMagType: MagnetType | undefined = primaryMag ? primaryMag.type : undefined;
    const primaryFlip = primaryMag && (primaryMagType === "bar" || primaryMag.isBattery) ? primaryMag.flipped : false;
    const primaryIsBattery = primaryMag ? primaryMag.isBattery : false;
    const primaryRotation = primaryFlip ? 180 : 0;
    const primaryImage = primaryMag ? primaryMag.magnetImage : "";
    const primaryImageOffset: number = primaryMag ? primaryMag.polarityCurrentImageOffset : 0;
    const primaryLeftPoleImage: string = primaryMag ? primaryMag.leftPoleImage : "";
    const primaryRightPoleImage: string = primaryMag ? primaryMag.rightPoleImage : "";
    const primaryCurrentArrowImage: string = primaryMag ? primaryMag.currentArrowImage : "";
    const primaryVoltageImage: string = primaryMag ? primaryMag.voltageImage : "";
    const primaryVoltageFlip: boolean = primaryMag ? primaryMag.voltageFlip : false;

    const secondaryMag = simulation.getMagnetAtIndex(1);
    const secondaryMagType: MagnetType | undefined = secondaryMag !== null ? secondaryMag.type : undefined;
    const secondaryFlip = secondaryMag && (secondaryMagType === "bar" || secondaryMag.isBattery)
                          ? secondaryMag.flipped
                          : false;
    const secondaryIsBattery = secondaryMag ? secondaryMag.isBattery : false;
    const secondaryRotation = secondaryFlip ? 180 : 0;
    const secondaryImage = secondaryMag ? secondaryMag.magnetImage : "";
    const secondaryImageOffset: number = secondaryMag ? secondaryMag.polarityCurrentImageOffset : 0;
    const secondaryLeftPoleImage: string = secondaryMag ? secondaryMag.leftPoleImage : "";
    const secondaryRightPoleImage: string = secondaryMag ? secondaryMag.rightPoleImage : "";
    const secondaryCurrentArrowImage: string = secondaryMag ? secondaryMag.currentArrowImage : "";
    const secondaryVoltageImage: string = secondaryMag ? secondaryMag.voltageImage : "";
    const secondaryVoltageFlip: boolean = secondaryMag ? secondaryMag.voltageFlip : false;

    const { width, height } = this.props;
    const { magnet1, magnet2, rotating1, rotating2 } = this.state;

    const options: PIXI.ApplicationOptions = {
      backgroundColor: 0x0,
      resolution: 2,
      antialias: true,
      // forceCanvas: true,
      roundPixels: true,
      width,
      height
    };

    const magnets = [magnet1, magnet2];
    const magnetModels = simulation.magnets;

    return (
      <Stage options={options} style={{width, height}}>
        {
          simulation.showCloud && !rotating1 && !rotating2 &&
          <GradientField magnets={magnets} magnetModels={magnetModels} width={width} height={height} cellSize={10} />
        }
        {
          simulation.showPointers && !rotating1 && !rotating2 && (magnet1 || magnet2) &&
          <VectorField magnets={magnets} magnetModels={magnetModels} width={width} height={height} cellSize={30} />
        }
        {
          simulation.showFieldLines && !rotating1 && !rotating2 &&
          <FieldLines magnets={magnets} magnetModels={magnetModels} width={width} height={height} />
        }
        {magnet2 && simulation.showMagneticForces
          ? <LockArrows/>
          : null
        }
        {
          magnet1 &&
          <MagWithApp
            magnet={magnet1}
            draggable={true}
            type={primaryMagType}
            flip={primaryFlip}
            rotation={primaryRotation}
            image={primaryImage}
            leftPoleImage={primaryLeftPoleImage}
            rightPoleImage={primaryRightPoleImage}
            voltageImage={primaryVoltageImage}
            voltageFlip={primaryVoltageFlip}
            currentArrowImage={primaryCurrentArrowImage}
            imageOffset={primaryImageOffset}
            isBattery={primaryIsBattery}
            updatePosition={this.handleUpdateMagnetPosition(1)}
            updateRotating={this.handleUpdateRotating(1)}
          />
        }
        {
          magnet2 &&
          <MagWithApp
            magnet={magnet2}
            draggable={true}
            type={secondaryMagType}
            flip={secondaryFlip}
            rotation={secondaryRotation}
            image={secondaryImage}
            leftPoleImage={secondaryLeftPoleImage}
            rightPoleImage={secondaryRightPoleImage}
            voltageImage={secondaryVoltageImage}
            voltageFlip={secondaryVoltageFlip}
            currentArrowImage={secondaryCurrentArrowImage}
            imageOffset={secondaryImageOffset}
            isBattery={secondaryIsBattery}
            updatePosition={this.handleUpdateMagnetPosition(2)}
            updateRotating={this.handleUpdateRotating(2)}
          />
        }
        {
          simulation.showMagneticForces && !rotating1 && !rotating2 &&
          <ForceVectors magnets={magnets} magnetModels={magnetModels} />
        }
        {simulation.slideArrowStarted && !simulation.slideArrowComplete
          ? <SlideArrowWithApp arrowComplete={this.handleSlideArrowComplete}/>
          : null
        }
      </Stage>
    );
  }

  private handleUpdateMagnetPosition = (which: number) => (x: number, y: number) => {
    this.setState({
      [`magnet${which}`]: {
        x,
        y
      },
      movedMagIndex: which
    });
  }

  private handleUpdateRotating = (which: number) => (isRotating: boolean) => {
    this.setState({
      [`rotating${which}`]: isRotating
    });
  }

  private handleSlideArrowComplete = () => {
    const {simulation} = this.stores;
    simulation.setSlideArrowComplete(true);
  }
}
