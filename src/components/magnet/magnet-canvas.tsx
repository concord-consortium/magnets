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

export const kMagnetHeight = 40;

const MagWithApp = withPixiApp(Magnet);

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
}

@inject("stores")
@observer
export class MagnetCanvas extends BaseComponent<IProps, IState> {

  public static getDerivedStateFromProps(props: IProps, state: IState) {
    const newState: IState = {};
    const y = 280;

    if (props.showMagnet1) {
      if (!state.magnet1) {
        // add new magnet
        const x = props.width / 4;
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

  public render() {
    const {simulation} = this.stores;

    const primaryMag = simulation.getMagnetAtIndex(0);
    const primaryMagType: MagnetType | undefined = primaryMag ? primaryMag.type : undefined;
    const primaryFlip = primaryMag && primaryMagType === "bar" ? primaryMag.flipped : false;
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
    const secondaryFlip = secondaryMag && secondaryMagType === "bar" ? secondaryMag.flipped : false;
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
          simulation.showPointers && !rotating1 && !rotating2 &&
          <VectorField magnets={magnets} magnetModels={magnetModels} width={width} height={height} cellSize={30} />
        }
        {
          simulation.showFieldLines && !rotating1 && !rotating2 &&
          <FieldLines magnets={magnets} magnetModels={magnetModels} width={width} height={height} />
        }
        {
          magnet1 &&
          <MagWithApp
            magnet={magnet1}
            draggable={false}
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
            updatePosition={this.handleUpdateMagnetPosition(2)}
            updateRotating={this.handleUpdateRotating(2)}
          />
        }
      </Stage>
    );
  }

  private handleUpdateMagnetPosition = (which: number) => (x: number, y: number) => {
    this.setState({
      [`magnet${which}`]: {
        x,
        y
      }
    });
  }

  private handleUpdateRotating = (which: number) => (isRotating: boolean) => {
    this.setState({
      [`rotating${which}`]: isRotating
    });
  }
}
