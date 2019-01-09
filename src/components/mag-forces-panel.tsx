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
    const enabledClass = forcesOn ? "enabled " : " ";
    const lockClass = forcesOn ? "lock-closed " : "lock-open ";
    const lockIcon = forcesOn ? "#icon-lock-closed" : "#icon-lock-open";
    const lockText = forcesOn ? "X axis movement only" : "Free movement";
    return (
      <div className="mag-forces-panel">
        <svg className="icon force-options-back2">
          <use xlinkHref="#icon-force-options-back2"/>
        </svg>
        <svg className="icon force-options-back1">
          <use xlinkHref="#icon-force-options-back1"/>
        </svg>
        <div className="vertical-container full">
          <div className="title no-jitter">Show Magnetic Forces</div>
          <div className="horizontal-container justify-left">
            <SwitchComponent
              switchOn={forcesOn}
              label={forcesLabel}
              buttonClick={this.handleClickMagForcesButton}
            />
            <div className="vertical-container">
              <div className={"right-label " + enabledClass + "no-jitter"}>Force Arrows</div>
              <div className="horizontal-container">
                <svg className={"icon " + lockClass}>
                  <use xlinkHref={lockIcon}/>
                </svg>
                <div className={"right-label " + lockClass + enabledClass + "no-jitter"}>{lockText}</div>
              </div>
            </div>
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
