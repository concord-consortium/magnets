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
    const {simulation} = this.stores;
    const primaryMag = simulation.getMagnetAtIndex(0);
    const secondaryMag = simulation.getMagnetAtIndex(1);
    return (
      <div className="main-content">
        <MagnetCanvas
          width={800}
          height={500}
          showMagnet1={primaryMag !== null}
          showMagnet2={secondaryMag !== null}
        />
      </div>
    );
  }
}
