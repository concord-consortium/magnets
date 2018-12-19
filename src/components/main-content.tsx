import { inject, observer } from "mobx-react";
import * as React from "react";
import { BaseComponent, IBaseProps } from "./base";

import "./main-content.sass";

interface IProps extends IBaseProps {}
interface IState {}

@inject("stores")
@observer
export class MainContentComponent extends BaseComponent<IProps, IState> {

  public render() {
    const {ui} = this.stores;
    const primaryMagType = ui.primaryMagnet;
    const secondaryMagType = ui.secondaryMagnet;
    return (
      <div className="main-content">
        <div>
        {primaryMagType !== "none"
          ? <div className="bar">{primaryMagType}</div>
          : null}
        </div>
        <div>
        {secondaryMagType !== "none"
          ? <div className="bar">{secondaryMagType}</div>
          : null}
        </div>
      </div>
    );
  }
}
