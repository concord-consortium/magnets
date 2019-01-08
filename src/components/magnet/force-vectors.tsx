import * as PIXI from "pixi.js";
import { PixiComponent } from "@inlet/react-pixi";
import { getFieldVectorAtPosition, getForceBetweenMagnets } from "./magnet-util";
import { PossibleMagnet } from "./magnet-canvas";
import { SimulationMagnetType } from "../../models/simulation-magnet";

interface IProps {
  magnets: PossibleMagnet[];
  magnetModels: SimulationMagnetType[];
}

export default PixiComponent<IProps, PIXI.Graphics>("ForceVectors", {
  create: props => {
    return new PIXI.Graphics();
  },
  applyProps: (instance, oldProps, newProps) => {
    const { magnets, magnetModels } = newProps;
    instance.clear();

    function drawForceVector(magnet: PossibleMagnet, magnitude: number) {
      if (magnet && Math.abs(magnitude) > 0.5) {
        const x0 = magnet.x;
        const x1 = magnet.x + magnitude;
        const x2 = magnitude > 0 ? x1 + 20 : x1 - 20;
        const y = magnet.y;
        const y0 = y - 5;
        instance.beginFill(0xcc0000, 0.8);
        instance.drawRect(x0, y0, magnitude, 10);
        instance.moveTo(x1, y - 15);
        instance.lineTo(x1, y + 15);
        instance.lineTo(x2, y);
        instance.lineTo(x1, y - 15);
      }
    }

    let force = getForceBetweenMagnets(magnets, magnetModels);
    force *= 1e6;

    drawForceVector(magnets[0], force);
    drawForceVector(magnets[1], -force);
  }
});
