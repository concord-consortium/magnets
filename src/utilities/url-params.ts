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
  // default value of magnetic field arrows rendering
  // ?fieldArrows=true shows field arrows
  fieldArrows: string;
  // initial strength of the magnet when it's added
  // ?initialStrength=weak/medium/strong
  initialStrength: "weak" | "medium" | "strong";
  // toggle rendering of multiple bars for stronger magnets
  // ?multipleBars=false renders only one bar for each magnet strength
  multipleBars: string;
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
  forceArrows: "false",
  fieldArrows: "true",
  initialStrength: "weak",
  multipleBars: "true"
};

export const urlParams: QueryParams = {...DefaultUrlParams, ...params };
