import { inject, observer } from "mobx-react";
import * as React from "react";
import { BaseComponent, IBaseProps } from "./base";

import "./app.sass";

import { TopBarComponent } from "./top-bar";
import { MainContentComponent } from "./main-content";
import { BottomBarComponent } from "./bottom-bar";

interface IProps extends IBaseProps {}
interface IState {}

@inject("stores")
@observer
export class AppComponent extends BaseComponent<IProps, IState> {

  public render() {
    const {ui} = this.stores;
    return (
      <div className="app-container">
        <TopBarComponent />
        <MainContentComponent />
        <BottomBarComponent />
      </div>
    );
  }
}
