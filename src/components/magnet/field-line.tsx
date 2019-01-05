import * as PIXI from "pixi.js";
import { PixiComponent } from "@inlet/react-pixi";
import { getFieldVectorAtPosition, pointInMagnet } from "./magnet-util";
import { PossibleMagnet, Magnet } from "./magnet-canvas";
import { Vector } from "./vec-utils";
import { kCanvasWidth, kCanvasHeight } from "../main-content";
import { SimulationMagnetType } from "../../models/simulation-magnet";

interface IProps {
  magnets: PossibleMagnet[];
  magnetModels: SimulationMagnetType[];
  x: number;
  y: number;
  internal?: boolean;
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
    const { x, y, magnets, magnetModels, internal } = newProps;
    instance.clear();
    instance.lineStyle(3, 0xBBBBBB);
    instance.moveTo(x, y);

    let currPos = new Vector(x, y);
    for (let i = 0; i < 500000; i++) {
      const delta = getFieldVectorAtPosition(magnets, magnetModels, currPos.x, currPos.y).unit();
      currPos = currPos.add(delta);
      instance.lineTo(currPos.x, currPos.y);

      if (outOfBounds(currPos)
          || magnets.some(magnet => pointInMagnet(magnet, currPos.x, currPos.y)) && !internal
          || !magnets.some(magnet => pointInMagnet(magnet, currPos.x, currPos.y)) && internal
      ) {
        break;
      }
    }
  }
});
