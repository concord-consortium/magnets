import * as React from "react";
import { Container } from "@inlet/react-pixi";
import FieldLine from "./field-line";
import { PossibleMagnet } from "./magnet-canvas";
import { getFieldVectorAtPosition } from "./magnet-util";

interface IProps {
  magnets: PossibleMagnet[];
  width: number;
  height: number;
}

function renderFieldLine(x: number, y: number, magnets: PossibleMagnet[], index: number) {
  return (
    <FieldLine key={index}
      x={x}
      y={y}
      magnets={magnets} />
  );
}

export default function FieldLines(props: IProps) {
  const { magnets, width, height } = props;
  const fieldLines: any[] = [];
  magnets.forEach((magnet, i) => {
    let index = i * 100;
    if (magnet) {
      fieldLines.push(
        renderFieldLine(magnet.x + (magnet.length / 2) + 1, magnet.y, magnets, index++)
      );
      fieldLines.push(
        renderFieldLine(magnet.x + (magnet.length / 2), magnet.y + 12, magnets, index++)
      );
      fieldLines.push(
        renderFieldLine(magnet.x + (magnet.length / 2), magnet.y - 12, magnets, index++)
      );
      fieldLines.push(
        renderFieldLine(magnet.x + (magnet.length / 2), magnet.y + 24, magnets, index++)
      );
      fieldLines.push(
        renderFieldLine(magnet.x + (magnet.length / 2), magnet.y - 24, magnets, index++)
      );
      fieldLines.push(
        renderFieldLine(magnet.x + (magnet.length / 2) - 10, magnet.y + 24, magnets, index++)
      );
      fieldLines.push(
        renderFieldLine(magnet.x + (magnet.length / 2) - 10, magnet.y - 24, magnets, index++)
      );
    }
  });
  return (
    <Container width={width} height={height}>
      { fieldLines }
    </Container>
  );
}
