import { types } from "mobx-state-tree";

export const MagnetTypeEnum = types.enumeration("type", ["none", "bar", "coil"]);
export type MagnetType = typeof MagnetTypeEnum.Type;

export const UIModel = types
  .model("UI", {
    sampleText: "Hello World",
    showTopBarCurtain: false,
    primaryMagnet: types.optional(MagnetTypeEnum, "none"),
    secondaryMagnet: types.optional(MagnetTypeEnum, "none"),
    strengthSlider: 2
  })
  .actions((self) => {
    return {
      setSampleText(text: string) {
        self.sampleText = text;
      },
      setShowTopBarCurtain(val: boolean) {
        self.showTopBarCurtain = val;
      },
      setPrimaryMagnet(type: MagnetType) {
        self.primaryMagnet = type;
      },
      setSecondaryMagnet(type: MagnetType) {
        self.secondaryMagnet = type;
      },
      setStrengthSlider(val: number) {
        self.strengthSlider = val;
      }
    };
  });

export type UIModelType = typeof UIModel.Type;
