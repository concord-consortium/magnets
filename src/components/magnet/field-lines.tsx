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
        ? magnet.x - (magnet.length / 2) - 10
        : magnet.x + (magnet.length / 2) + 10;
      const negEndOuterX = magnetModel.flipped
        ? magnet.x - (magnet.length / 2) + 10
        : magnet.x + (magnet.length / 2) - 10;
      const negEndMiddleX = magnetModel.flipped
        ? magnet.x - (magnet.length / 2)
        : magnet.x + (magnet.length / 2);
      const negEndInnerX = magnetModel.flipped
        ? magnet.x - (magnet.length / 2) + 10
        : magnet.x + (magnet.length / 2) - 10;

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

      // const posEndInternalX = magnetModel.flipped
      //   ? magnet.x + (magnet.length / 2) - 1
      //   : magnet.x - (magnet.length / 2) + 1;
      // // Internal lines
      // fieldLines.push(
      //   renderFieldLine(posEndInternalX, magnet.y, props, index++, true)
      // );
      // fieldLines.push(
      //   renderFieldLine(posEndInternalX, magnet.y + 12, props, index++, true)
      // );
      // fieldLines.push(
      //   renderFieldLine(posEndInternalX, magnet.y - 12, props, index++, true)
      // );
    }
  });
  return (
    <Container width={width} height={height}>
      { fieldLines }
    </Container>
  );
}
