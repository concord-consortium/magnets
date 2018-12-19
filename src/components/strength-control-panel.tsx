import { inject, observer } from "mobx-react";
import * as React from "react";
import { BaseComponent, IBaseProps } from "./base";

import "./strength-control-panel.sass";

interface IProps extends IBaseProps {}
interface IState {}

@inject("stores")
@observer
export class StrengthPanelComponent extends BaseComponent<IProps, IState> {

  public render() {
    const {ui} = this.stores;
    const sliderVal = ui.strengthSlider;
    return (
      <div className="strength-control-panel">
        <div className="label">Strength</div>
        <div className="horizontal-container">
          <div className="label">Weak</div>
          <div>
            <input className="slider" type="range" min="1" max="3"
                   value={sliderVal} onChange={this.handleSliderChange}/>
            <div className="horizontal-container slider-vals">
              <div className="label val-left">1</div>
              <div className="label val-center">2</div>
              <div className="label val-right">3</div>
            </div>
          </div>
          <div className="label">Strong</div>
        </div>
      </div>
    );
  }

  private handleSliderChange = (event: any) => {
    const {ui} = this.stores;
    ui.setStrengthSlider(parseInt(event.target.value, 10));
  }

}
