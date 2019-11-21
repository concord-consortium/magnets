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
  // ?current=show changes flip panel to polarity panel
  current?: string;
}

const params = parse(location.search);

export const DefaultUrlParams: QueryParams = {
  appMode: "dev",
  fieldRepresentations: "false",
  magnets: "2",
  battery: "true",
  strength: "false",
  current: "hide"
};

export const urlParams: QueryParams = params;
