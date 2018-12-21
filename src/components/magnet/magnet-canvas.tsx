import * as React from "react";
import { Stage } from "@inlet/react-pixi";
import Magnet from "./magnet";
import VectorField from "./vector-field";
import GradientField from "./gradient-field";

export interface IMagnetProps {
  x: number;
  y: number;
  length: number;
}

export type PossibleMagnet = IMagnetProps | undefined;

interface IProps {
  width: number;
  height: number;
  showMagnet1: boolean;
  showMagnet2: boolean;
  showGradient: boolean;
  showVectors: boolean;
}
interface IState {
  magnet1?: IMagnetProps;
  magnet2?: IMagnetProps;
}

export class MagnetCanvas extends React.Component<IProps, IState> {

  public static getDerivedStateFromProps(props: IProps, state: IState) {
    const newState: IState = {};

    const y = props.height / 2;

    if (props.showMagnet1) {
      if (!state.magnet1) {
        // add new magnet
        const x = props.showMagnet2 ? props.width / 4 : props.width / 2;
        newState.magnet1 = {
          x,
          y,
          length: 120
        };
      } else {
        newState.magnet1 = state.magnet1;
      }
    }

    if (props.showMagnet2) {
      if (!state.magnet2) {
        // add new magnet
        const x = props.showMagnet1 ? props.width * 3 / 4 : props.width / 2;
        newState.magnet2 = {
          x,
          y,
          length: 120
        };
      } else {
        newState.magnet2 = state.magnet2;
      }
    }

    return newState;
  }

  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  public render() {
    const { width, height, showGradient, showVectors } = this.props;
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

    return (
      <Stage options={options} style={{width, height}}>
        {
          showGradient &&
          <GradientField magnets={[magnet1, magnet2]} width={width} height={height} cellSize={20} />
        }
        {
          showVectors &&
          <VectorField magnets={[magnet1, magnet2]} width={width} height={height} cellSize={30} />
        }
        {
          magnet1 &&
          <Magnet magnet={magnet1} updatePosition={this.handleUpdateMagnetPosition(1)} />
        }
        {
          magnet2 &&
          <Magnet magnet={magnet2} updatePosition={this.handleUpdateMagnetPosition(2)} />
        }
      </Stage>
    );
  }

  private handleUpdateMagnetPosition = (which: number) => (x: number, y: number) => {
    this.setState({
      [`magnet${which}`]: {
        x,
        y,
        length: 120
      }
    });
  }
}
