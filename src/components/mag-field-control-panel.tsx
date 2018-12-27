import { inject, observer } from "mobx-react";
import * as React from "react";
import { BaseComponent, IBaseProps } from "./base";

import "./mag-field-control-panel.sass";
import { SwitchComponent } from "./switch";

interface IProps extends IBaseProps {}
interface IState {}

@inject("stores")
@observer
export class MagFieldPanelComponent extends BaseComponent<IProps, IState> {

  public render() {
    const {simulation} = this.stores;
    return (
      <div className="mag-field-control-panel">
        <div className="label">
        Magnetic Field Representations
        </div>
        <div className="button-container">
          <div className="button">
            <SwitchComponent
              switchOn={simulation.showFieldLines}
              label={simulation.showFieldLines ? "ON" : "OFF"}
              buttonClick={this.handleFieldLinesCheckbox}
            />
            <div className="label">Field Lines</div>
          </div>
          <div className="button">
            <SwitchComponent
              switchOn={simulation.showCloud}
              label={simulation.showCloud ? "ON" : "OFF"}
              buttonClick={this.handleCloudCheckbox}
            />
            <div className="label">Cloud</div>
          </div>
          <div className="button">
            <SwitchComponent
              switchOn={simulation.showPointers}
              label={simulation.showPointers ? "ON" : "OFF"}
              buttonClick={this.handlePointersCheckbox}
            />
            <div className="label">Pointers</div>
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
