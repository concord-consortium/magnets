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
  leftX: number;
  rightX: number;
  y: number;
  originMagnet: Magnet;
  originMagnetModel: SimulationMagnetType;
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

const drawReverseFieldLine = (instance: PIXI.Graphics, props: IProps) => {
  const { leftX, rightX, originMagnetModel, y, magnets, magnetModels, internal } = props;
  const { flipped } = originMagnetModel;
  // Reverse starting logic from initial field line
  const startX = (!flipped && !internal) || (flipped && internal) ? leftX : rightX;
  instance.moveTo(startX, y);

  let currPos = new Vector(startX, y);
  for (let i = 0; i < 1500; i++) {
    const delta = getFieldVectorAtPosition(magnets, magnetModels, currPos.x, currPos.y).unit();
    // Follow the field in reverse
    currPos = currPos.add(delta.multiply(new Vector(-1, -1)));
    instance.lineTo(currPos.x, currPos.y);

    if (outOfBounds(currPos)
        || magnets.some(magnet => pointInMagnet(magnet, currPos.x, currPos.y)) && !internal
        || !magnets.some(magnet => pointInMagnet(magnet, currPos.x, currPos.y)) && internal
    ) {
      break;
    }
  }
};

export default PixiComponent<IProps, PIXI.Graphics>("FieldLine", {
  create: props => {
    return new PIXI.Graphics();
  },
  applyProps: (instance, oldProps, newProps) => {
    const { leftX, rightX, originMagnet, originMagnetModel, y, magnets, magnetModels, internal } = newProps;
    const { flipped } = originMagnetModel;
    // By default, the negative pole is on the right, so external field lines originate there and
    // internal field lines originate on the left so they cross the whole magnet.
    // This logic is reversed when the magnet is flipped.
    const startX = (!flipped && !internal) || (flipped && internal) ? rightX : leftX;
    instance.clear();
    instance.lineStyle(3, 0xBBBBBB);
    instance.moveTo(startX, y);

    let currPos = new Vector(startX, y);
    for (let i = 0; i < 1500; i++) {
      const delta = getFieldVectorAtPosition(magnets, magnetModels, currPos.x, currPos.y).unit();
      currPos = currPos.add(delta);
      instance.lineTo(currPos.x, currPos.y);

      if (pointInMagnet(originMagnet, currPos.x, currPos.y) && !internal
          || !pointInMagnet(originMagnet, currPos.x, currPos.y) && internal) {
        break;
      }

      if (outOfBounds(currPos)
          || magnets.some(magnet => pointInMagnet(magnet, currPos.x, currPos.y)) && !internal
      ) {
        drawReverseFieldLine(instance, newProps);
        break;
      }
    }
  }
});
