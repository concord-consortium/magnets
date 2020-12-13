import { inject, observer } from "mobx-react";
import * as React from "react";
import { BaseComponent, IBaseProps } from "./base";
import { urlParams } from "../utilities/url-params";
import { TopBarComponent } from "./top-bar";
import { MainContentComponent } from "./main-content";
import { BottomBarComponent } from "./bottom-bar";
import { SimulationMagnet } from "../models/simulation-magnet";

import "./app.sass";

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
    // setTimeout is a consequence of the hacky implementation of MagnetCanvas. MagnetCanvas setups simulation
    // observing in its own componentDidMount method. So without timeout, these changes wouldn't be fully picked
    // up by the MagnetCanvas and the initial rendering would be half broken.
    setTimeout(() => {
      this.setupDefaultSimulation();
    }, 0);
  }

  public componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  public updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  public setupDefaultSimulation() {
    const {topBar, magnets, forceArrows} = urlParams;
    const {simulation} = this.stores;
    if (topBar === "false") {
      // Add default magnets, as user wouldn't be able to do it without top bar.
      simulation.addMagnet(SimulationMagnet.create({active: true, type: "bar"}));
      if (magnets === "2") {
        simulation.addMagnet(SimulationMagnet.create({active: true, type: "bar"}));
      }
    }
    simulation.setShowMagneticForces(forceArrows === "true");
  }

  public render() {
    const {topBar} = urlParams;
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
        { topBar === "true" && <TopBarComponent /> }
        <BottomBarComponent />
        <div className="cover"/>
      </div>
    );
  }
}
