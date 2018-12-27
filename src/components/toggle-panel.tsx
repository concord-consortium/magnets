import { inject, observer } from "mobx-react";
import * as React from "react";
import { BaseComponent, IBaseProps } from "./base";

import "./toggle-panel.sass";
import { SwitchComponent } from "./switch";

interface IProps extends IBaseProps {
  title: string;
  switchOn: boolean;
  buttonText: string;
  label: string;
  buttonClick?: () => void;
}
interface IState {}

@inject("stores")
@observer
export class TogglePanelComponent extends BaseComponent<IProps, IState> {

  public render() {
    return (
      <div className="toggle-panel" data-test="magnetic-forces-panel">
        <div className="title">{this.props.title}</div>
        <div className="container">
          <SwitchComponent
            switchOn={this.props.switchOn}
            label={this.props.buttonText}
            buttonClick={this.props.buttonClick}
          />
          {this.props.label !== "" ?
            <div className="label">{this.props.label}</div>
            : null
          }
        </div>
      </div>
    );
  }

}
