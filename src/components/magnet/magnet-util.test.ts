import { IMagnetProps } from "./magnet-canvas";
import { getFieldVectorAtPosition } from "./magnet-util";
import { SimulationMagnet } from "../../models/simulation-magnet";

describe("magnetic field utils", () => {
  const magnet: IMagnetProps = {x: 0, y: 0, length: 2};
  const magnetModel = SimulationMagnet.create();

  it("correctly calculates field direction along the axis", () => {
    const field = getFieldVectorAtPosition([magnet], [magnetModel], 2, 0);
    expect(field.toAngle()).toBeCloseTo(0);
  });

  it("correctly calculates field direction along the equatorial line", () => {
    const field = getFieldVectorAtPosition([magnet], [magnetModel], 0, 30);
    expect(field.toAngle()).toBeCloseTo(Math.PI);
  });

  it("correctly calculates field direction at the center", () => {
    const field = getFieldVectorAtPosition([magnet], [magnetModel], 0, 0);
    expect(field.toAngle()).toBeCloseTo(0);
  });
});
