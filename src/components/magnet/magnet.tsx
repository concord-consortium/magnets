import * as React from "react";
import { Stage, Sprite } from "@inlet/react-pixi";
import { ObservablePoint } from "pixi.js";
import { IMagnetProps } from "./magnet-canvas";

interface IProps {
  magnet: IMagnetProps;
  draggable?: boolean;
  type?: string;
  flip?: boolean;
  image?: string;
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
    const { draggable, flip, type, image } = this.props;
    const { x, y } = this.props.magnet;
    // react-pixi typing issue
    const anchor = [0.5, 0.5] as unknown as ObservablePoint;
    const flipFactor = flip && type === "bar" ? -1 : 1;
    const scale = [.5 * flipFactor, .5 * flipFactor] as unknown as ObservablePoint;
    return (
      <Sprite
        image={image} x={x} y={y}
        scale={scale}
        anchor={anchor}
        interactive={draggable ? true : false}
        buttonMode={draggable ? true : false}
        pointerdown={draggable ? this.onPointerDown : undefined}
        pointerup={draggable ? this.onPointerUp : undefined}
        pointermove={draggable ? this.onPointerMove : undefined}
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
