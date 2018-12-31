import * as PIXI from "pixi.js";
import { PixiComponent } from "@inlet/react-pixi";
import { getFieldVectorAtPosition, pointInMagnet } from "./magnet-util";
import { PossibleMagnet, Magnet } from "./magnet-canvas";
import { Vector } from "./vec-utils";
import { kCanvasWidth, kCanvasHeight } from "../main-content";

interface IProps {
  magnets: PossibleMagnet[];
  x: number;
  y: number;
}
interface IState {
}

const outOfBounds = (vec: Vector) => {
  const { x, y } = vec;
  const widthBuffer = kCanvasWidth / 2;
  const heightBuffer = kCanvasHeight / 2;
  return (
    x > kCanvasWidth + widthBuffer || x < 0 - widthBuffer ||
    y > kCanvasHeight + heightBuffer || y < 0 - heightBuffer
  );
};

export default PixiComponent<IProps, PIXI.Graphics>("FieldLine", {
  create: props => {
    return new PIXI.Graphics();
  },
  applyProps: (instance, oldProps, newProps) => {
    const { x, y, magnets } = newProps;
    instance.clear();
    instance.lineStyle(3, 0xBBBBBB);
    instance.moveTo(x, y);

    let currPos = new Vector(x, y);
    for (let i = 0; i < 1500; i++) {
      const delta = getFieldVectorAtPosition(magnets, currPos.x, currPos.y).unit();
      currPos = currPos.add(delta);
      instance.lineTo(currPos.x, currPos.y);

      if (magnets.some(magnet => pointInMagnet(magnet, currPos.x, currPos.y)) || outOfBounds(currPos)) {
        break;
      }
    }
  }
});
