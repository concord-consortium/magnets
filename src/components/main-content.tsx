import { inject, observer } from "mobx-react";
import * as React from "react";
import { BaseComponent, IBaseProps } from "./base";

import "./main-content.sass";
import { MagnetCanvas } from "./magnet/magnet-canvas";

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
        <MagnetCanvas
          width={800}
          height={500}
          showMagnet1={primaryMagType !== "none"}
          showMagnet2={secondaryMagType !== "none"}
          showGradient={ui.showCloud}
          showVectors={ui.showFieldLines}
        />
      </div>
    );
  }
}
