import { inject, observer } from "mobx-react";
import * as React from "react";
import { BaseComponent, IBaseProps } from "./base";

import "./polarity-panel.sass";
import { SwitchComponent } from "./switch";
import { CoilPolarityType, MagnetType } from "../models/simulation-magnet";
import { urlParams } from "../utilities/url-params";

interface IProps extends IBaseProps {
  index: number;
}
interface IState {}

@inject("stores")
@observer
export class PolarityPanelComponent extends BaseComponent<IProps, IState> {

  public render() {
    const {simulation} = this.stores;
    const {current} = urlParams;
    const showFlipPanel: boolean = current ? current.toLowerCase() !== "show" : true;
    const mag = simulation.getMagnetAtIndex(this.props.index);
    const magType: MagnetType | null = mag ? mag.type : null;
    if (magType === "coil") {
      return (
        <div>
          {showFlipPanel
            ? this.renderPolarityPanel(showFlipPanel)
            : this.renderCoilPolarityPanel()
          }
        </div>
      );
    } else if (magType === "bar") {
      return (
        <div>
          {this.renderPolarityPanel(showFlipPanel)}
        </div>
      );
    } else {
      return (
        null
      );
    }
  }

  private renderPolarityPanel = (showFlipPanel: boolean) => {
    const {simulation} = this.stores;
    const {strength} = urlParams;
    const showStrengthPanel: boolean = strength ? strength.toLowerCase() === "true" : false;
    const mag = simulation.getMagnetAtIndex(this.props.index);
    const magType: MagnetType | null = mag ? mag.type : null;
    const magRight = simulation.getMagnetAtIndex(1);
    const polaritylabel = magType === "bar"
          ? mag && mag.barPolarity ? mag.barPolarity : "N-S"
          : mag ? (mag.coilPolarity === "plus-minus" ? "N-S" : "S-N") : "N-S";
    const polarityOn = polaritylabel === "S-N" ? true : false;
    let posClass = "center";
    if (this.props.index === 0 && magRight) {
      posClass = "left";
    } else if (this.props.index === 1) {
      posClass = "right";
    }
    posClass = `${posClass}-${showFlipPanel ? "-bar" : "-" + magType}${showStrengthPanel ? "" : " no-strength"}`;
    return (
      <div className={"polarity-panel " + posClass}>
        <svg className="icon bar-magnet-polarity-back2">
          <use xlinkHref="#icon-bar-magnet-polarity-back2"/>
        </svg>
        <svg className="icon bar-magnet-polarity-back1">
          <use xlinkHref="#icon-bar-magnet-polarity-back1"/>
        </svg>
        <div className="vertical-container">
          <div className="title no-jitter">{showFlipPanel ? "Flip" : "Polarity"}</div>
          <SwitchComponent
            switchOn={polarityOn}
            label={polaritylabel}
            alwaysEnabled={true}
            buttonClick={this.handleClickPolarityButton}
          />
        </div>
      </div>
    );
  }

  private renderCoilPolarityPanel = () => {
    const {simulation} = this.stores;
    const {strength} = urlParams;
    const showStrengthPanel: boolean = strength ? strength.toLowerCase() === "true" : false;
    const mag = simulation.getMagnetAtIndex(this.props.index);
    const magType: MagnetType | null = mag ? mag.type : null;
    const magRight = simulation.getMagnetAtIndex(1);
    const magCoilPolarityVal = mag != null ? mag.coilPolarity : "plus-minus";
    let posClass = "center";
    if (this.props.index === 0 && magRight) {
      posClass = "left";
    } else if (this.props.index === 1) {
      posClass = "right";
    }
    posClass = `${posClass}-${magType}${showStrengthPanel ? "" : " no-strength"}`;
    let sliderVal = 2;
    let sliderClass = "";
    const showOffLabel = magCoilPolarityVal === "off" ? true : false;
    if (magCoilPolarityVal === "plus-minus") {
      sliderVal = 1;
      sliderClass = "left";
    }
    else if (magCoilPolarityVal === "minus-plus") {
      sliderVal = 3;
      sliderClass = "right";
    }
    return (
      <div className={"polarity-panel " + posClass}>
        <svg className="icon coil-magnet-polarity-back2">
          <use xlinkHref="#icon-coil-magnet-polarity-back2"/>
        </svg>
        <svg className="icon coil-magnet-polarity-back1">
          <use xlinkHref="#icon-coil-magnet-polarity-back1"/>
        </svg>
        <div className="vertical-container">
          <div className="title no-jitter">Polarity/Current</div>
          <div className="slider-container">
            <input className={"slider " + sliderClass} type="range" min="1" max="3"
                  value={sliderVal} onChange={this.handlePolarityCurrentSliderChange}/>
            {showOffLabel ? <div className="thumb-label no-jitter">OFF</div> : null}
            <div className="tick-container">
              <div className="tick"/>
              <div className="tick"/>
              <div className="tick"/>
            </div>
          </div>
          <div className="horizontal-container">
            <div className="polarity-label no-jitter">+-</div>
            <div className="polarity-label no-jitter">-+</div>
          </div>
        </div>
      </div>
    );
  }

  private handleClickPolarityButton = () => {
    const {simulation} = this.stores;
    const mag = simulation.getMagnetAtIndex(this.props.index);
    const magType: MagnetType | null = mag ? mag.type : null;
    if (mag) {
      if (magType === "coil") {
        if (mag.coilPolarity === "plus-minus") {
          simulation.setMagnetCoilPolarity(this.props.index, "minus-plus");
        }
        else {
          simulation.setMagnetCoilPolarity(this.props.index, "plus-minus");
        }
      } else {
        simulation.toggleMagnetBarPolarity(this.props.index);
      }
    }
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
