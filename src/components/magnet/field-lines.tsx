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
  const { magnets, magnetModels, width, height } = props;
  const fieldLines: any[] = [];
  magnets.forEach((magnet, i) => {
    let index = i * 100;
    const magnetModel = i < magnetModels.length && magnetModels[i];
    if (magnet && magnetModel) {
      if (magnetModel.type === "coil" && magnetModel.coilPolarity === "off") {
        return;
      }
      const negEndOutsideX = magnetModel.flipped
        ? magnet.x - (magnetModel.magnetLength / 2) - 1
        : magnet.x + (magnetModel.magnetLength / 2) + 1;
      const negEndOuterX = magnetModel.flipped
        ? magnet.x - (magnetModel.magnetLength / 2) + 1
        : magnet.x + (magnetModel.magnetLength / 2) - 1;
      const negEndMiddleX = magnetModel.flipped
        ? magnet.x - (magnetModel.magnetLength / 2) + 3
        : magnet.x + (magnetModel.magnetLength / 2) - 3;
      const negEndInnerX = magnetModel.flipped
        ? magnet.x - (magnetModel.magnetLength / 2) + 10
        : magnet.x + (magnetModel.magnetLength / 2) - 10;

      // External lines
      fieldLines.push(
        renderFieldLine(negEndOutsideX, magnet.y, props, index++)
      );
      fieldLines.push(
        renderFieldLine(negEndOutsideX, magnet.y + 12, props, index++)
      );
      fieldLines.push(
        renderFieldLine(negEndOutsideX, magnet.y - 12, props, index++)
      );

      fieldLines.push(
        renderFieldLine(negEndMiddleX, magnet.y + 26, props, index++)
      );
      fieldLines.push(
        renderFieldLine(negEndMiddleX, magnet.y - 26, props, index++)
      );
      fieldLines.push(
        renderFieldLine(negEndOuterX, magnet.y + 26, props, index++)
      );
      fieldLines.push(
        renderFieldLine(negEndOuterX, magnet.y - 26, props, index++)
      );
      fieldLines.push(
        renderFieldLine(negEndInnerX, magnet.y + 26, props, index++)
      );
      fieldLines.push(
        renderFieldLine(negEndInnerX, magnet.y - 26, props, index++)
      );

      const posEndInternalX = magnetModel.flipped
        ? magnet.x + (magnetModel.magnetLength / 2) - 1
        : magnet.x - (magnetModel.magnetLength / 2) + 1;
      // Internal lines
      fieldLines.push(
        renderFieldLine(posEndInternalX, magnet.y, props, index++, true)
      );
      fieldLines.push(
        renderFieldLine(posEndInternalX, magnet.y + 12, props, index++, true)
      );
      fieldLines.push(
        renderFieldLine(posEndInternalX, magnet.y - 12, props, index++, true)
      );
    }
  });
  return (
    <Container width={width} height={height}>
      { fieldLines }
    </Container>
  );
}
