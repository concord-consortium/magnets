import { PossibleMagnet, Magnet } from "./magnet-canvas";
import { Vector } from "./vec-utils";

const kChargeAmount = 1000;

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
  const plusField = getFieldForPointCharge({
    x: magnet.x + (magnet.length) / 2,
    y: magnet.y,
    charge: kChargeAmount
  }, x, y);
  const minusField = getFieldForPointCharge({
    x: magnet.x - (magnet.length) / 2,
    y: magnet.y,
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
