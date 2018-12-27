import { UIModel, UIModelType } from "./ui";
import { SimulationModel, SimulationModelType } from "./simulation";

export type AppMode = "authed" | "dev" | "test" | "demo" | "qa";

export interface IStores {
  appMode: AppMode;
  ui: UIModelType;
  simulation: SimulationModelType;
}

export interface ICreateStores {
  appMode?: AppMode;
  ui?: UIModelType;
  simulation?: SimulationModelType;
}

export function createStores(params?: ICreateStores): IStores {
  return {
    appMode: params && params.appMode ? params.appMode : "dev",
    ui: params && params.ui || UIModel.create({}),
    simulation: params && params.simulation
    || SimulationModel.create({}),
  };
}
