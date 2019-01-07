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
}
interface IState {
}

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
      if (distanceToClosestMagnet < 20) {
        stepSize = 1;
      } else {
        stepSize = 4;
      }

      if (distanceToClosestMagnet === 0 && !internal
          || distanceToClosestMagnet !== 0 && internal
      ) {
        break;
      }
    }
  }
});
