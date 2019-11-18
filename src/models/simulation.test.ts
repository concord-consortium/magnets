import { SimulationModel, SimulationModelType } from "./simulation";

describe("simulation model", () => {
  let simulation: SimulationModelType;

  beforeEach(() => {
    simulation = SimulationModel.create({});
  });

  it("has default values", () => {
    expect(simulation.magnets).toEqual([]);
    expect(simulation.showFieldLines).toBe(false);
    expect(simulation.showCloud).toBe(false);
    expect(simulation.showPointers).toBe(true);
    expect(simulation.showMagneticForces).toBe(false);
  });

  it("sets new values", () => {
    simulation.setShowFieldLines(true);
    expect(simulation.showFieldLines).toBe(true);
    simulation.setShowCloud(true);
    expect(simulation.showCloud).toBe(true);
    simulation.setShowPointers(true);
    expect(simulation.showPointers).toBe(true);
    simulation.setShowMagneticForces(true);
    expect(simulation.showMagneticForces).toBe(true);
  });
});
