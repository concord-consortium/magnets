import { types } from "mobx-state-tree";
import uuid = require("uuid");

export const MagnetTypeEnum = types.enumeration("type", ["none", "bar", "coil"]);
export type MagnetType = typeof MagnetTypeEnum.Type;

export const PolarityTypeEnum = types.enumeration("type", ["N-S", "S-N"]);
export type PolarityType = typeof PolarityTypeEnum.Type;

export const CoilPolarityTypeEnum = types.enumeration("type", ["plus-minus", "off", "minus-plus"]);
export type CoilPolarityType = typeof CoilPolarityTypeEnum.Type;

export const SimulationMagnet = types
  .model("Magnet", {
    active: false,
    type: types.optional(MagnetTypeEnum, "none"),
    barPolarity: "N-S",
    barStrength: 1,
    coilPolarity: "plus-minus",
    coilStrength: 5,
    currentStrength: 1,
    id: types.optional(types.identifier, () => uuid()),
  })
  .views(self => ({
    setActive(val: boolean) {
      self.active = val;
    },
    setType(val: MagnetType) {
      self.type = val;
    },
    setBarPolarity(val: PolarityType) {
      self.barPolarity = val;
    },
    setBarStrength(val: number) {
      self.barStrength = val;
    },
    setCoilPolarity(val: CoilPolarityType) {
      self.coilPolarity = val;
    },
    setCoilStrength(val: number) {
      self.coilStrength = val;
    },
    setCurrentStrength(val: number) {
      self.currentStrength = val;
    },
  }));

export type SimulationMagnetType = typeof SimulationMagnet.Type;
