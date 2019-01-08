import * as PIXI from "pixi.js";
import { PixiComponent } from "@inlet/react-pixi";
import { getFieldVectorAtPosition } from "./magnet-util";
import { PossibleMagnet } from "./magnet-canvas";
import { SimulationMagnetType } from "../../models/simulation-magnet";

interface IProps {
  magnets: PossibleMagnet[];
  magnetModels: SimulationMagnetType[];
  width: number;
  height: number;
  cellSize: number;
}

export default PixiComponent<IProps, PIXI.Graphics>("Gradient", {
  create: props => {
    return new PIXI.Graphics();
  },
  applyProps: (instance, oldProps, newProps) => {
    const { magnets, magnetModels, width, height, cellSize } = newProps;
    const half = cellSize / 2;
    instance.clear();

    for (let x = 0; x < width; x += cellSize) {
      for (let y = 0; y < height; y += cellSize) {
        // scale up, as values are tiny
        const scale = 1E4;
        const magnitude = getFieldVectorAtPosition(magnets, magnetModels, x + half, y + half).length() * scale;
        instance.beginFill(0x56d2f9, magnitude);
        instance.drawRect(x, y, cellSize, cellSize);
      }
    }

    const blurFilter1 = new PIXI.filters.BlurFilter();
    blurFilter1.blur = 10;
    instance.filters = [blurFilter1];
  }
});
