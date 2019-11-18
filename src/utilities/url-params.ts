import { parse } from "query-string";
import { AppMode } from "../models/stores";

export interface QueryParams {
  appMode?: AppMode;
  // turn field representation control on/off
  fieldRepresentations?: string;
  // the number of magnets, ?magnets=1 to only allow 1 magnet
  magnets?: string;
}

const params = parse(location.search);

export const DefaultUrlParams: QueryParams = {
  appMode: "dev",
  fieldRepresentations: "false",
  magnets: "2",
};

export const urlParams: QueryParams = params;
