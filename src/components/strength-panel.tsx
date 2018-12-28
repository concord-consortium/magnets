import { inject, observer } from "mobx-react";
import * as React from "react";
import { BaseComponent, IBaseProps } from "./base";

import "./strength-panel.sass";
import { MagnetType } from "../models/simulation-magnet";

interface IProps extends IBaseProps {
  index: number;
}
interface IState {}

@inject("stores")
@observer
export class StrengthPanelComponent extends BaseComponent<IProps, IState> {

  public render() {
    const {simulation} = this.stores;
    const mag = simulation.getMagnetAtIndex(this.props.index);
    const magBarSliderVal = mag != null ? mag.barStrength : 1;
    const magCoilSliderVal = mag != null ? mag.coilStrength : 1;
    const magCurrentSliderVal = mag != null ? mag.currentStrength : 1;
    const magType: MagnetType | null = mag ? mag.type : null;
    const panelClass = magType === "coil"
      ? "strength-panel tall"
      : "strength-panel";
    return (
      <div className={panelClass}>
        <div className="vertical-container">
          <div className="horizontal-container">
            <div className="label">Weak</div>
            <div className="title">Strength</div>
            <div className="label">Strong</div>
          </div>
        </div>
        {magType === "bar"
          ? this.renderBarSlider(magBarSliderVal)
          : this.renderCoilSliders(magCoilSliderVal, magCurrentSliderVal)}
      </div>
    );
  }

  private renderCoilSliders = (coilVal: number, currVal: number) => {
    return (
      <div className="horizontal-container">
        <div className="vertical-container">
          <div className="label2">Fewer<br/>Coils</div>
          <div className="label2">Less<br/>Current</div>
        </div>
        <div className="slider-container tall">
          <div>
            <input className="slider" type="range" min="1" max="3"
                  value={coilVal} onChange={this.handleCoilSliderChange}/>
          </div>
          <div>
            <input className="slider" type="range" min="1" max="3"
                  value={currVal} onChange={this.handleCurrentSliderChange}/>
          </div>
        </div>
        <div className="vertical-container">
          <div className="label2">More<br/>Coils</div>
          <div className="label2">More<br/>Current</div>
        </div>
      </div>
    );
  }

  private renderBarSlider = (val: number) => {
    return (
      <div className="horizontal-container">
        <div className="label2">Fewer Magnets</div>
        <div className="slider-container">
          <input className="slider" type="range" min="1" max="3"
                 value={val} onChange={this.handleMagnetSliderChange}/>
        </div>
        <div className="label2">More Magnets</div>
      </div>
    );
  }

  private handleMagnetSliderChange = (event: any) => {
    const {simulation} = this.stores;
    const mag = simulation.getMagnetAtIndex(this.props.index);
    if (mag != null) {
      simulation.setMagnetBarStrength(this.props.index, parseInt(event.target.value, 10));
    }
  }

  private handleCurrentSliderChange = (event: any) => {
    const {simulation} = this.stores;
    const mag = simulation.getMagnetAtIndex(this.props.index);
    if (mag != null) {
      simulation.setMagnetCurrentStrength(this.props.index, parseInt(event.target.value, 10));
    }
  }

  private handleCoilSliderChange = (event: any) => {
    const {simulation} = this.stores;
    const mag = simulation.getMagnetAtIndex(this.props.index);
    if (mag != null) {
      simulation.setMagnetCoilStrength(this.props.index, parseInt(event.target.value, 10));
    }
  }

}
