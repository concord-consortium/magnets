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

  const dx = x - magnet.x;
  const dy = y - magnet.y;
  const angleRadsMagnet1 = 0;   // for now
  const cosAngleRadsMagnet1 = Math.cos(angleRadsMagnet1);
  const sinAngleRadsMagnet1 = Math.sin(angleRadsMagnet1);

  const bField1 = getBComputeField(dx * cosAngleRadsMagnet1 + dy * sinAngleRadsMagnet1,
                                  -dx * sinAngleRadsMagnet1 + dy * cosAngleRadsMagnet1);

  let bFieldSum;

  if (magnets[1]) {
    const magnet2 = magnets[1] as IMagnetProps;

    const dx2 = x - magnet2.x;
    const dy2 = y - magnet2.y;
    const angleRadsMagnet2 = 0;   // for now
    const cosAngleRadsMagnet2 = Math.cos(angleRadsMagnet2);
    const sinAngleRadsMagnet2 = Math.sin(angleRadsMagnet2);

    const bField2 = getBComputeField(dx2 * cosAngleRadsMagnet2 + dy2 * sinAngleRadsMagnet2,
                                    -dx2 * sinAngleRadsMagnet2 + dy2 * cosAngleRadsMagnet2);
    const bFieldX = (bField1[0] * cosAngleRadsMagnet1 - bField1[1] * sinAngleRadsMagnet1) +
                    (bField2[0] * cosAngleRadsMagnet2 - bField2[1] * sinAngleRadsMagnet2);
    const bFieldY = (bField1[0] * sinAngleRadsMagnet1 + bField1[1] * cosAngleRadsMagnet1) +
                    (bField2[0] * sinAngleRadsMagnet2 + bField2[1] * cosAngleRadsMagnet2);
    bFieldSum = [bFieldX, bFieldY];
  } else {
    bFieldSum = bField1;
  }

  const scale = 10E4;
  const magnitude = Math.sqrt(bFieldSum[0] * bFieldSum[0] + bFieldSum[1] * bFieldSum[1]) * scale;
  const angle = Math.atan2(bFieldSum[1], bFieldSum[0]);
  return [magnitude, angle];
}

function getBComputeField(xm: number, ym: number) {
  const b = [0, 0];
  let dx;
  let dy;
  let r2;
  let r;
  let r3;
  let cos;
  let sin;

  const numDipoles = 22;
  const m = 0.05;

  const dipoles: number[][] = [];
  const dx2 = 1 / (numDipoles - 2);    // set up dipoles under bar magnet

  for (let i = 0; i < numDipoles; i += 2) {
    dipoles[i] = [];
    dipoles[i][0] = -0.5 + i * dx2;   // x position of first line of dipoles bottom
    dipoles[i][1] = -0.04;            // y position move down by -0.04 of first line of dipoles bottom

    dipoles[i + 1] = [];
    dipoles[i + 1][0] = -0.5 + i * dx2; // x position of 2nd line of dipoles top
    dipoles[i + 1][1] = 0.04;             // y position move up by +0.04 of top line of dipoles bottom
  }

  for (let i = 0; i < numDipoles; i++) {
    dx = xm - dipoles[i][0]; // (xMagnet*cs+yMagnet*sc);
    dy = ym - dipoles[i][1]; // (-xMagnet*sc+yMagnet*cs);
    r2 = dx * dx + dy * dy;
    r = Math.sqrt(r2);
    r3 = r2 * r;
    cos = dx / r;
    sin = dy / r;
    // taken from http://en.wikipedia.org/wiki/Magnetic_moment
    b[0] += m * (3 * cos * cos - 1) / r3;   // x component
    b[1] += m * 3 * sin * cos / r3;         // y component
    if (r2 === 0) {
      b[0] = b[1] = 0;
    }
  }
  return b;
}
