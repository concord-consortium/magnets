import { inject, observer } from "mobx-react";
import * as React from "react";
import { BaseComponent, IBaseProps } from "./base";

import "./switch.sass";

interface IProps extends IBaseProps {
  switchOn: boolean;
  label: string;
  alwaysEnabled?: boolean;
  buttonClick?: () => void;
}
interface IState {}

@inject("stores")
@observer
export class SwitchComponent extends BaseComponent<IProps, IState> {

  public render() {
    return (
      <div className="switch-button" onClick={this.props.buttonClick}>
        {this.props.switchOn ? this.renderOn() : this.renderOff()}
      </div>
    );
  }

  private renderOff = () => {
    const enabledClass = this.props.alwaysEnabled ? "enabled" : "";
    return (
      <div className="container">
        <div className="switch"/>
        <div className={"label " + enabledClass}>{this.props.label}</div>
      </div>
    );
  }

  private renderOn = () => {
    return (
      <div className="container">
        <div className="label enabled">{this.props.label}</div>
        <div className="switch on"/>
      </div>
    );
  }
}
