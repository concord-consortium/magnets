import * as PIXI from "pixi.js";
import { PixiComponent } from "@inlet/react-pixi";
import { getFieldVectorAtPosition, distanceSqFromMagnet } from "./magnet-util";
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

// const outOfBounds = (vec: Vector) => {
//   const { x, y } = vec;
//   const widthBuffer = kCanvasWidth;
//   const heightBuffer = kCanvasHeight;
//   return (
//     x > kCanvasWidth + widthBuffer || x < 0 - widthBuffer ||
//     y > kCanvasHeight + heightBuffer || y < 0 - heightBuffer
//   );
// };

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

      const distanceToClosestMagnet = Math.min(...magnets.map( m => distanceSqFromMagnet(m, currPos.x, currPos.y) ));
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
