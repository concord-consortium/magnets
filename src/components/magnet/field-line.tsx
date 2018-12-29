import * as PIXI from "pixi.js";
import { PixiComponent } from "@inlet/react-pixi";
import { getFieldVectorAtPosition } from "./magnet-util";
import { PossibleMagnet } from "./magnet-canvas";
import { Vector } from "./vec-utils";

interface IProps {
  magnets: PossibleMagnet[];
  x: number;
  y: number;
}
interface IState {
}

export default PixiComponent<IProps, PIXI.Graphics>("FieldLine", {
  create: props => {
    return new PIXI.Graphics();
  },
  applyProps: (instance, oldProps, newProps) => {
    const { x, y, magnets } = newProps;
    instance.clear();
    instance.lineStyle(3, 0xBBBBBB);
    instance.moveTo(x, y);

    let currPos = new Vector(x, y);
    for (let i = 0; i < 750; i++) {
      const delta = getFieldVectorAtPosition(magnets, currPos.x, currPos.y).unit();
      currPos = currPos.add(delta);
      instance.lineTo(currPos.x, currPos.y);
    }

  }
});
