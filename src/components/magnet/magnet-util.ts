
// *** Stub ***
/**
 * Will take some specification of 0-2 magnets, and return a tuple, [magnitude, direction]
 * where magnitude is 0-1 and direction is in radians. (Subject to change when math is added.)
 */
export function getFieldMagnitudeAndDirection(magnetInfo: any, x: number, y: number) {
  // strongest at point 80,80
  const dx = Math.abs(80 - x);
  const dy = Math.abs(80 - y);
  const distance = Math.min(Math.sqrt((dx * dx) + (dy * dy)), 200);
  const magnitude = Math.max(0, (1 - (distance / 200)));

  // pretty pattern
  const direction = (x / 100) + (y / 100);
  return [magnitude, direction];
}
