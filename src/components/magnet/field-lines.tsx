import * as React from "react";
import { Container } from "@inlet/react-pixi";
import FieldLine from "./field-line";
import { PossibleMagnet, Magnet } from "./magnet-canvas";
import { getFieldVectorAtPosition } from "./magnet-util";

interface IProps {
  magnets: PossibleMagnet[];
  width: number;
  height: number;
}

function renderFieldLine(x: number, y: number, magnets: PossibleMagnet[], index: number, internal?: boolean) {
  return (
    <FieldLine key={index}
      x={x}
      y={y}
      magnets={magnets}
      internal={internal}
    />
  );
}

export default function FieldLines(props: IProps) {
  const { magnets, width, height } = props;
  const fieldLines: any[] = [];
  magnets.forEach((magnet, i) => {
    let index = i * 100;
    if (magnet) {
      // External lines
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
        renderFieldLine(magnet.x + (magnet.length / 2), magnet.y - 26, magnets, index++)
      );
      fieldLines.push(
        renderFieldLine(magnet.x + (magnet.length / 2) - 1, magnet.y + 26, magnets, index++)
      );
      fieldLines.push(
        renderFieldLine(magnet.x + (magnet.length / 2) - 1, magnet.y - 26, magnets, index++)
      );
      fieldLines.push(
        renderFieldLine(magnet.x + (magnet.length / 2) - 10, magnet.y + 26, magnets, index++)
      );
      fieldLines.push(
        renderFieldLine(magnet.x + (magnet.length / 2) - 10, magnet.y - 26, magnets, index++)
      );

      // Internal lines
      fieldLines.push(
        renderFieldLine(magnet.x - (magnet.length / 2) + 1, magnet.y, magnets, index++, true)
      );
      fieldLines.push(
        renderFieldLine(magnet.x - (magnet.length / 2) + 1, magnet.y + 12, magnets, index++, true)
      );
      fieldLines.push(
        renderFieldLine(magnet.x - (magnet.length / 2) + 1, magnet.y - 12, magnets, index++, true)
      );
    }
  });
  return (
    <Container width={width} height={height}>
      { fieldLines }
    </Container>
  );
}
