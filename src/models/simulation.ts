import { types } from "mobx-state-tree";
import { SimulationMagnetType, SimulationMagnet, MagnetType,
        CoilPolarityType, PolarityType } from "./simulation-magnet";

const kMaxMagnets = 2;

export const SimulationModel = types
  .model("Simulation", {
    showFieldLines: false,
    showCloud: false,
    showPointers: true,
    showMagneticForces: false,
    magnets: types.array(SimulationMagnet),
    slideArrowStarted: false,
    slideArrowComplete: false,
  })
  .views((self) => {
    return {
      getMagnetAtIndex(i: number) {
        return i != null && i < self.magnets.length
          ? self.magnets[i]
          : null;
      }
    };
  })
  .actions((self) => {
    return {
      addMagnet(magnet: SimulationMagnetType) {
        if (self.magnets.length < kMaxMagnets) {
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
          self.magnets[index].type = type;
        }
      },
      toggleMagnetBarPolarity(index: number) {
        if (index < self.magnets.length ) {
          const newVal: PolarityType = self.magnets[index].barPolarity === "N-S" ? "S-N" : "N-S";
          self.magnets[index].barPolarity = newVal;
        }
      },
      setMagnetBarStrength(index: number, val: number) {
        if (index < self.magnets.length ) {
          self.magnets[index].barStrength = val;
        }
      },
      setMagnetCoilPolarity(index: number, val: CoilPolarityType) {
        if (index < self.magnets.length ) {
          self.magnets[index].coilPolarity = val;
        }
      },
      setMagnetCoilStrength(index: number, val: number) {
        if (index < self.magnets.length ) {
          self.magnets[index].coilStrength = val;
        }
      },
      setMagnetCurrentStrength(index: number, val: number) {
        if (index < self.magnets.length ) {
          self.magnets[index].currentStrength = val;
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
      },
      setSlideArrowStarted(val: boolean) {
        self.slideArrowStarted = val;
      },
      setSlideArrowComplete(val: boolean) {
        self.slideArrowComplete = val;
      }
    };
  });

export type SimulationModelType = typeof SimulationModel.Type;
