import * as PIXI from "pixi.js";
import { PixiComponent } from "@inlet/react-pixi";
import { Vector } from "./vec-utils";

interface IProps {
  x: number;
  y: number;
  length: number;
  field: Vector;
}
interface IState {
}

export default PixiComponent<IProps, PIXI.Graphics>("Vector", {
  create: props => {
    return new PIXI.Graphics();
  },
  applyProps: (instance, oldProps, newProps) => {
    const { x, y, length, field } = newProps;
    instance.clear();

    const opacity = Math.max(0.3, Math.min(field.length() * 2e4, 1));

    instance.beginFill(0xCCCCCC, opacity);
    // instance.lineStyle(2, 0xBBBBBB);

    // basic triangle shape
    const width = length / 4;
    let pointer = [
      [x - (length / 4), y - (width / 2)],
      [x - (length / 4), y + (width / 2)],
      [x + (length / 2), y]
    ];

    const direction = field.toAngle();

    // rotate shape
    pointer = pointer.map(p => {
      const dx = p[0] - x;
      const dy = p[1] - y;
      const cos = Math.cos(direction);
      const sin = Math.sin(direction);
      const newX = x + (-dy * sin + dx * cos);
      const newY = y + (dy * cos + dx * sin);
      return [newX, newY];
    });

    instance.moveTo(pointer[0][0], pointer[0][1]);
    instance.lineTo(pointer[1][0], pointer[1][1]);
    instance.lineTo(pointer[2][0], pointer[2][1]);
    instance.lineTo(pointer[0][0], pointer[0][1]);

    instance.beginFill(0x888888, opacity);
    instance.drawCircle(x, y, length / 20);
  }
});
