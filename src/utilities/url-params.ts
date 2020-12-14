import { parse } from "query-string";
import { AppMode } from "../models/stores";

export interface QueryParams {
  appMode?: AppMode;
  // turn field representation control on/off
  fieldRepresentations?: string;
  // the number of magnets, ?magnets=1 to only allow 1 magnet
  magnets?: string;
  // toggle between battery and coil, ?battery=false to use coil
  battery?: string;
  // turn strength control on/off, ?strength=true to enable
  strength?: string;
  // toggle polarity control panel mode (flip/polarity)
  // ?current=true changes flip panel to polarity panel
  current?: string;
  // toggle the top bar UI letting user pick magnet type
  // ?topBar=false hides the UI and loads the simulation with defaults magnets in place
  topBar?: string;
  // turn magnetic force arrows panel on/off, ?forceArrows=true to enable
  forceArrowsPanel: string;
  // default value of magnetic force arrows rendering and X axis locking
  // ?foreArrows=true shows force arrows and locks X axis on simulation load
  forceArrows: string;
}

const params = parse(location.search);

export const DefaultUrlParams: QueryParams = {
  appMode: "dev",
  fieldRepresentations: "false",
  magnets: "2",
  battery: "false",
  strength: "true",
  current: "true",
  topBar: "true",
  forceArrowsPanel: "true",
  forceArrows: "false"
};

export const urlParams: QueryParams = {...DefaultUrlParams, ...params };
