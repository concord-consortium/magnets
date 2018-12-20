import { IMagnetProps, PossibleMagnet } from "./magnet-canvas";

// *** Stub ***
/**
 * Will take some specification of 0-2 magnets, and return a tuple, [magnitude, direction]
 * where magnitude is 0-1 and direction is in radians. (Subject to change when math is added.)
 */
export function getFieldMagnitudeAndDirection(magnets: PossibleMagnet[], x: number, y: number) {
  // FAKE just look at magnet 1
  const magnet = magnets[0];
  if (!magnet) {
    return [0, 0];
  }

  // FAKE: strongest at points at either end
  const dx1 = (magnet.x + (magnet.length / 2)) - x;
  const dx2 = (magnet.x - (magnet.length / 2)) - x;
  const dy = magnet.y - y;

  const dxMin = Math.min(Math.abs(dx1), Math.abs(dx2));
  const distance = Math.min(Math.sqrt((dxMin * dxMin) + (dy * dy)), 150);
  const magnitude = Math.max(0, (1 - (distance / 150)));

  // FAKE: point at one end
  const direction = Math.atan2(dy, dx1);
  return [magnitude, direction];
}
