import { inject, observer } from "mobx-react";
import * as React from "react";
import { BaseComponent, IBaseProps } from "./base";

import "./compass.sass";

interface IProps extends IBaseProps {}
interface IState {}

@inject("stores")
@observer
export class CompassComponent extends BaseComponent<IProps, IState> {

  public render() {
    return (
      <div className="compass" data-test="compass">
        <svg className="icon">
          <use xlinkHref="#icon-compass" />
        </svg>
      </div>
    );
  }

}
