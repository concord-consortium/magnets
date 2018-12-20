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

interface IProps {
  width: number;
  height: number;
}
interface IState {
  magnet: IMagnetProps;
}

export class MagnetCanvas extends React.Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);
    this.state = {
      magnet: {
        x: props.width / 2,
        y: props.height / 2,
        length: 120
      }
    };
  }

  public render() {
    const { width, height } = this.props;
    const { magnet } = this.state;
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
        <GradientField magnet={magnet} width={width} height={height} cellSize={20} />
        <VectorField magnet={magnet} width={width} height={height} cellSize={30} />
        <Magnet magnet={magnet}
          updatePosition={this.handleUpdateMagnetPosition} />
      </Stage>
    );
  }

  private handleUpdateMagnetPosition = (x: number, y: number) => {
    this.setState({
      magnet: {
        x,
        y,
        length: this.state.magnet.length
      }
    });
  }
}
