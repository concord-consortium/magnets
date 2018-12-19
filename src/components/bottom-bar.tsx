import { inject, observer } from "mobx-react";
import * as React from "react";
import { BaseComponent, IBaseProps } from "./base";

import "./bottom-bar.sass";

import { MagFieldPanelComponent } from "./mag-field-control-panel";
import { CompassComponent } from "./compass";
import { PolarityButtonComponent } from "./polarity-button";
import { StrengthPanelComponent } from "./strength-control-panel";

interface IProps extends IBaseProps {}
interface IState {}

@inject("stores")
@observer
export class BottomBarComponent extends BaseComponent<IProps, IState> {

  public render() {
    const {ui} = this.stores;
    const primaryMagType = ui.primaryMagnet;
    const secondaryMagType = ui.secondaryMagnet;
    const secondaryRowClass = secondaryMagType !== "none" ? "row" : "row hidden";
    const barClass = primaryMagType !== "none" ? "bottom-bar unrolled" : "bottom-bar";
    return (
      <div className={barClass}>
        <div className="row">
          <PolarityButtonComponent/>
          <StrengthPanelComponent/>
          <div className={secondaryRowClass}>
            <PolarityButtonComponent/>
            <StrengthPanelComponent/>
          </div>
        </div>
        <div className="row">
          <CompassComponent/>
          <MagFieldPanelComponent/>
        </div>
      </div>
    );
  }
}
