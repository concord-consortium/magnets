import { PossibleMagnet, kMagnetHeight } from "./magnet-canvas";
import { Vector } from "./vec-utils";
import { SimulationMagnetType } from "../../models/simulation-magnet";

interface Dipole {
  posX: number;
  posY: number;
  negX: number;
  negY: number;
  charge: number;
}

interface PointCharge {
  x: number;
  y: number;
  charge: number;
}

export function distanceSqFromMagnet(magnet: PossibleMagnet, magnetModel: SimulationMagnetType, x: number, y: number) {
  if (!magnet) {
    return Infinity;
  }

  const dx = Math.max(Math.abs(x - magnet.x) - (magnetModel.magnetLength) / 2, 0);
  const dy = Math.max(Math.abs(y - magnet.y) - kMagnetHeight / 2, 0);
  return dx ** 2 + dy ** 2;
}

export function getFieldVectorAtPosition(
  magnets: PossibleMagnet[],
  magnetModels: SimulationMagnetType[],
  x: number,
  y: number
): Vector {
  const magnet1 = magnets[0];
  if (!magnet1) {
    return new Vector(0, 0);
  }

  const magnetModel1 = magnetModels[0];

  const dx = x - magnet1.x;
  const dy = y - magnet1.y;

  const bField1 = getBFieldForMagnet(dx, dy, magnetModel1, magnetModel1.magnetLength);
  if (distanceSqFromMagnet(magnet1, magnetModel1, x, y) === 0) {
    return !magnetModel1.flipped
      ? new Vector(-1, 0).multiply(bField1.length())
      : new Vector(1, 0).multiply(bField1.length());
  }

  const magnet2 = magnets[1];
  if (magnet2) {
    const magnetModel2 = magnetModels[1];
    const dx2 = x - magnet2.x;
    const dy2 = y - magnet2.y;

    const bField2 = getBFieldForMagnet(dx2, dy2, magnetModel2, magnetModel2.magnetLength);
    if (distanceSqFromMagnet(magnet2, magnetModel2, x, y) === 0) {
      return !magnetModel2.flipped
        ? new Vector(-1, 0).multiply(bField2.length())
        : new Vector(1, 0).multiply(bField2.length());
    } else {
      return bField1.add(bField2);
    }
  } else {
    return bField1;
  }
}

function getBFieldForMagnet(relX: number, relY: number, magnet: SimulationMagnetType, length: number): Vector {
  let b = new Vector(0, 0);

  let m = magnet.strength;
  if (!magnet.flipped) {
    m *= -1;
  }

  // set up dipoles under bar magnet
  const dipoles: number[][] = [];
  const nColumns = magnet.magnetLength > 100
    ? 20 : magnet.magnetLength > 50 ? 10 : 6;
  const nRows = 3;
  const nDipoles = nRows * nColumns;
  const xSpacing = length / (nColumns - 1);
  const ySpacing = kMagnetHeight / (nRows - 1);

  for (let i = 0; i < nDipoles; i ++) {
    const column = Math.floor(i / nRows);
    const row = i % nRows;
    const x = -(length / 2) + (xSpacing * column);
    const y = -(kMagnetHeight / 2) + (ySpacing * row);
    dipoles[i] = [x, y];
  }

  // calculate field one dipole at a time, and add to cumulative field
  for (let i = 0; i < nDipoles; i++) {
    const dx = relX - dipoles[i][0];
    const dy = relY - dipoles[i][1];
    const r2 = dx * dx + dy * dy;
    const r = Math.sqrt(r2);
    const r3 = r2 * r;
    const cos = dx / r;
    const sin = dy / r;

    // taken from http://en.wikipedia.org/wiki/Magnetic_moment
    const xComponent = m * (3 * cos * cos - 1) / r3;
    const yComponent = m * 3 * sin * cos / r3;
    // accumulate
    b = b.add(new Vector(xComponent, yComponent));
  }

  return b;
}

export function getForceBetweenMagnets(magnets: PossibleMagnet[], magnetModels: SimulationMagnetType[]): number {
  if (magnets.length < 2 || magnetModels.length < 2) return 0;
  const magnet0 = magnets[0];
  const magnet1 = magnets[1];
  const model0 = magnetModels[0];
  const model1 = magnetModels[1];
  if (!magnet0 || !magnet1 || !model0 || !model1) return 0;

  const m0 = model0.strength;
  const m1 = model1.strength;

  let force = 0;
  // calculate and sum forces between all four ends
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      const x0 = i === 0 ? magnet0.x - model0.magnetLength / 2 : magnet0.x + model0.magnetLength / 2;
      const x1 = j === 0 ? magnet1.x - model1.magnetLength / 2 : magnet1.x + model1.magnetLength / 2;
      const r = x1 - x0;
      let direction = 1;
      if ((i === j && model0.flipped === model1.flipped) ||
          (i !== j && model0.flipped !== model1.flipped)) {
        direction = -1;
      }
      force += (m0 * m1 * direction) / r ** 2;
    }
  }
  return force;
}
