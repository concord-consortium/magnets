import * as React from "react";
import { Stage, Sprite } from "@inlet/react-pixi";
import { ObservablePoint } from "pixi.js";

interface IProps {
  x: number;
  y: number;
  updatePosition: (x: number, y: number) => void;
}
interface IState {
  isDragging: boolean;
  dragData: PIXI.interaction.InteractionData | null;
}

export default class Magnet extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      isDragging: false,
      dragData: null
    };
  }

  public render() {
    // react-pixi typing issue
    const anchor = [0.5, 0.5] as unknown as ObservablePoint;
    return (
      <Sprite
        image="./assets/magnet-bar.png" x={this.props.x} y={this.props.y}
        anchor={anchor}
        interactive={true}
        buttonMode={true}
        pointerdown={this.onPointerDown}
        pointerup={this.onPointerUp}
        pointermove={this.onPointerMove}
      />
    );
  }

  private onPointerDown = (event: PIXI.interaction.InteractionEvent) => {
    event.data.target = event.target;
    this.setState({
      isDragging: true,
      dragData: event.data
    });
  }

  private onPointerUp = (event: PIXI.interaction.InteractionEvent) => {
    this.setState({
      isDragging: false,
      dragData: null
    });
  }

  private onPointerMove = (event: PIXI.interaction.InteractionEvent) => {
    if (this.state.isDragging && this.state.dragData)
    {
      const { dragData } = this.state;
      const newPosition = dragData.getLocalPosition(dragData.target.parent);
      this.props.updatePosition(newPosition.x, newPosition.y);
    }
  }
}
