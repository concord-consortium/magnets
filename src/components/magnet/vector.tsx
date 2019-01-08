import * as PIXI from "pixi.js";
import { PixiComponent } from "@inlet/react-pixi";

interface IProps {
  x: number;
  y: number;
  length: number;
  direction: number;
}
interface IState {
}

export default PixiComponent<IProps, PIXI.Graphics>("Vector", {
  create: props => {
    return new PIXI.Graphics();
  },
  applyProps: (instance, oldProps, newProps) => {
    const { x, y, length, direction } = newProps;
    instance.clear();
    instance.beginFill(0xBBBBBB);
    // instance.lineStyle(2, 0xBBBBBB);

    // basic triangle shape
    const width = length / 4;
    let pointer = [
      [x - (length / 4), y - (width / 2)],
      [x - (length / 4), y + (width / 2)],
      [x + (length / 4), y]
    ];

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

    instance.beginFill(0x888888);
    instance.drawCircle(x, y, length / 20);
  }
});
