import { PossibleMagnet, Magnet } from "./magnet-canvas";
import { Vector } from "./vec-utils";
import { SimulationMagnetType } from "../../models/simulation-magnet";

const kChargeAmount = 100;
const kMagnetHeight = 50;
const kNumDipoles = 10;

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

export function pointInMagnet(magnet: PossibleMagnet, x: number, y: number) {
  if (!magnet) {
    return false;
  }

  const dx = Math.max(Math.abs(x - magnet.x) - magnet.length / 2, 0);
  const dy = Math.max(Math.abs(y - magnet.y) - kMagnetHeight / 2, 0);
  return dx ** 2 + dy ** 2 === 0;
}

export function getFieldVectorAtPosition(
  magnets: PossibleMagnet[],
  magnetModels: SimulationMagnetType[],
  x: number,
  y: number
) {
  return magnets.reduce((acc: Vector, magnet: PossibleMagnet, index: number) => {
    const magnetModel = index < magnetModels.length && magnetModels[index];
    if (magnet && magnetModel) {
      return acc.add(getFieldForMagnet(magnet, magnetModel, x, y));
    } else {
      return acc;
    }
  }, new Vector(0, 0));
}

function getFieldForMagnet(magnet: Magnet, magnetModel: SimulationMagnetType, x: number, y: number) {
  const dipoles: Dipole[] = [];
  const posX = magnet.x + (magnet.length) / 2;
  const negX = magnet.x - (magnet.length) / 2;
  const magStart = magnet.y - kMagnetHeight / 2;
  const magIncr = kMagnetHeight / kNumDipoles;
  const charge = kChargeAmount * magnetModel.strength;
  for (let i = 0; i < kNumDipoles; i++) {
    const dipoleY = magStart + (magIncr * i);
    dipoles.push({posX, posY: dipoleY, negX, negY: dipoleY, charge});
  }

  const field = dipoles.reduce((acc: Vector, dipole: Dipole) => {
    return acc.add(getFieldForDipole(dipole, x, y));
  }, new Vector(0, 0));

  if (pointInMagnet(magnet, x, y)) {
    // Fake the field direction inside of the magnet
    return new Vector(1, 0).multiply(field.length());
  } else {
    return field;
  }
}

function getFieldForDipole(dipole: Dipole, x: number, y: number) {
  const plusField = getFieldForPointCharge({
    x: dipole.posX,
    y: dipole.posY,
    charge: dipole.charge
  }, x, y);
  const minusField = getFieldForPointCharge({
    x: dipole.negX,
    y: dipole.negY,
    charge: -dipole.charge
  }, x, y);

  return plusField.add(minusField);
}

function getFieldForPointCharge(pointCharge: PointCharge, x: number, y: number) {
  const chargeVec = new Vector(pointCharge.x, pointCharge.y);
  const pointVec = new Vector(x, y);
  const distanceVec = pointVec.subtract(chargeVec);
  const distanceUnitVec = distanceVec.unit();

  return distanceUnitVec.multiply(pointCharge.charge / (distanceVec.length() ** 2));
}
