import * as React from "react";
import { Sprite } from "@inlet/react-pixi";
import { ObservablePoint } from "pixi.js";
import { IBaseProps } from "../base";

interface IProps extends IBaseProps {}
interface IState {}

const kXPos = 900;
const kYPos = 260;

export default class LockArrows extends React.Component<IProps, IState> {

  public render() {
    const image = "./assets/x-axis-arrows.png";
    const scale = [.5, .5] as unknown as ObservablePoint;
    const anchor = [.5, .5] as unknown as ObservablePoint;
    return (
      <Sprite
        image={image} x={kXPos} y={kYPos}
        scale={scale}
        anchor={anchor}
        alpha={.35}
      />
    );
  }

}
