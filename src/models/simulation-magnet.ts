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
          : self.coilPolarity === "off"
            ? 0
            : self.coilStrength * self.currentStrength;
      },
      get magnetLength(): number {
        if (self.type === "bar") {
          return 240;
        }
        else {
          switch (self.coilStrength) {
            case 1:
              return 230;
            case .75:
              return 125;
            default:
              return 30;
          }
        }
      },
      get magnetImage(): string {
        if (self.type === "bar") {
          switch (self.barStrength) {
            case 1:
              return "assets/magnet-bar-3.png";
            case .6:
              return "assets/magnet-bar-2.png";
            default:
              return "assets/magnet-bar-1.png";
          }
        }
        else {
          switch (self.coilStrength) {
            case 1:
              return "assets/magnet-coil-3.png";
            case .75:
              return "assets/magnet-coil-2.png";
            default:
              return "assets/magnet-coil-1.png";
          }
        }
      },
      get flipped() {
        return self.type === "bar"
          ? self.barPolarity === "S-N"
          : self.coilPolarity === "minus-plus";
      },
      get polarityCurrentImageOffset(): number {
        let offset = 0;
        if (self.type && self.type === "coil") {
          switch (self.coilStrength) {
            case 1:
              offset = 75;
              break;
            case .75:
              offset = 20;
              break;
            default:
              offset = 0;
              break;
          }
        }
        return offset;
      },
      get leftPoleImage(): string {
        let image = "";
        if (self.type === "coil" && self.coilPolarity !== "off") {
          image = self.coilPolarity === "plus-minus" ? "./assets/N.png" : "./assets/S.png";
        }
        return image;
      },
      get rightPoleImage(): string {
        let image = "";
        if (self.type === "coil" && self.coilPolarity !== "off") {
          image = self.coilPolarity === "plus-minus" ? "./assets/S.png" : "./assets/N.png";
        }
        return image;
      },
      get currentArrowImage(): string {
        let image = "";
        if (self.type === "coil" && self.coilPolarity !== "off") {
          switch (self.currentStrength) {
            case 1:
              image = "./assets/current-arrow-strong.png";
              break;
            case .75:
              image = "./assets/current-arrow-med.png";
              break;
            default:
              image = "./assets/current-arrow-weak.png";
              break;
          }
        }
        return image;
      },
      get voltageImage(): string {
        let image = "";
        image = self.type === "coil" && self.coilPolarity !== "off"
                ? "./assets/voltage-source.png" : "";
        return image;
      },
      get voltageFlip(): boolean {
        return (self.type === "coil" && self.coilPolarity === "minus-plus" ? true : false);
      },
    };
  });

export type SimulationMagnetType = typeof SimulationMagnet.Type;
