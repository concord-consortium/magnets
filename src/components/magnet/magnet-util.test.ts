import { IMagnetProps } from "./magnet-canvas";
import { getFieldMagnitudeAndDirection } from "./magnet-util";

describe("magnetic field utils", () => {

  it("correctly calculates field direction at the center", () => {
    const magnet: IMagnetProps = {x: 0, y: 0, length: 2};
    const field = getFieldMagnitudeAndDirection([magnet], 0, 0);
    expect(field[1]).toBeCloseTo(Math.PI);
  });

});
