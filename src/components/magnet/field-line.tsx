import * as PIXI from "pixi.js";
import { PixiComponent } from "@inlet/react-pixi";
import { getFieldVectorAtPosition, distanceSqFromMagnet } from "./magnet-util";
import { PossibleMagnet, Magnet } from "./magnet-canvas";
import { Vector } from "./vec-utils";
import { kAppMaxWidth, kAppMaxHeight } from "../app";
import { SimulationMagnetType } from "../../models/simulation-magnet";

interface IProps {
  magnets: PossibleMagnet[];
  magnetModels: SimulationMagnetType[];
  x: number;
  y: number;
  internal?: boolean;
  magnetLength?: number;
}
interface IState {
}

export default PixiComponent<IProps, PIXI.Graphics>("FieldLine", {
  create: props => {
    return new PIXI.Graphics();
  },
  applyProps: (instance, oldProps, newProps) => {
    const { x, y, magnets, magnetModels, internal, magnetLength } = newProps;
    instance.clear();
    instance.lineStyle(3, 0xBBBBBB);
    instance.moveTo(x, y);

    if (internal) {
      // fake a straight line back
      instance.lineTo(x - magnetLength!, y);
      return;
    }

    let currPos = new Vector(x, y);

    let stepSize = 4;
    for (let i = 0; i < 5000; i++) {
      const delta = getFieldVectorAtPosition(magnets, magnetModels, currPos.x, currPos.y).unit().multiply(stepSize);

      currPos = currPos.add(delta);
      instance.lineTo(currPos.x, currPos.y);

      const d1 = magnetModels.length ?
        distanceSqFromMagnet(magnets[0], magnetModels[0], currPos.x, currPos.y) : Infinity;
      const d2 = magnetModels.length > 1 ?
        distanceSqFromMagnet(magnets[1], magnetModels[1], currPos.x, currPos.y) : Infinity;
      const distanceToClosestMagnet = Math.min(d1, d2);
      if (distanceToClosestMagnet < 30) {
        stepSize = 1;
      } else if (distanceToClosestMagnet < 100) {
        stepSize = 3;
      } else if (distanceToClosestMagnet < 600) {
        stepSize = 4;
      } else if (distanceToClosestMagnet < 1000) {
        stepSize = 6;
      } else {
        stepSize = 10;
      }

      if (distanceToClosestMagnet === 0) {
        break;
      }
    }
  }
});
