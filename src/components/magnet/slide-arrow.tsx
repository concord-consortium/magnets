import * as React from "react";
import { Sprite } from "@inlet/react-pixi";
import { ObservablePoint, Application } from "pixi.js";

interface IProps {
  app: Application;
  arrowComplete: () => void;
}
interface IState {
  alpha: number;
  direction: number;
  x: number;
  y: number;
  time: number;
}

const kCompleteTime = 2500;
const kFadeStartTime = 2000;
const kFadeTime = 500;
const minX = 700;
const maxX = 740;

export default class SlideArrow extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      alpha: 1,
      direction: 1,
      x: 720,
      y: 180,
      time: 0
    };
  }

  public componentDidMount() {
    this.props.app.ticker.add(this.tick);
  }

  public componentWillUnmount() {
    this.props.app.ticker.remove(this.tick);
  }

  public tick = (delta: any) => {
    const ms = delta / PIXI.settings.TARGET_FPMS;
    const newTime = this.state.time + ms;
    let xPos = this.state.x;
    let dir = this.state.direction;
    const newAlpha = newTime > kFadeStartTime ? (1 - (newTime - kFadeStartTime) / kFadeTime) : 1;
    xPos = xPos + delta * 2 * this.state.direction;
    if (xPos >= maxX) {
      xPos = maxX;
      dir = -1;
    } else if (xPos <= minX) {
      xPos = minX;
      dir = 1;
    }
    this.setState(state => ({
      x: xPos,
      direction: dir,
      time: newTime,
      alpha: newAlpha
    }));
    if (newTime >= kCompleteTime) {
      this.props.arrowComplete();
    }
  }

  public render() {
    const image = "./assets/slide-arrow.png";
    const scale = [.5, .5] as unknown as ObservablePoint;
    const anchor = [.5, .5] as unknown as ObservablePoint;
    const { x, y } = this.state;
    return (
      <Sprite
        image={image} x={x} y={y}
        scale={scale}
        anchor={anchor}
        alpha={this.state.alpha}
      />
    );
  }

}
