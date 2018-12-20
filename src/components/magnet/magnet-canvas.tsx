import * as React from "react";
import { Stage } from "@inlet/react-pixi";
import Magnet from "./magnet";
import VectorField from "./vector-field";

interface IProps {
  width: number;
  height: number;
}
interface IState {
  magnetX: number;
  magnetY: number;
}

export class MagnetCanvas extends React.Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);
    this.state = {
      magnetX: props.width / 2,
      magnetY: props.height / 2
    };
  }

  public render() {
    const { width, height } = this.props;
    const { magnetX, magnetY } = this.state;
    const options: PIXI.ApplicationOptions = {
      backgroundColor: 0x333,
      resolution: 2,
      antialias: true,
      width,
      height
    };

    return (
      <Stage options={options} style={{width, height}}>
        <VectorField width={width} height={height} />
        <Magnet x={magnetX} y={magnetY}
          updatePosition={this.handleUpdateMagnetPosition} />
      </Stage>
    );
  }

  private handleUpdateMagnetPosition = (x: number, y: number) => {
    this.setState({
      magnetX: x,
      magnetY: y
    });
  }
}
