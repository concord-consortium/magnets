import { inject, observer } from "mobx-react";
import * as React from "react";
import { BaseComponent, IBaseProps } from "./base";

import "./bottom-bar.sass";

import { MagFieldPanelComponent } from "./mag-field-control-panel";
import { CompassComponent } from "./compass";
import { StrengthPanelComponent } from "./strength-panel";
import { SwitchPanelComponent } from "./switch-panel";
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
    const barClass = primaryMag ? "bottom-bar unrolled" : "bottom-bar";
    const showMagForces: boolean = primaryMag !== null && secondaryMag !== null;
    const forcesLabel: string = simulation.showMagneticForces ? "ON" : "OFF";
    const forcesOn: boolean = forcesLabel === "ON" ? true : false;

    return (
      <div className={barClass}>
        <div className="row">
          <div className="panel">
            <PolarityPanelComponent index={0}/>
            <StrengthPanelComponent index={0}/>
          </div>
          {secondaryMag
           ? <div className="panel">
              <PolarityPanelComponent index={1}/>
              <StrengthPanelComponent index={1}/>
             </div>
          : null
          }
        </div>
        <div className="row">
          <MagFieldPanelComponent/>
          {showMagForces ?
            <SwitchPanelComponent
              title="Show Magnetic Forces"
              switchOn={forcesOn}
              buttonText={forcesLabel}
              label={"Force Arrows"}
              buttonClick={this.handleClickMagForcesButton}
            />
            : null}
        </div>
      </div>
    );
  }

  private handleClickMagForcesButton = () => {
    const {simulation} = this.stores;
    simulation.setShowMagneticForces(!simulation.showMagneticForces);
  }

}
