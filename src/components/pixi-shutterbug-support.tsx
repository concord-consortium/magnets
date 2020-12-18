import * as React from "react";
import PIXI from "pixi.js";
import * as Shutterbug from "shutterbug";

export class PixiShutterbugSupport extends React.Component<{ app: PIXI.Application }> {
  public beforeSnapshotHandler = () => {
    // Render PIXI canvas synchronously so Shutterbug can call .toDataURL and get actual data.
    this.props.app.render();
  }

  public componentDidMount() {
    Shutterbug.on("saycheese", this.beforeSnapshotHandler);
  }

  public componentWillUnmount() {
    Shutterbug.off("saycheese", this.beforeSnapshotHandler);
  }

  public render() {
    return null;
  }
}
