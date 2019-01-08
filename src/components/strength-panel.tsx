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
    const magRight = simulation.getMagnetAtIndex(1);
    const magBarSliderVal = mag != null ? mag.barStrength : 1;
    const magCoilSliderVal = mag != null ? mag.coilStrength : 1;
    const magCurrentSliderVal = mag != null ? mag.currentStrength : 1;
    const magType: MagnetType | null = mag ? mag.type : null;
    const panelClass = magType === "coil"
      ? "strength-panel tall "
      : "strength-panel ";
    let posClass = "center";
    if (this.props.index === 0 && magRight) {
      posClass = "left";
    } else if (this.props.index === 1) {
      posClass = "right";
    }
    posClass = posClass + "-" + magType;
    return (
      <div className={panelClass + posClass}>
        <svg className={"icon " + magType + "-magnet-strength-back2"}>
          <use xlinkHref={"#icon-" + magType + "-magnet-strength-back2"}/>
        </svg>
        <svg className={"icon " + magType + "-magnet-strength-back1"}>
          <use xlinkHref={"#icon-" + magType + "-magnet-strength-back1"}/>
        </svg>
        <div className="vertical-container">
          <div className="horizontal-container">
            <div className="label-title">Weak</div>
            <div className="title">Strength</div>
            <div className="label-title">Strong</div>
          </div>
          {magType === "bar"
            ? this.renderBarSlider(magBarSliderVal)
            : this.renderCoilSliders(magCoilSliderVal, magCurrentSliderVal)}
        </div>
      </div>
    );
  }

  private renderCoilSliders = (coilVal: number, currVal: number) => {
    return (
      <div className="horizontal-container">
        <div className="label-container">
          <div className="label-slider">Fewer<br/>Coils</div>
          <div className="label-slider">Less<br/>Current</div>
        </div>
        <div className="slider-container tall">
          <div>
            <input className="slider" type="range" min=".5" max="1" step=".25"
                  value={coilVal} onChange={this.handleCoilSliderChange}/>
            <div className="tick-container">
              <div className="tick"/>
              <div className="tick"/>
              <div className="tick"/>
            </div>
          </div>
          <div>
            <input className="slider" type="range" min=".5" max="1" step=".25"
                  value={currVal} onChange={this.handleCurrentSliderChange}/>
            <div className="tick-container">
              <div className="tick"/>
              <div className="tick"/>
              <div className="tick"/>
            </div>
          </div>
        </div>
        <div className="label-container">
          <div className="label-slider">More<br/>Coils</div>
          <div className="label-slider">More<br/>Current</div>
        </div>
      </div>
    );
  }

  private renderBarSlider = (val: number) => {
    return (
      <div className="horizontal-container">
        <div className="label-slider">Fewer Magnets</div>
        <div className="slider-container">
          <input className="slider" type="range" min=".2" max="1" step=".4"
                 value={val} onChange={this.handleMagnetSliderChange}/>
          <div className="tick-container">
            <div className="tick"/>
            <div className="tick"/>
            <div className="tick"/>
          </div>
        </div>
        <div className="label-slider">More Magnets</div>
      </div>
    );
  }

  private handleMagnetSliderChange = (event: any) => {
    const {simulation} = this.stores;
    const mag = simulation.getMagnetAtIndex(this.props.index);
    if (mag != null) {
      simulation.setMagnetBarStrength(this.props.index, parseFloat(event.target.value));
    }
  }

  private handleCurrentSliderChange = (event: any) => {
    const {simulation} = this.stores;
    const mag = simulation.getMagnetAtIndex(this.props.index);
    if (mag != null) {
      simulation.setMagnetCurrentStrength(this.props.index, parseFloat(event.target.value));
    }
  }

  private handleCoilSliderChange = (event: any) => {
    const {simulation} = this.stores;
    const mag = simulation.getMagnetAtIndex(this.props.index);
    if (mag != null) {
      simulation.setMagnetCoilStrength(this.props.index, parseFloat(event.target.value));
    }
  }

}
