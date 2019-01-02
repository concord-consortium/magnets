import { inject, observer } from "mobx-react";
import * as React from "react";
import { BaseComponent, IBaseProps } from "./base";

import "./bottom-bar.sass";

import { MagFieldPanelComponent } from "./mag-field-control-panel";
import { CompassComponent } from "./compass";
import { StrengthPanelComponent } from "./strength-panel";
import { MagForcesPanelComponent } from "./mag-forces-panel";
import { PolarityPanelComponent } from "./polarity-panel";

interface IProps extends IBaseProps {}
interface IState {}

@inject("stores")
@observer
export class BottomBarComponent extends BaseComponent<IProps, IState> {

  public render() {
    const {simulation} = this.stores;
    const primaryMag = simulation.getMagnetAtIndex(0);
    const secondaryMag = simulation.getMagnetAtIndex(1);
    const showMagForces: boolean = primaryMag != null && secondaryMag != null;
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
          <StrengthPanelComponent index={0}/>
          {secondaryMag
          ? <div>
              <PolarityPanelComponent index={1}/>
              <StrengthPanelComponent index={1}/>
            </div>
          : null
          }
          <MagFieldPanelComponent/>
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
