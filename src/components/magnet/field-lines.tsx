import * as React from "react";
import { Container } from "@inlet/react-pixi";
import FieldLine from "./field-line";
import { PossibleMagnet, Magnet } from "./magnet-canvas";
import { SimulationMagnetType } from "../../models/simulation-magnet";

interface IProps {
  magnets: PossibleMagnet[];
  magnetModels: SimulationMagnetType[];
  width: number;
  height: number;
}

function renderFieldLine(
  leftX: number,
  rightX: number,
  y: number,
  originMagnet: Magnet,
  originMagnetModel: SimulationMagnetType,
  props: IProps,
  index: number,
  internal?: boolean)
{
  const { magnets, magnetModels } = props;
  return (
    <FieldLine key={index}
      leftX={leftX}
      rightX={rightX}
      y={y}
      originMagnet={originMagnet}
      originMagnetModel={originMagnetModel}
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
      const leftEndOutsideX = magnet.x - (magnet.length / 2) - 1;
      const rightEndOutsideX = magnet.x + (magnet.length / 2) + 1;
      const leftEndOuterX = magnet.x - (magnet.length / 2) + 1;
      const rightEndOuterX = magnet.x + (magnet.length / 2) - 1;
      const leftEndMiddleX = magnet.x - (magnet.length / 2) + 3;
      const rightEndMiddleX = magnet.x + (magnet.length / 2) - 3;
      const leftEndInnerX = magnet.x - (magnet.length / 2) + 10;
      const rightEndInnerX = magnet.x + (magnet.length / 2) - 10;

      // External lines
      fieldLines.push(
        renderFieldLine(leftEndOutsideX, rightEndOutsideX, magnet.y, magnet, magnetModel, props, index++)
      );
      fieldLines.push(
        renderFieldLine(leftEndOutsideX, rightEndOutsideX, magnet.y + 12, magnet, magnetModel, props, index++)
      );
      fieldLines.push(
        renderFieldLine(leftEndOutsideX, rightEndOutsideX, magnet.y - 12, magnet, magnetModel, props, index++)
      );

      fieldLines.push(
        renderFieldLine(leftEndMiddleX, rightEndMiddleX, magnet.y + 26, magnet, magnetModel, props, index++)
      );
      fieldLines.push(
        renderFieldLine(leftEndMiddleX, rightEndMiddleX,  magnet.y - 26, magnet, magnetModel, props, index++)
      );
      fieldLines.push(
        renderFieldLine(leftEndOuterX, rightEndOuterX, magnet.y + 26, magnet, magnetModel, props, index++)
      );
      fieldLines.push(
        renderFieldLine(leftEndOuterX, rightEndOuterX, magnet.y - 26, magnet, magnetModel, props, index++)
      );
      fieldLines.push(
        renderFieldLine(leftEndInnerX, rightEndInnerX, magnet.y + 26, magnet, magnetModel, props, index++)
      );
      fieldLines.push(
        renderFieldLine(leftEndInnerX, rightEndInnerX, magnet.y - 26, magnet, magnetModel, props, index++)
      );

      const leftEndInternalX = magnet.x - (magnet.length / 2) + 1;
      const rightEndInternalX = magnet.x + (magnet.length / 2) - 1;
      // Internal lines
      fieldLines.push(
        renderFieldLine(leftEndInternalX, rightEndInternalX, magnet.y, magnet, magnetModel, props, index++, true)
      );
      fieldLines.push(
        renderFieldLine(leftEndInternalX, rightEndInternalX, magnet.y + 12, magnet, magnetModel, props, index++, true)
      );
      fieldLines.push(
        renderFieldLine(leftEndInternalX, rightEndInternalX, magnet.y - 12, magnet, magnetModel, props, index++, true)
      );
    }
  });
  return (
    <Container width={width} height={height}>
      { fieldLines }
    </Container>
  );
}
