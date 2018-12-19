import * as React from "react";
import { Stage } from "@inlet/react-pixi";
import Magnet from "./magnet";

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
    const options = {
      backgroundColor: 0x333,
      width,
      height
    };

    return (
      <Stage options={options}>
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
