import { types } from "mobx-state-tree";

export const MagnetTypeEnum = types.enumeration("type", ["none", "bar", "coil"]);
export type MagnetType = typeof MagnetTypeEnum.Type;

export const UIModel = types
  .model("UI", {
    showTopBarCurtain: false,
  })
  .actions((self) => {
    return {
      setShowTopBarCurtain(val: boolean) {
        self.showTopBarCurtain = val;
      }
    };
  });

export type UIModelType = typeof UIModel.Type;
