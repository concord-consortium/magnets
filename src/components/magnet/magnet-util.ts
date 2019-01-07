import { PossibleMagnet, kMagnetLength, kMagnetHeight } from "./magnet-canvas";
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

export function distanceSqFromMagnet(magnet: PossibleMagnet, x: number, y: number) {
  if (!magnet) {
    return Infinity;
  }

  const dx = Math.max(Math.abs(x - magnet.x) - magnet.length / 2, 0);
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

  const dx = x - magnet1.x;
  const dy = y - magnet1.y;

  const bField1 = getBFieldForMagnet(dx, dy, magnetModels[0]);

  const magnet2 = magnets[1];
  if (magnet2) {
    const dx2 = x - magnet2.x;
    const dy2 = y - magnet2.y;

    const bField2 = getBFieldForMagnet(dx2, dy2, magnetModels[1]);
    return bField1.add(bField2);
  } else {
    return bField1;
  }
}

function getBFieldForMagnet(relX: number, relY: number, magnet: SimulationMagnetType): Vector {
  let b = new Vector(0, 0);

  let m = magnet.strength;
  if (magnet.flipped) {
    m *= -1;
  }

  // set up dipoles under bar magnet
  const dipoles: number[][] = [];
  const nColumns = 25;
  const nRows = 3;
  const nDipoles = nRows * nColumns;
  const xSpacing = kMagnetLength / (nColumns - 1);
  const ySpacing = kMagnetHeight / (nRows - 1);

  for (let i = 0; i < nDipoles; i ++) {
    const column = Math.floor(i / nRows);
    const row = i % nRows;
    const x = -(kMagnetLength / 2) + (xSpacing * column);
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
    b = b.add(xComponent, yComponent);
  }

  return b;
}
