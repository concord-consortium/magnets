import { inject, observer } from "mobx-react";
import * as React from "react";
import { BaseComponent, IBaseProps } from "./base";

import "./bottom-bar.sass";

import { MagFieldPanelComponent } from "./mag-field-control-panel";
import { StrengthPanelComponent } from "./strength-panel";
import { MagForcesPanelComponent } from "./mag-forces-panel";
import { PolarityPanelComponent } from "./polarity-panel";
import { urlParams } from "../utilities/url-params";

interface IProps extends IBaseProps {}
interface IState {}

@inject("stores")
@observer
export class BottomBarComponent extends BaseComponent<IProps, IState> {

  public render() {
    const {fieldRepresentations, strength} = urlParams;
    const {simulation} = this.stores;
    const primaryMag = simulation.getMagnetAtIndex(0);
    const secondaryMag = simulation.getMagnetAtIndex(1);
    const showMagFieldPanel: boolean = fieldRepresentations ? fieldRepresentations.toLowerCase() === "true" : false;
    const showMagForces: boolean = primaryMag != null && secondaryMag != null;
    const showStrengthPanel: boolean = strength ? strength.toLowerCase() !== "false" : true;
    if (!primaryMag) {
      return (
        <div className="bottom-bar">
          {this.renderLogo()}
        </div>
      );
    } else {
      return (
        <div className="bottom-bar">
          <PolarityPanelComponent index={0}/>
          {showStrengthPanel && <StrengthPanelComponent index={0}/>}
          {secondaryMag
          ? <div>
              <PolarityPanelComponent index={1}/>
              {showStrengthPanel && <StrengthPanelComponent index={1}/>}
            </div>
          : null
          }
          {showMagFieldPanel && <MagFieldPanelComponent/>}
          {showMagForces ?
            <MagForcesPanelComponent/>
            : null}
            {this.renderLogo()}
        </div>
      );
    }
  }

  private renderLogo = () => {
    return (
      <div>
        <svg className="icon logo-back2">
          <use xlinkHref="#icon-logo-back2"/>
        </svg>
        <svg className="icon logo-back1">
          <use xlinkHref="#icon-logo-back1"/>
        </svg>
        <svg className="icon logo">
          <use xlinkHref="#icon-logo"/>
        </svg>
      </div>
    );
  }

}
