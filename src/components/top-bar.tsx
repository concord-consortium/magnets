import { inject, observer } from "mobx-react";
import * as React from "react";
import { BaseComponent, IBaseProps } from "./base";

import "./top-bar.sass";
import { MagnetType, SimulationMagnet } from "../models/simulation-magnet";

interface IProps extends IBaseProps {}
interface IState {}

@inject("stores")
@observer
export class TopBarComponent extends BaseComponent<IProps, IState> {

  public render() {
    const {ui, simulation} = this.stores;
    const curtainClass = ui.showTopBarCurtain ? "curtain unrolled" : "curtain";
    const leftMagText = "Select a magnet";
    const leftMag = simulation.getMagnetAtIndex(0);
    const leftMagType: MagnetType | null = leftMag ? leftMag.type : null;
    const primaryDisabledClass = "";
    const rightMag = simulation.getMagnetAtIndex(1);
    const rightMagType: MagnetType | null = rightMag ? rightMag.type : null;
    const rightMagText = leftMag ? "Select a magnet" : "";
    const rightDisabledClass = leftMag ? "" : "disabled ";
    const removeDisabledClass = rightMag ? "" : "disabled ";

    return (
      <div className="top-bar">
        <div className={curtainClass}>
          <svg className="icon top-nav-back2">
            <use xlinkHref="#icon-top-nav-back2"/>
          </svg>
          <svg className="icon top-nav-back1">
            <use xlinkHref="#icon-top-nav-back1"/>
          </svg>

          <div className="label add left">Select a magnet</div>
          {this.renderBarButton(leftMagType, "left", primaryDisabledClass, this.handleClickLeftMagnetBarButton)}
          {this.renderCoilButton(leftMagType, "left", primaryDisabledClass, this.handleClickLeftMagnetCoilButton)}
          <svg className="divider">
            <use xlinkHref="#icon-divider"/>
          </svg>
          <div className={"label add right " + rightDisabledClass}>Add a 2nd magnet (movable)</div>
          {this.renderBarButton(rightMagType, "right", rightDisabledClass, this.handleClickRightMagnetBarButton)}
          {this.renderCoilButton(rightMagType, "right", rightDisabledClass, this.handleClickRightMagnetCoilButton)}
          {this.renderRemoveButton(removeDisabledClass)}
        </div>
        {this.renderMagnetButton(leftMagText, leftMagType, "left")}
        {this.renderMagnetButton(rightMagText, rightMagType, "right")}
      </div>
    );
  }

  private renderMagnetButton = (text: string, magType: MagnetType | null, posClass: string) => {
    const selectClass = magType ? "" : "selectable ";
    return (
      <div className={"button top " + selectClass + posClass} onClick={this.handleClickMagnetButton}>
        <svg className={"icon nav-back2 " + posClass}>
          <use xlinkHref={"#icon-" + posClass + "-nav-back2"} />
        </svg>
        <svg className={"icon nav-back1 " + posClass}>
          <use xlinkHref={"#icon-" + posClass + "-nav-back1"} />
        </svg>
        <svg className={"icon nav-select-back " + selectClass + posClass}>
          <use xlinkHref={"#icon-" + posClass + "-nav-select-back"} />
        </svg>
        <svg className={"icon nav-select-outline " + posClass}>
          <use xlinkHref={"#icon-" + posClass + "-nav-select-outline"} />
        </svg>
        {magType
        ? <svg className={"icon nav-magnet " + posClass + " " + magType}>
            <use xlinkHref={"#icon-" + posClass + "-nav-" + magType + "-magnet"} />
          </svg>
        : <div className={"title " + posClass}>{text}</div>}
      </div>
    );
  }

  private renderBarButton = (magType: MagnetType | null, posClass: string,
                             disabledClass: string, onClickFunction: () => void) => {
    const selectClass = !magType || magType !== "bar" ? "selectable " : " ";
    return (
      <div className={"button bar " + selectClass + disabledClass + posClass} onClick={onClickFunction}>
        <svg className={"icon top-magnet-back bar " + selectClass + posClass}>
          <use xlinkHref={"#icon-top-bar-magnet-back-" + posClass} />
        </svg>
        <svg className={"icon top-magnet-outline bar " + posClass}>
          <use xlinkHref={"#icon-top-bar-magnet-outline-" + posClass} />
        </svg>
        {!magType || magType !== "bar"
        ? <svg className={"icon top-magnet bar " + posClass}>
            <use xlinkHref={"#icon-top-bar-magnet-" + posClass} />
          </svg>
        : <div className={"label bar " + posClass}>bar</div>}
      </div>
    );
  }

  private renderCoilButton = (magType: MagnetType | null, posClass: string,
                              disabledClass: string, onClickFunction: () => void) => {
    const selectClass = !magType || magType !== "coil" ? "selectable " : " ";
    return (
      <div className={"button coil " + selectClass + disabledClass + posClass} onClick={onClickFunction}>
        <svg className={"icon top-magnet-back coil " + selectClass + posClass}>
          <use xlinkHref={"#icon-top-coil-magnet-back-" + posClass} />
        </svg>
        <svg className={"icon top-magnet-outline coil " + posClass}>
          <use xlinkHref={"#icon-top-coil-magnet-outline-" + posClass} />
        </svg>
        {!magType || magType !== "coil"
        ? <svg className={"icon top-magnet coil " + posClass}>
            <use xlinkHref={"#icon-top-coil-magnet-" + posClass} />
          </svg>
        : <div className={"label coil " + posClass}>coil</div>}
      </div>
    );
  }

  private renderRemoveButton = (removeDisabledClass: string) => {
    return (
      <div className={"button " + removeDisabledClass} onClick={this.handleClickRightMagnetRemoveButton}>
        <svg className={"icon top-nav-remove-magnet-back"}>
          <use xlinkHref={"#icon-top-nav-remove-magnet-back"} />
        </svg>
        <svg className={"icon top-nav-remove-magnet-outline"}>
          <use xlinkHref={"#icon-top-nav-remove-magnet-outline"} />
        </svg>
        <div className={"label remove"}>Remove magnet</div>
      </div>
    );
  }

  private handleClickMagnetButton = () => {
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

  private showSlideArrow = () => {
    const {simulation} = this.stores;
    if (!simulation.slideArrowStarted) {
      simulation.setSlideArrowStarted(true);
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
    this.showSlideArrow();
  }
  private handleClickRightMagnetBarButton = () => {
    this.addOrUpdateMagnet(1, "bar");
    this.showSlideArrow();
  }
  private handleClickRightMagnetRemoveButton = () => {
    const {simulation} = this.stores;
    simulation.removeMagnet(1);
  }
}
