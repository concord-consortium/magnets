import { types } from "mobx-state-tree";

export const MagnetTypeEnum = types.enumeration("type", ["none", "bar", "coil"]);
export type MagnetType = typeof MagnetTypeEnum.Type;

export const UIModel = types
  .model("UI", {
    sampleText: "Hello World",
    showTopBarCurtain: false,
    primaryMagnet: types.optional(MagnetTypeEnum, "none"),
    secondaryMagnet: types.optional(MagnetTypeEnum, "none"),
    strengthSlider: 2,
    showFieldLines: false,
    showCloud: false,
    showPointers: false
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
      },
      setShowFieldLines(val: boolean) {
        self.showFieldLines = val;
      },
      setShowCloud(val: boolean) {
        self.showCloud = val;
      },
      setShowPointers(val: boolean) {
        self.showPointers = val;
      }
    };
  });

export type UIModelType = typeof UIModel.Type;
