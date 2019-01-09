import { inject, observer } from "mobx-react";
import * as React from "react";
import { BaseComponent, IBaseProps } from "./base";

import "./switch.sass";
import "./mag-field-control-panel.sass";
import { SwitchComponent } from "./switch";

interface IProps extends IBaseProps {}
interface IState {}

@inject("stores")
@observer
export class MagFieldPanelComponent extends BaseComponent<IProps, IState> {

  public render() {
    const {simulation} = this.stores;
    const primaryMag = simulation.getMagnetAtIndex(0);
    const secondaryMag = simulation.getMagnetAtIndex(1);
    const posClass = primaryMag && secondaryMag ? "left" : "center";
    const enabledFieldClass = simulation.showFieldLines ? "enabled " : "";
    const enabledCloudClass = simulation.showCloud ? "enabled " : "";
    const enabledPointersClass = simulation.showPointers ? "enabled " : "";
    return (
      <div className={"mag-field-panel " + posClass}>
        <svg className="icon field-options-back2">
          <use xlinkHref="#icon-field-options-back2"/>
        </svg>
        <svg className="icon field-options-back1">
          <use xlinkHref="#icon-field-options-back1"/>
        </svg>
        <div className="vertical-container">
          <div className="title no-jitter">
          Magnetic Field Representations
          </div>
          <div className="horizontal-container">
            <div className="button" data-test="field-lines-toggle">
              <SwitchComponent
                switchOn={simulation.showFieldLines}
                label={simulation.showFieldLines ? "ON" : "OFF"}
                buttonClick={this.handleFieldLinesCheckbox}
              />
              <div className={"right-label " + enabledFieldClass + "no-jitter"}>Field Lines</div>
            </div>
            <div className="button" data-test="cloud-toggle">
              <SwitchComponent
                switchOn={simulation.showCloud}
                label={simulation.showCloud ? "ON" : "OFF"}
                buttonClick={this.handleCloudCheckbox}
              />
              <div className={"right-label " + enabledCloudClass + "no-jitter"}>Cloud</div>
            </div>
            <div className="button" data-test="pointers-toggle">
              <SwitchComponent
                switchOn={simulation.showPointers}
                label={simulation.showPointers ? "ON" : "OFF"}
                buttonClick={this.handlePointersCheckbox}
              />
              <div className={"right-label " + enabledPointersClass + "no-jitter"}>Pointers</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  private handleFieldLinesCheckbox = () => {
    const {simulation} = this.stores;
    simulation.setShowFieldLines(!simulation.showFieldLines);
  }

  private handleCloudCheckbox = () => {
    const {simulation} = this.stores;
    simulation.setShowCloud(!simulation.showCloud);
  }

  private handlePointersCheckbox = () => {
    const {simulation} = this.stores;
    simulation.setShowPointers(!simulation.showPointers);
  }

}
