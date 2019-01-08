import * as React from "react";
import { Stage, Sprite, Container } from "@inlet/react-pixi";
import { ObservablePoint, Application } from "pixi.js";
import { IMagnetProps } from "./magnet-canvas";

const kVoltageImageYOffset = 84;
const kSideImageXOffset = 66;

interface IProps {
  app: Application;
  magnet: IMagnetProps;
  draggable?: boolean;
  type?: string;
  flip?: boolean;
  rotation: number;
  image?: string;
  leftPoleImage?: string;
  rightPoleImage?: string;
  voltageImage?: string;
  voltageFlip?: boolean;
  imageOffset: number;
  currentArrowImage?: string;
  updatePosition: (x: number, y: number) => void;
  updateRotating: (isRotating: boolean) => void;
}
interface IState {
  isDragging: boolean;
  dragData: PIXI.interaction.InteractionData | null;
  rotation: number;
  alpha: number;
  alpha2: number;
  yOffset: number;
  yOffset2: number;
}

export default class Magnet extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      isDragging: false,
      dragData: null,
      rotation: 0,
      alpha: 0,
      alpha2: 0,
      yOffset: 0,
      yOffset2: 40
    };
  }

  public componentDidMount() {
    this.props.app.ticker.add(this.tick);
  }

  public componentWillUnmount() {
    this.props.app.ticker.remove(this.tick);
  }

  public calculateRotation = (delta: any) => {
    if (this.props.rotation !== this.state.rotation) {
      this.props.updateRotating(true);
      const newRotation = this.props.rotation === 180
        ? Math.min(180, this.state.rotation + 10 * delta)
        : Math.max(0, this.state.rotation - 10 * delta);
      if (this.props.rotation === newRotation) {
        this.props.updateRotating(false);
      }
      return newRotation;
    } else {
      return this.state.rotation;
    }
  }
  public calculateYOffset = (delta: any, currOffset: number) => {
    let newYOffset = delta + currOffset;
    if (newYOffset > 80) {
      newYOffset = 0;
    }
    return newYOffset;
  }
  public calculateAlpha = (offset: number) => {
    let newAlpha = 1;
    if (offset < 40) {
      newAlpha = offset / 40;
    } else if (offset > 40) {
      newAlpha = (40 - (offset - 40)) / 40;
    }
    return newAlpha;
  }

  public tick = (delta: any) => {
    const newRotation = this.calculateRotation(delta);
    const newYOffset = this.calculateYOffset(delta, this.state.yOffset);
    const newYOffset2 = this.calculateYOffset(delta, this.state.yOffset2);
    const newAlpha = this.calculateAlpha(newYOffset);
    const newAlpha2 = this.calculateAlpha(newYOffset2);
    this.setState(state => ({
      rotation: newRotation,
      alpha: newAlpha,
      alpha2: newAlpha2,
      yOffset: newYOffset,
      yOffset2: newYOffset2
    }));
  }

  public render() {
    const { draggable, flip, type, image, voltageFlip, imageOffset } = this.props;
    const { x, y } = this.props.magnet;
    // react-pixi typing issue
    const anchor = [0.5, 0.5] as unknown as ObservablePoint;
    const magScale = [.5, .5] as unknown as ObservablePoint;
    const magRotation = type === "bar" ? this.state.rotation * Math.PI / 180 : 0;
    const voltRotation = voltageFlip && type === "coil" ? 180 * Math.PI / 180 : 0;
    const scale = [.5, .5] as unknown as ObservablePoint;
    const leftCurrRotation = voltageFlip ? 180 * Math.PI / 180 : 0;
    const rightCurrRotation = !voltageFlip ? 180 * Math.PI / 180 : 0;
    const voltFlipFactor = voltageFlip ? -1 : 1;
    const leftCurrAniStart = voltageFlip ? 110 : 30;
    const rightCurrAniStart = voltageFlip ? 30 : 110;
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
          rotation={magRotation}
        />
        { this.props.voltageImage !== ""
          ? <Sprite
              image={this.props.voltageImage} x={x} y={y + kVoltageImageYOffset}
              scale={scale}
              anchor={anchor}
              rotation={voltRotation}
            />
          : null
        }
        { this.props.leftPoleImage !== ""
          ? <Sprite
              image={this.props.leftPoleImage} x={x - (kSideImageXOffset + imageOffset)} y={y}
              scale={scale}
              anchor={anchor}
            />
          : null
        }
        { this.props.rightPoleImage !== ""
          ? <Sprite
              image={this.props.rightPoleImage} x={x + (kSideImageXOffset + imageOffset)} y={y}
              scale={scale}
              anchor={anchor}
            />
          : null
        }
        { this.props.currentArrowImage !== ""
          ? <Sprite
              image={this.props.currentArrowImage}
              x={x - (kSideImageXOffset + imageOffset)}
              y={y + leftCurrAniStart + this.state.yOffset * voltFlipFactor}
              scale={scale}
              anchor={anchor}
              rotation={leftCurrRotation}
              alpha={this.state.alpha}
            />
          : null
        }
        { this.props.currentArrowImage !== ""
          ? <Sprite
              image={this.props.currentArrowImage}
              x={x - (kSideImageXOffset + imageOffset)}
              y={y + leftCurrAniStart + this.state.yOffset2 * voltFlipFactor}
              scale={scale}
              anchor={anchor}
              rotation={leftCurrRotation}
              alpha={this.state.alpha2}
            />
          : null
        }
        { this.props.currentArrowImage !== ""
          ? <Sprite
              image={this.props.currentArrowImage}
              x={x + (kSideImageXOffset + imageOffset)}
              y={(y + rightCurrAniStart - this.state.yOffset * voltFlipFactor)}
              scale={scale}
              anchor={anchor}
              rotation={rightCurrRotation}
              alpha={this.state.alpha}
            />
          : null
        }
        { this.props.currentArrowImage !== ""
          ? <Sprite
              image={this.props.currentArrowImage}
              x={x + (kSideImageXOffset + imageOffset)}
              y={(y + rightCurrAniStart - this.state.yOffset2 * voltFlipFactor)}
              scale={scale}
              anchor={anchor}
              rotation={rightCurrRotation}
              alpha={this.state.alpha2}
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
