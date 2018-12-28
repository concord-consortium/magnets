import { inject, observer } from "mobx-react";
import * as React from "react";
import { BaseComponent, IBaseProps } from "./base";

import "./polarity-panel.sass";
import { SwitchPanelComponent } from "./switch-panel";
import { CoilPolarityType, MagnetType } from "../models/simulation-magnet";

interface IProps extends IBaseProps {
  index: number;
}
interface IState {}

@inject("stores")
@observer
export class PolarityPanelComponent extends BaseComponent<IProps, IState> {

  public render() {
    const {simulation} = this.stores;
    const mag = simulation.getMagnetAtIndex(this.props.index);
    const magType: MagnetType | null = mag ? mag.type : null;
    if (magType === "coil") {
      return (
        <div>
          {this.renderCoilPolarityPanel()}
        </div>
      );
    } else if (magType === "bar") {
      return (
        <div>
          {this.renderBarPolarityPanel()}
        </div>
      );
    } else {
      return (
        null
      );
    }
  }

  private renderBarPolarityPanel = () => {
    const {simulation} = this.stores;
    const mag = simulation.getMagnetAtIndex(this.props.index);
    const polaritylabel = mag && mag.barPolarity ? mag.barPolarity : "N-S";
    const polarityOn = polaritylabel === "S-N" ? true : false;
    return (
      <SwitchPanelComponent
        title="Polarity"
        switchOn={polarityOn}
        buttonText={polaritylabel}
        buttonClick={this.handleClickPolarityButton}
      />
    );
  }

  private renderCoilPolarityPanel = () => {
    const {simulation} = this.stores;
    const mag = simulation.getMagnetAtIndex(this.props.index);
    const magCoilPolarityVal = mag != null ? mag.coilPolarity : "plus-minus";
    let sliderVal = 1;
    if (magCoilPolarityVal === "off") {
      sliderVal = 2;
    }
    else if (magCoilPolarityVal === "minus-plus") {
      sliderVal = 3;
    }
    return (
      <div className="polarity-current-panel">
        <div className="title">Polarity/Current</div>
        <div className="slider-container">
          <input className="slider" type="range" min="1" max="3"
                 value={sliderVal} onChange={this.handlePolarityCurrentSliderChange}/>
        </div>
        <div className="horizontal-container">
          <div className="label">+-</div>
          <div className="label off">OFF</div>
          <div className="label">-+</div>
        </div>
      </div>
    );
  }

  private handleClickPolarityButton = () => {
    const {simulation} = this.stores;
    simulation.toggleMagnetBarPolarity(this.props.index);
  }

  private handlePolarityCurrentSliderChange = (event: any) => {
    const {simulation} = this.stores;
    const mag = simulation.getMagnetAtIndex(this.props.index);
    const index = parseInt(event.target.value, 10);
    let newVal: CoilPolarityType = "plus-minus";
    if (index === 2) {
      newVal = "off";
    }
    else if (index === 3) {
      newVal = "minus-plus";
    }
    if (mag != null) {
      simulation.setMagnetCoilPolarity(this.props.index, newVal);
    }
  }

}
