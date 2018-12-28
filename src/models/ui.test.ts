import { UIModel, UIModelType } from "./ui";

describe("ui model", () => {
  let ui: UIModelType;

  beforeEach(() => {
    ui = UIModel.create({});
  });

  it("has default values", () => {
    expect(ui.showTopBarCurtain).toBe(false);
  });

  it("sets new values", () => {
    ui.setShowTopBarCurtain(true);
    expect(ui.showTopBarCurtain).toBe(true);
  });

});
