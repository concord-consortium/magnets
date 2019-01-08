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

function renderFieldLine(x: number, y: number, props: IProps, index: number, internal?: boolean, length?: number) {
  const { magnets, magnetModels, width, height } = props;
  return (
    <FieldLine key={index}
      x={x}
      y={y}
      width={width}
      height={height}
      magnets={magnets}
      magnetModels={magnetModels}
      internal={internal}
      magnetLength={length}
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
      const negEndOutsideX = !magnetModel.flipped
        ? magnet.x - (magnetModel.magnetLength  / 2) - 10
        : magnet.x + (magnetModel.magnetLength  / 2) + 10;
      const negEndOuterX = !magnetModel.flipped
        ? magnet.x - (magnetModel.magnetLength  / 2) + 10
        : magnet.x + (magnetModel.magnetLength  / 2) - 10;
      const negEndMiddleX = !magnetModel.flipped
        ? magnet.x - (magnetModel.magnetLength  / 2)
        : magnet.x + (magnetModel.magnetLength  / 2);
      const negEndInnerX = !magnetModel.flipped
        ? magnet.x - (magnetModel.magnetLength / 2) + 10
        : magnet.x + (magnetModel.magnetLength / 2) - 10;
      const internalLineLength = !magnetModel.flipped
        ? -(magnetModel.magnetLength + 20)
        : magnetModel.magnetLength + 20;

      // External lines
      fieldLines.push(
        renderFieldLine(negEndOutsideX, magnet.y + 6, props, index++)
      );
      fieldLines.push(
        renderFieldLine(negEndOutsideX, magnet.y - 6, props, index++)
      );
      fieldLines.push(
        renderFieldLine(negEndOutsideX, magnet.y + 18, props, index++)
      );
      fieldLines.push(
        renderFieldLine(negEndOutsideX, magnet.y - 18, props, index++)
      );
      fieldLines.push(
        renderFieldLine(negEndOutsideX, magnet.y + 25, props, index++)
      );
      fieldLines.push(
        renderFieldLine(negEndOutsideX, magnet.y - 25, props, index++)
      );

      fieldLines.push(
        renderFieldLine(negEndMiddleX, magnet.y + 30, props, index++)
      );
      fieldLines.push(
        renderFieldLine(negEndMiddleX, magnet.y - 30, props, index++)
      );
      fieldLines.push(
        renderFieldLine(negEndOuterX, magnet.y + 30, props, index++)
      );
      fieldLines.push(
        renderFieldLine(negEndOuterX, magnet.y - 30, props, index++)
      );
      fieldLines.push(
        renderFieldLine(negEndInnerX, magnet.y + 30, props, index++)
      );
      fieldLines.push(
        renderFieldLine(negEndInnerX, magnet.y - 30, props, index++)
      );

      // Internal lines, same as the points above, but backwards and inside
      fieldLines.push(
        renderFieldLine(negEndOutsideX, magnet.y + 6, props, index++, true, internalLineLength)
      );
      fieldLines.push(
        renderFieldLine(negEndOutsideX, magnet.y - 6, props, index++, true, internalLineLength)
      );
      fieldLines.push(
        renderFieldLine(negEndOutsideX, magnet.y + 18, props, index++, true, internalLineLength)
      );
      fieldLines.push(
        renderFieldLine(negEndOutsideX, magnet.y - 18, props, index++, true, internalLineLength)
      );
    }
  });
  return (
    <Container width={width} height={height}>
      { fieldLines }
    </Container>
  );
}
