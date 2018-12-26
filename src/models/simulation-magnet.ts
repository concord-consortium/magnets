import { types } from "mobx-state-tree";
import uuid = require("uuid");

export const MagnetTypeEnum = types.enumeration("type", ["bar", "coil"]);
export type MagnetType = typeof MagnetTypeEnum.Type;

export const PolarityTypeEnum = types.enumeration("type", ["N-S", "S-N"]);
export type PolarityType = typeof PolarityTypeEnum.Type;

export const CoilPolarityTypeEnum = types.enumeration("type", ["plus-minus", "off", "minus-plus"]);
export type CoilPolarityType = typeof CoilPolarityTypeEnum.Type;

export const SimulationMagnet = types
  .model("Magnet", {
    active: false,
    type: types.optional(MagnetTypeEnum, "bar"),
    barPolarity: types.optional(PolarityTypeEnum, "N-S"),
    barStrength: .6,
    coilPolarity: types.optional(CoilPolarityTypeEnum, "plus-minus"),
    coilStrength: .75,
    currentStrength: .75,
    id: types.optional(types.identifier, () => uuid()),
  })
  .views((self) => {
    return {
      get strength() {
        return self.type === "bar"
          ? self.barStrength
          : self.coilStrength * self.currentStrength;
      }
    };
  });

export type SimulationMagnetType = typeof SimulationMagnet.Type;
