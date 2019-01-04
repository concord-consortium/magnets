import { inject, observer } from "mobx-react";
import * as React from "react";
import { BaseComponent, IBaseProps } from "../base";
import { Stage } from "@inlet/react-pixi";
import Magnet from "./magnet";
import VectorField from "./vector-field";
import GradientField from "./gradient-field";
import { MagnetType } from "../../models/simulation-magnet";
import FieldLines from "./field-lines";
import { reaction, IReactionDisposer } from "mobx";

const kMagnetLength = 220;

export interface IMagnetProps {
  x: number;
  y: number;
  length: number;
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
}

@inject("stores")
@observer
export class MagnetCanvas extends BaseComponent<IProps, IState> {

  public static getDerivedStateFromProps(props: IProps, state: IState) {
    const newState: IState = {};
    const y = props.height / 2;

    if (props.showMagnet1) {
      if (!state.magnet1) {
        // add new magnet
        const x = props.width / 4;
        newState.magnet1 = {
          x,
          y,
          length: kMagnetLength
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
          y,
          length: kMagnetLength
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
    this.state = {};

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
    const flip1 = primaryMag && primaryMag.barPolarity === "S-N" ? true : false;
    const secondaryMag = simulation.getMagnetAtIndex(1);
    const secondaryMagType: MagnetType | undefined = secondaryMag !== null ? secondaryMag.type : undefined;
    const flip2 = secondaryMag && secondaryMag.barPolarity === "S-N" ? true : false;
    const primaryImage = primaryMag ? primaryMag.magnetImage : "";
    const secondaryImage = secondaryMag ? secondaryMag.magnetImage : "";
    const { width, height } = this.props;
    const { magnet1, magnet2 } = this.state;

    const options: PIXI.ApplicationOptions = {
      backgroundColor: 0x333,
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
          simulation.showCloud &&
          <GradientField magnets={magnets} magnetModels={magnetModels} width={width} height={height} cellSize={20} />
        }
        {
          simulation.showPointers &&
          <VectorField magnets={magnets} magnetModels={magnetModels} width={width} height={height} cellSize={30} />
        }
        {
          simulation.showFieldLines &&
          <FieldLines magnets={magnets} magnetModels={magnetModels} width={width} height={height} />
        }
        {
          magnet1 &&
          <Magnet
            magnet={magnet1}
            draggable={false}
            type={primaryMagType}
            flip={flip1}
            image={primaryImage}
            updatePosition={this.handleUpdateMagnetPosition(1)}
          />
        }
        {
          magnet2 &&
          <Magnet
            magnet={magnet2}
            draggable={true}
            type={secondaryMagType}
            flip={flip2}
            image={secondaryImage}
            updatePosition={this.handleUpdateMagnetPosition(2)}
          />
        }
      </Stage>
    );
  }

  private handleUpdateMagnetPosition = (which: number) => (x: number, y: number) => {
    this.setState({
      [`magnet${which}`]: {
        x,
        y,
        length: kMagnetLength
      }
    });
  }
}
