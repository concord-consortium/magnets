import { PossibleMagnet, Magnet } from "./magnet-canvas";
import { Vector } from "./vec-utils";

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

export function getFieldMagnitudeAndDirection(magnets: PossibleMagnet[], x: number, y: number) {
  const fieldTotal = magnets.reduce((acc: Vector, magnet: PossibleMagnet) => {
    if (magnet) {
      return acc.add(getFieldForMagnet(magnet, x, y));
    } else {
      return acc;
    }
  }, new Vector(0, 0));

  return [fieldTotal.length(), fieldTotal.toAngle()];
}

function getFieldForMagnet(magnet: Magnet, x: number, y: number) {
  const dipoles = [];
  const posX = magnet.x + (magnet.length) / 2;
  const negX = magnet.x - (magnet.length) / 2;
  const magStart = magnet.y - kMagnetHeight / 2;
  const magIncr = kMagnetHeight / kNumDipoles;
  for (let i = 0; i < kNumDipoles; i++) {
    const dipoleY = magStart + (magIncr * i);
    dipoles.push({posX, posY: dipoleY, negX, negY: dipoleY});
  }

  return dipoles.reduce((acc: Vector, dipole: Dipole) => {
    return acc.add(getFieldForDipole(dipole, x, y));
  }, new Vector(0, 0));
}

function getFieldForDipole(dipole: Dipole, x: number, y: number) {
  const plusField = getFieldForPointCharge({
    x: dipole.posX,
    y: dipole.posY,
    charge: kChargeAmount
  }, x, y);
  const minusField = getFieldForPointCharge({
    x: dipole.negX,
    y: dipole.negY,
    charge: -kChargeAmount
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
