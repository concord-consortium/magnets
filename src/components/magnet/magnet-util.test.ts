import { IMagnetProps } from "./magnet-canvas";
import { getFieldVectorAtPosition } from "./magnet-util";

describe("magnetic field utils", () => {

  it("correctly calculates field direction at the center", () => {
    const magnet: IMagnetProps = {x: 0, y: 0, length: 2};
    const field = getFieldVectorAtPosition([magnet], 0, 0);
    expect(field.toAngle()).toBeCloseTo(Math.PI);
  });

});
