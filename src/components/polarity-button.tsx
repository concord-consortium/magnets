import { inject, observer } from "mobx-react";
import * as React from "react";
import { BaseComponent, IBaseProps } from "./base";

import "./polarity-button.sass";

interface IProps extends IBaseProps {}
interface IState {}

@inject("stores")
@observer
export class PolarityButtonComponent extends BaseComponent<IProps, IState> {

  public render() {
    return (
      <div className="polarity-button" onClick={this.handleClickPolarityButton} data-test="polarity-button">
        <div className="label">Polarity</div>
        <svg className="icon">
          <use xlinkHref="#icon-polarity"/>
        </svg>
      </div>
    );
  }

  private handleClickPolarityButton = () => {
    console.log("implement click on polarity button");
  }
}
