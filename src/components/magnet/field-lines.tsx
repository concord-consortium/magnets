import * as React from "react";
import { Container } from "@inlet/react-pixi";
import FieldLine from "./field-line";
import { PossibleMagnet } from "./magnet-canvas";
import { SimulationMagnetType } from "../../models/simulation-magnet";

interface IProps {
  magnets: PossibleMagnet[];
  magnetModels: SimulationMagnetType[];
  width: number;
  height: number;
}

function renderFieldLine(x: number, y: number, props: IProps, index: number, internal?: boolean) {
  const { magnets, magnetModels } = props;
  return (
    <FieldLine key={index}
      x={x}
      y={y}
      magnets={magnets}
      magnetModels={magnetModels}
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
        renderFieldLine(magnet.x + (magnet.length / 2) + 1, magnet.y, props, index++)
      );
      fieldLines.push(
        renderFieldLine(magnet.x + (magnet.length / 2), magnet.y + 12, props, index++)
      );
      fieldLines.push(
        renderFieldLine(magnet.x + (magnet.length / 2), magnet.y - 12, props, index++)
      );
      fieldLines.push(
        renderFieldLine(magnet.x + (magnet.length / 2), magnet.y + 24, props, index++)
      );
      fieldLines.push(
        renderFieldLine(magnet.x + (magnet.length / 2), magnet.y - 26, props, index++)
      );
      fieldLines.push(
        renderFieldLine(magnet.x + (magnet.length / 2) - 1, magnet.y + 26, props, index++)
      );
      fieldLines.push(
        renderFieldLine(magnet.x + (magnet.length / 2) - 1, magnet.y - 26, props, index++)
      );
      fieldLines.push(
        renderFieldLine(magnet.x + (magnet.length / 2) - 10, magnet.y + 26, props, index++)
      );
      fieldLines.push(
        renderFieldLine(magnet.x + (magnet.length / 2) - 10, magnet.y - 26, props, index++)
      );

      // Internal lines
      fieldLines.push(
        renderFieldLine(magnet.x - (magnet.length / 2) + 1, magnet.y, props, index++, true)
      );
      fieldLines.push(
        renderFieldLine(magnet.x - (magnet.length / 2) + 1, magnet.y + 12, props, index++, true)
      );
      fieldLines.push(
        renderFieldLine(magnet.x - (magnet.length / 2) + 1, magnet.y - 12, props, index++, true)
      );
    }
  });
  return (
    <Container width={width} height={height}>
      { fieldLines }
    </Container>
  );
}
