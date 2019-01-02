import { inject, observer } from "mobx-react";
import * as React from "react";
import { BaseComponent, IBaseProps } from "./base";

import "./mag-forces-panel.sass";
import { SwitchComponent } from "./switch";

interface IProps extends IBaseProps {}
interface IState {}

@inject("stores")
@observer
export class MagForcesPanelComponent extends BaseComponent<IProps, IState> {

  public render() {
    const {simulation} = this.stores;
    const forcesLabel: string = simulation.showMagneticForces ? "ON" : "OFF";
    const forcesOn: boolean = forcesLabel === "ON" ? true : false;
    const enabledClass = forcesOn ? "enabled" : "";
    return (
      <div className="mag-forces-panel">
        <svg className="icon force-options-back2">
          <use xlinkHref="#icon-force-options-back2"/>
        </svg>
        <svg className="icon force-options-back1">
          <use xlinkHref="#icon-force-options-back1"/>
        </svg>
        <div className="vertical-container">
          <div className="title">Show Magnetic Forces</div>
          <div className="horizontal-container">
            <SwitchComponent
              switchOn={forcesOn}
              label={forcesLabel}
              buttonClick={this.handleClickMagForcesButton}
            />
            <div className={"right-label " + enabledClass}>Force Arrows</div>
          </div>
        </div>
      </div>
    );
  }

  private handleClickMagForcesButton = () => {
    const {simulation} = this.stores;
    simulation.setShowMagneticForces(!simulation.showMagneticForces);
  }

}
