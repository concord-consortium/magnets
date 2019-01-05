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

function renderFieldLine(
  x: number,
  y: number,
  props: IProps,
  index: number,
  reverseLine: boolean,
  internal?: boolean)
{
  const { magnets, magnetModels } = props;
  return (
    <FieldLine key={index}
      x={x}
      y={y}
      magnets={magnets}
      magnetModels={magnetModels}
      reverseLine={reverseLine}
      internal={internal}
    />
  );
}

export default function FieldLines(props: IProps) {
  const { magnets, magnetModels, width, height } = props;
  const fieldLines: any[] = [];
  magnets.forEach((magnet, i) => {
    let index = i * 100;
    const magnetModel = i < magnetModels.length && magnetModels[i];
    if (magnet && magnetModel) {
      if (magnetModel.type === "coil" && magnetModel.coilPolarity === "off") {
        return;
      }

      // The left magnet always draws field lines from the right pole
      // The right magnet will draw from the right pole when opposite poles are adjacent,
      // i.e. both magnets are in their starting position or both are flipped
      const useRightPole = i === 0 || (magnetModels[1] && magnetModels[0].flipped === magnetModels[1].flipped);
      // Reverse the direction field lines are drawn when you're drawing from the north pole
      const reverseLines = magnetModels[0].flipped;

      const originOutsideX = useRightPole
        ? magnet.x + (magnet.length / 2) + 1
        : magnet.x - (magnet.length / 2) - 1;
      const originOuterX = useRightPole
        ? magnet.x + (magnet.length / 2) - 1
        : magnet.x - (magnet.length / 2) + 1;
      const originMiddleX = useRightPole
        ? magnet.x + (magnet.length / 2) - 3
        : magnet.x - (magnet.length / 2) + 3;
      const originInnerX = useRightPole
        ? magnet.x + (magnet.length / 2) - 10
        : magnet.x - (magnet.length / 2) + 10;

      // External lines
      fieldLines.push(
        renderFieldLine(originOutsideX, magnet.y, props, index++, reverseLines)
      );
      fieldLines.push(
        renderFieldLine(originOutsideX, magnet.y + 12, props, index++, reverseLines)
      );
      fieldLines.push(
        renderFieldLine(originOutsideX, magnet.y - 12, props, index++, reverseLines)
      );

      fieldLines.push(
        renderFieldLine(originMiddleX, magnet.y + 26, props, index++, reverseLines)
      );
      fieldLines.push(
        renderFieldLine(originMiddleX, magnet.y - 26, props, index++, reverseLines)
      );
      fieldLines.push(
        renderFieldLine(originOuterX, magnet.y + 26, props, index++, reverseLines)
      );
      fieldLines.push(
        renderFieldLine(originOuterX, magnet.y - 26, props, index++, reverseLines)
      );
      fieldLines.push(
        renderFieldLine(originInnerX, magnet.y + 26, props, index++, reverseLines)
      );
      fieldLines.push(
        renderFieldLine(originInnerX, magnet.y - 26, props, index++, reverseLines)
      );

      const originInternalX = magnetModel.flipped
        ? magnet.x + (magnet.length / 2) - 1
        : magnet.x - (magnet.length / 2) + 1;
      // Internal lines
      fieldLines.push(
        renderFieldLine(originInternalX, magnet.y, props, index++, false, true)
      );
      fieldLines.push(
        renderFieldLine(originInternalX, magnet.y + 12, props, index++, false, true)
      );
      fieldLines.push(
        renderFieldLine(originInternalX, magnet.y - 12, props, index++, false, true)
      );
    }
  });
  return (
    <Container width={width} height={height}>
      { fieldLines }
    </Container>
  );
}
