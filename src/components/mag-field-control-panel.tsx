import { inject, observer } from "mobx-react";
import * as React from "react";
import { BaseComponent, IBaseProps } from "./base";

import "./mag-field-control-panel.sass";

interface IProps extends IBaseProps {}
interface IState {}

@inject("stores")
@observer
export class MagFieldPanelComponent extends BaseComponent<IProps, IState> {

  public render() {
    return (
      <div className="mag-field-control-panel">
        <div className="label">
        Magnetic Field Representations
        </div>
        <div className="checkbox-container">
          <label className="container">
            <input type="checkbox" onChange={this.handleFieldLinesCheckbox}/>
            <span className="checkmark"/>
            Field Lines
          </label>
          <label className="container">
            <input type="checkbox" onChange={this.handleCloudCheckbox}/>
            <span className="checkmark"/>
            Cloud
          </label>
          <label className="container">
            <input type="checkbox" onChange={this.handlePointersCheckbox}/>
            <span className="checkmark"/>
            Pointers
          </label>
        </div>
      </div>
    );
  }

  private handleFieldLinesCheckbox = (event: any) => {
    const {ui} = this.stores;
    ui.setShowFieldLines(!ui.showFieldLines);
  }

  private handleCloudCheckbox = (event: any) => {
    const {ui} = this.stores;
    ui.setShowCloud(!ui.showCloud);
  }

  private handlePointersCheckbox = (event: any) => {
    const {ui} = this.stores;
    ui.setShowPointers(!ui.showPointers);
  }

}
