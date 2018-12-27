import { types } from "mobx-state-tree";
import { SimulationMagnetType, SimulationMagnet, MagnetType,
         MagnetTypeEnum, CoilPolarityType, PolarityType } from "./simulation-magnet";

export const SimulationModel = types
  .model("Simulation", {
    showFieldLines: false,
    showCloud: false,
    showPointers: false,
    showMagneticForces: false,
    magnets: types.array(SimulationMagnet),
    maxMagnets: 2,
  })
  .views((self) => {
    return {
      getMagnetAtIndex(i?: number) {
        return i != null && i < self.magnets.length
          ? self.magnets[i]
          : null;
      }
    };
  })
  .actions((self) => {
    return {
      addMagnet(magnet: SimulationMagnetType) {
        if (self.magnets.length < self.maxMagnets) {
          self.magnets.push(magnet);
          return true;
        }
        return false;
      },
      removeMagnet(index: number) {
        if (index < self.magnets.length ) {
          self.magnets.splice(index, 1);
        }
      },
      setMagnetType(index: number, type: MagnetType) {
        if (index < self.magnets.length ) {
          self.magnets[index].setType(type);
        }
      },
      setMagnetBarPolarity(index: number, val: PolarityType) {
        if (index < self.magnets.length ) {
          self.magnets[index].setBarPolarity(val);
        }
      },
      setMagnetBarStrength(index: number, val: number) {
        if (index < self.magnets.length ) {
          self.magnets[index].setBarStrength(val);
        }
      },
      setMagnetCoilPolarity(index: number, val: CoilPolarityType) {
        if (index < self.magnets.length ) {
          self.magnets[index].setCoilPolarity(val);
        }
      },
      setMagnetCoilStrength(index: number, val: number) {
        if (index < self.magnets.length ) {
          self.magnets[index].setCoilStrength(val);
        }
      },
      setMagnetCurrentStrength(index: number, val: number) {
        if (index < self.magnets.length ) {
          self.magnets[index].setCurrentStrength(val);
        }
      },
      setShowFieldLines(val: boolean) {
        self.showFieldLines = val;
      },
      setShowCloud(val: boolean) {
        self.showCloud = val;
      },
      setShowPointers(val: boolean) {
        self.showPointers = val;
      },
      setShowMagneticForces(val: boolean) {
        self.showMagneticForces = val;
      }
    };
  });

export type SimulationModelType = typeof SimulationModel.Type;
