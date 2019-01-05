import { inject, observer } from "mobx-react";
import * as React from "react";
import { BaseComponent, IBaseProps } from "./base";

import "./app.sass";

import { TopBarComponent } from "./top-bar";
import { MainContentComponent } from "./main-content";
import { BottomBarComponent } from "./bottom-bar";

interface IProps extends IBaseProps {}
interface IState {
  width: number;
  height: number;
}

export const kAppMaxWidth = 960;
export const kAppMaxHeight = 618;

@inject("stores")
@observer
export class AppComponent extends BaseComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      width: 0,
      height: 0
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  public componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  public componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  public updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  public render() {
    const widthRatio = this.state.width / kAppMaxWidth;
    const heightRatio = this.state.height / kAppMaxHeight;
    const scalePercent = widthRatio > heightRatio ? heightRatio : widthRatio;
    const styleVal = "scale(" + scalePercent + ")";
    const styles = {
      transform: styleVal
    };
    return (
      <div style={styles} className="app-container">
        <MainContentComponent />
        <TopBarComponent />
        <BottomBarComponent />
        <div className="cover"/>
      </div>
    );
  }
}
