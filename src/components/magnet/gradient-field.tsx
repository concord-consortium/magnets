import * as PIXI from "pixi.js";
import { PixiComponent } from "@inlet/react-pixi";
import { getFieldMagnitudeAndDirection } from "./magnet-util";

interface IProps {
  width: number;
  height: number;
  cellSize: number;
}

export default PixiComponent<IProps, PIXI.Graphics>("Gradient", {
  create: props => {
    return new PIXI.Graphics();
  },
  applyProps: (instance, oldProps, newProps) => {
    if (JSON.stringify(oldProps) === JSON.stringify(newProps)) return;

    const { width, height, cellSize } = newProps;
    const half = cellSize / 2;
    instance.clear();

    for (let x = 0; x < width; x += cellSize) {
      for (let y = 0; y < height; y += cellSize) {
        const magnitude = getFieldMagnitudeAndDirection(null, x + half, y + half)[0];
        instance.beginFill(0x56d2f9, magnitude);
        instance.drawRect(x, y, cellSize, cellSize);
      }
    }

    const blurFilter1 = new PIXI.filters.BlurFilter();
    blurFilter1.blur = 10;
    instance.filters = [blurFilter1];
  }
});
