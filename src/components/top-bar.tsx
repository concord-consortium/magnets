import { inject, observer } from "mobx-react";
import * as React from "react";
import { BaseComponent, IBaseProps } from "./base";

import "./top-bar.sass";
import { MagnetTypeEnum, SimulationMagnet, SimulationMagnetType } from "../models/simulation-magnet";

interface IProps extends IBaseProps {}
interface IState {}

@inject("stores")
@observer
export class TopBarComponent extends BaseComponent<IProps, IState> {

  public render() {
    const {ui, simulation} = this.stores;
    const curtainClass = ui.showTopBarCurtain ? "curtain unrolled" : "curtain";
    const primaryMagText = "select a magnet";
    const primaryMag = simulation.getMagnetAtIndex(0);
    const primaryMagType = primaryMag !== null ? primaryMag.type : "none";
    const primaryDisabledClass = "";
    const secondaryMag = simulation.getMagnetAtIndex(1);
    const secondaryMagType = secondaryMag !== null ? secondaryMag.type : "none";
    const secondaryMagText = primaryMagType !== "none" ? "select a magnet" : "";
    const secondaryDisabledClass = primaryMagType !== "none" ? "" : " disabled";
    const removeDisabledClass = secondaryMagType !== "none" ? "" : " disabled";

    return (
      <div className="top-bar">
        {this.renderMagnetButton(primaryMagText, primaryMagType, "left", this.handleClickLeftMagnetButton)}
        <div className={curtainClass}>
          <div className="content-container left">
            <div className="select-mag">Select a magnet</div>
            {this.renderBarButton(primaryMagType, primaryDisabledClass, this.handleClickLeftMagnetBarButton)}
            {this.renderCoilButton(primaryMagType, primaryDisabledClass, this.handleClickLeftMagnetCoilButton)}
          </div>
          <div>
            <svg className="divider">
              <use xlinkHref="#icon-divider"/>
            </svg>
          </div>
          <div className="content-container right">
            <div className="select-mag">Add a 2nd magnet (movable)</div>
            {this.renderBarButton(secondaryMagType, secondaryDisabledClass, this.handleClickRightMagnetBarButton)}
            {this.renderCoilButton(secondaryMagType, secondaryDisabledClass, this.handleClickRightMagnetCoilButton)}
            <div className={"button text-only" + removeDisabledClass}
                 onClick={this.handleClickRightMagnetRemoveButton}>Remove magnet</div>
          </div>
        </div>
        {this.renderMagnetButton(secondaryMagText, secondaryMagType, "right", this.handleClickRightMagnetButton)}
      </div>
    );
  }

  private renderMagnetButton = (text: string, magType: any, posClass: string, onClickFunction: () => void) => {
    const magImage = "assets/magnet-" + magType + "-icon.png";
    return (
      <div className={"magnet-button " + posClass} onClick={onClickFunction}>
      {magType === "none"
        ? <div className={"unselected " + posClass}>{text}</div>
        : <img src={magImage} className={"icon " + posClass}/>}
      </div>
    );
  }

  private renderBarButton = (magType: any, disabledClass: string, onClickFunction: () => void) => {
    return (
      <div className={"button short" + disabledClass} onClick={onClickFunction}>
      {magType !== "bar"
        ? <img src="assets/magnet-bar-icon.png" className="icon"/>
        : <div>bar</div>}
    </div>
    );
  }

  private renderCoilButton = (magType: any, disabledClass: string, onClickFunction: () => void) => {
    return (
      <div className={"button" + disabledClass} onClick={onClickFunction}>
      {magType !== "coil"
        ? <img src="assets/magnet-coil-icon.png" className="icon"/>
        : <div>coil</div>}
    </div>
    );
  }

  private handleClickLeftMagnetButton = () => {
    const {ui} = this.stores;
    ui.setShowTopBarCurtain(!ui.showTopBarCurtain);
  }
  private handleClickRightMagnetButton = () => {
    const {ui} = this.stores;
    ui.setShowTopBarCurtain(!ui.showTopBarCurtain);
  }

  private addOrUpdateMagnet = (index: number, magType: any) => {
    const {simulation} = this.stores;
    const mag = simulation.getMagnetAtIndex(index);
    if (mag == null) {
      simulation.addMagnet(SimulationMagnet.create({active: true, type: magType}));
    } else {
      simulation.setMagnetType(index, magType);
    }
  }

  private handleClickLeftMagnetCoilButton = () => {
    this.addOrUpdateMagnet(0, "coil");
  }
  private handleClickLeftMagnetBarButton = () => {
    this.addOrUpdateMagnet(0, "bar");
  }

  private handleClickRightMagnetCoilButton = () => {
    this.addOrUpdateMagnet(1, "coil");
  }
  private handleClickRightMagnetBarButton = () => {
    this.addOrUpdateMagnet(1, "bar");
  }
  private handleClickRightMagnetRemoveButton = () => {
    const {simulation} = this.stores;
    simulation.removeMagnet(1);
  }
}
