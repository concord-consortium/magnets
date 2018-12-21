import { inject, observer } from "mobx-react";
import * as React from "react";
import { BaseComponent, IBaseProps } from "./base";

import "./app.sass";
import { MagnetCanvas } from "./magnet/magnet-canvas";

interface IProps extends IBaseProps {}
interface IState {}

@inject("stores")
@observer
export class AppComponent extends BaseComponent<IProps, IState> {

  public render() {
    const {ui} = this.stores;
    return (
      <div className="app">
        <MagnetCanvas
          width={800}
          height={500}
          showMagnet1={true}
          showMagnet2={true}
          showGradient={true}
          showVectors={true}
        />
      </div>
    );
  }
}
