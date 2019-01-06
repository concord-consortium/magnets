import * as React from "react";
import { Stage, Sprite, Container } from "@inlet/react-pixi";
import { ObservablePoint } from "pixi.js";
import { IMagnetProps } from "./magnet-canvas";

interface IProps {
  magnet: IMagnetProps;
  draggable?: boolean;
  type?: string;
  flip?: boolean;
  image?: string;
  leftPoleImage?: string;
  rightPoleImage?: string;
  voltageImage?: string;
  voltageFlip?: boolean;
  imageOffset: number;
  currentArrowImage?: string;
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
    const { draggable, flip, type, image, voltageFlip, imageOffset } = this.props;
    const { x, y } = this.props.magnet;
    // react-pixi typing issue
    const anchor = [0.5, 0.5] as unknown as ObservablePoint;
    const magFlipFactor = flip && type === "bar" ? -1 : 1;
    const magScale = [.5 * magFlipFactor, .5 * magFlipFactor] as unknown as ObservablePoint;
    const voltFlipFactor = voltageFlip && type === "coil" ? -1 : 1;
    const voltScale = [.5 * voltFlipFactor, .5] as unknown as ObservablePoint;
    const scale = [.5, .5] as unknown as ObservablePoint;
    const leftCurrScale = [.5, .5 * voltFlipFactor] as unknown as ObservablePoint;
    const rightCurrScale = [.5, .5 * -1 * voltFlipFactor] as unknown as ObservablePoint;
    return (
      <Container>
        <Sprite
          image={image} x={x} y={y}
          scale={magScale}
          anchor={anchor}
          interactive={draggable ? true : false}
          buttonMode={draggable ? true : false}
          pointerdown={draggable ? this.onPointerDown : undefined}
          pointerup={draggable ? this.onPointerUp : undefined}
          pointermove={draggable ? this.onPointerMove : undefined}
        />
        { this.props.voltageImage !== ""
          ? <Sprite
              image={this.props.voltageImage} x={x - (voltFlipFactor * 28)} y={y + 58}
              scale={voltScale}
            />
          : null
        }
        { this.props.leftPoleImage !== ""
          ? <Sprite
              image={this.props.leftPoleImage} x={x - (66 + imageOffset)} y={y}
              scale={scale}
              anchor={anchor}
            />
          : null
        }
        { this.props.rightPoleImage !== ""
          ? <Sprite
              image={this.props.rightPoleImage} x={x + (66 + imageOffset)} y={y}
              scale={scale}
              anchor={anchor}
            />
          : null
        }
        { this.props.currentArrowImage !== ""
          ? <Sprite
              image={this.props.currentArrowImage} x={x - (66 + imageOffset)} y={y + 50}
              scale={leftCurrScale}
              anchor={anchor}
            />
          : null
        }
        { this.props.currentArrowImage !== ""
          ? <Sprite
              image={this.props.currentArrowImage} x={x + (66 + imageOffset)} y={(y + 50)}
              scale={rightCurrScale}
              anchor={anchor}
            />
          : null
        }
      </Container>
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
