import { inject, observer } from "mobx-react";
import * as React from "react";
import { BaseComponent, IBaseProps } from "../base";
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
          length: 120,
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
          length: 120,
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

  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  public render() {
    const {simulation} = this.stores;
    const primaryMag = simulation.getMagnetAtIndex(0);
    const primaryMagType = primaryMag ? primaryMag.type : "none";
    const flip1 = primaryMag && primaryMag.barPolarity === "S-N" ? true : false;
    const secondaryMag = simulation.getMagnetAtIndex(1);
    const secondaryMagType = secondaryMag !== null ? secondaryMag.type : "none";
    const flip2 = secondaryMag && secondaryMag.barPolarity === "S-N" ? true : false;

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

    return (
      <Stage options={options} style={{width, height}}>
        {
          simulation.showCloud &&
          <GradientField magnets={[magnet1, magnet2]} width={width} height={height} cellSize={20} />
        }
        {
          simulation.showPointers &&
          <VectorField magnets={[magnet1, magnet2]} width={width} height={height} cellSize={30} />
        }
        {
          magnet1 &&
          <Magnet
            magnet={magnet1}
            draggable={true}
            type={primaryMagType}
            flip={flip1}
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
        length: 120
      }
    });
  }
}
