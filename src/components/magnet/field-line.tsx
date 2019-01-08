import * as PIXI from "pixi.js";
import { PixiComponent } from "@inlet/react-pixi";
import { getFieldVectorAtPosition, distanceSqFromMagnet } from "./magnet-util";
import { PossibleMagnet, Magnet } from "./magnet-canvas";
import { Vector } from "./vec-utils";
import { kAppMaxWidth, kAppMaxHeight } from "../app";
import { SimulationMagnetType } from "../../models/simulation-magnet";

const kArrowWidth = 20;

interface IProps {
  magnets: PossibleMagnet[];
  magnetModels: SimulationMagnetType[];
  x: number;
  y: number;
  width: number;
  height: number;
  fixedInternalLength?: number;
}
interface IState {
}

function drawTriangle(x: number, y: number, direction: number, instance: PIXI.Graphics) {
  const width = kArrowWidth;
  const height = kArrowWidth / 2;
  let corners = [
    [x - (width / 2), y - (height / 2)],
    [x - (width / 2), y + (height / 2)],
    [x + (width / 2), y]
  ];

  // rotate shape
  corners = corners.map(p => {
    const dx = p[0] - x;
    const dy = p[1] - y;
    const cos = Math.cos(direction);
    const sin = Math.sin(direction);
    const newX = x + (-dy * sin + dx * cos);
    const newY = y + (dy * cos + dx * sin);
    return [newX, newY];
  });

  instance.beginFill(0xBBBBBB);
  instance.moveTo(corners[0][0], corners[0][1]);
  instance.lineTo(corners[1][0], corners[1][1]);
  instance.lineTo(corners[2][0], corners[2][1]);
  instance.lineTo(corners[0][0], corners[0][1]);
  instance.endFill();
}

function drawFieldLineDirectionArrow(
  startPos: Vector,
  endPos: Vector,
  totalLength: number,
  instance: PIXI.Graphics,
  props: IProps)
{
  const { magnets, magnetModels } = props;
  const middleLength = totalLength / 2;

  let currPos = startPos.clone();
  let currLength = 0;

  // Retrace your steps until you roughly hit the center
  for (let i = 0; i < 5000; i++) {
    const fieldDirection = getFieldVectorAtPosition(magnets, magnetModels, currPos.x, currPos.y);
    if (Math.abs(currLength - middleLength) < 10) {
      drawTriangle(currPos.x, currPos.y, fieldDirection.toAngle(), instance);
      // Reset the cursor to continue drawing lines from the leading edge
      instance.moveTo(endPos.x, endPos.y);
      break;
    } else {
      const stepSize = getStepSize(currPos, props);
      const delta = fieldDirection.unit().multiply(stepSize);

      currPos = currPos.add(delta);
      currLength += stepSize;
    }
  }
}

function getDistanceToClosestMagnet(position: Vector, props: IProps) {
  const { magnets, magnetModels } = props;
  const { x, y } = position;
  const d1 = magnetModels.length ?
    distanceSqFromMagnet(magnets[0], magnetModels[0], x, y) : Infinity;
  const d2 = magnetModels.length > 1 ?
    distanceSqFromMagnet(magnets[1], magnetModels[1], x, y) : Infinity;
  return Math.min(d1, d2);
}

function getStepSize(position: Vector, props: IProps) {
  const distanceToClosestMagnet = getDistanceToClosestMagnet(position, props);
  if (distanceToClosestMagnet < 30) {
    return 1;
  } else if (distanceToClosestMagnet < 100) {
    return 3;
  } else if (distanceToClosestMagnet < 600) {
    return 4;
  } else if (distanceToClosestMagnet < 1000) {
    return 6;
  } else {
    return 10;
  }
}

function isOutOfBounds(pos: Vector, width: number, height: number) {
  const { x, y } = pos;
  return (
    x > kAppMaxWidth || x < 0 ||
    y > kAppMaxHeight || y < 0
  );
}

export default PixiComponent<IProps, PIXI.Graphics>("FieldLine", {
  create: props => {
    return new PIXI.Graphics();
  },
  applyProps: (instance, oldProps, newProps) => {
    const { x, y, width, height, magnets, magnetModels, fixedInternalLength } = newProps;
    const startPos = new Vector(x, y);
    instance.clear();
    instance.lineStyle(3, 0xBBBBBB);
    instance.moveTo(x, y);

    if (fixedInternalLength) {
      // fake a straight line back
      instance.lineTo(x - fixedInternalLength, y);
      return;
    }

    let segmentStart: Vector | undefined = startPos.clone();
    let currPos = startPos.clone();
    let segmentLength = 0;

    for (let i = 0; i < 5000; i++) {
      const stepSize = getStepSize(currPos, newProps);

      const fieldDirection = getFieldVectorAtPosition(magnets, magnetModels, currPos.x, currPos.y);
      const delta = fieldDirection.unit().multiply(stepSize);

      currPos = currPos.add(delta);
      instance.lineTo(currPos.x, currPos.y);
      segmentLength += stepSize;

      if (segmentStart && getDistanceToClosestMagnet(currPos, newProps) === 0) {
        drawFieldLineDirectionArrow(segmentStart, currPos, segmentLength, instance, newProps);
        break;
      }

      if (segmentStart && isOutOfBounds(currPos, width, height)) {
        drawFieldLineDirectionArrow(segmentStart, currPos, segmentLength, instance, newProps);
        segmentStart = undefined;
      }

      if (!segmentStart && !isOutOfBounds(currPos, width, height)) {
        segmentLength = 0;
        segmentStart = currPos.clone();
      }
    }
  }
});
