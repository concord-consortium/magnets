import { SimulationMagnet, SimulationMagnetType } from "./simulation-magnet";

describe("magnet model", () => {
  let magnet: SimulationMagnetType;

  beforeEach(() => {
    magnet = SimulationMagnet.create({
      active: false
    });
  });

  it("has default values", () => {
    expect(magnet.active).toBe(false);
  });

  it("uses override values", () => {
    magnet = SimulationMagnet.create({
      active: true
    });
    expect(magnet.active).toBe(true);
  });

});
