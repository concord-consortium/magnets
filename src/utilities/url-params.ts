import { parse } from "query-string";
import { AppMode } from "../models/stores";

export interface QueryParams {
  appMode?: AppMode;
  // turn field representation control on/off
  fieldRepresentations?: string;
}

const params = parse(location.search);

export const DefaultUrlParams: QueryParams = {
  appMode: "dev",
  fieldRepresentations: "false",
};

export const urlParams: QueryParams = params;
