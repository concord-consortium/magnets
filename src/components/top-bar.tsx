import { inject, observer } from "mobx-react";
import * as React from "react";
import { BaseComponent, IBaseProps } from "./base";

import "./top-bar.sass";

interface IProps extends IBaseProps {}
interface IState {}

@inject("stores")
@observer
export class TopBarComponent extends BaseComponent<IProps, IState> {

  public render() {
    const {ui} = this.stores;
    const curtainClass = ui.showTopBarCurtain ? "curtain unrolled" : "curtain";
    const primaryMagType = ui.primaryMagnet;
    const secondaryMagType = ui.secondaryMagnet;
    return (
      <div className="top-bar">
        {this.renderMagnetButton(primaryMagType, "left", this.handleClickLeftMagnetButton)}
        <div className={curtainClass}>
          <div className="content-container left">
            <div className="select-mag">Select a magnet (fixed)</div>
            {this.renderBarButton(primaryMagType, this.handleClickLeftMagnetBarButton)}
            {this.renderCoilButton(primaryMagType, this.handleClickLeftMagnetCoilButton)}
          </div>
          <div>
            <svg className="divider">
              <use xlinkHref="#icon-divider"/>
            </svg>
          </div>
          <div className="content-container right">
            <div className="select-mag">Add a 2nd magnet (movable)</div>
            {this.renderBarButton(secondaryMagType, this.handleClickRightMagnetBarButton)}
            {this.renderCoilButton(secondaryMagType, this.handleClickRightMagnetCoilButton)}
            <div className="button" onClick={this.handleClickRightMagnetRemoveButton}>remove magnet</div>
          </div>
        </div>
        {this.renderMagnetButton(secondaryMagType, "right", this.handleClickRightMagnetButton)}
      </div>
    );
  }

  private renderMagnetButton = (magType: any, posClass: string, onClickFunction: () => void) => {
    const magImage = "assets/magnet-" + magType + ".png";
    return (
      <div className={"magnet-button " + posClass} onClick={onClickFunction}>
      {magType === "none"
        ? <div className={"unselected " + posClass}>select a magnet</div>
        : <img src={magImage} className={"icon " + posClass}/>}
      </div>
    );
  }

  private renderBarButton = (magType: any, onClickFunction: () => void) => {
    return (
      <div className="button short" onClick={onClickFunction}>
      {magType !== "bar"
        ? <img src="assets/magnet-bar.png" className="icon"/>
        : <div>bar</div>}
    </div>
    );
  }

  private renderCoilButton = (magType: any, onClickFunction: () => void) => {
    return (
      <div className="button" onClick={onClickFunction}>
      {magType !== "coil"
        ? <img src="assets/magnet-coil.png" className="icon"/>
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
  private handleClickLeftMagnetCoilButton = () => {
    const {ui} = this.stores;
    ui.setPrimaryMagnet("coil");
  }
  private handleClickLeftMagnetBarButton = () => {
    const {ui} = this.stores;
    ui.setPrimaryMagnet("bar");
  }
  private handleClickRightMagnetCoilButton = () => {
    const {ui} = this.stores;
    ui.setSecondaryMagnet("coil");
  }
  private handleClickRightMagnetBarButton = () => {
    const {ui} = this.stores;
    ui.setSecondaryMagnet("bar");
  }
  private handleClickRightMagnetRemoveButton = () => {
    const {ui} = this.stores;
    ui.setSecondaryMagnet("none");
  }
}
