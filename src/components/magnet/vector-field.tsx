import * as React from "react";
import { Container } from "@inlet/react-pixi";
import Vector from "./vector";
import { getFieldVectorAtPosition } from "./magnet-util";
import { PossibleMagnet } from "./magnet-canvas";
import { SimulationMagnetType } from "../../models/simulation-magnet";

interface IProps {
  magnets: PossibleMagnet[];
  magnetModels: SimulationMagnetType[];
  width: number;
  height: number;
  cellSize: number;
}

export default function VectorField(props: IProps) {
  const { magnets, magnetModels, width, height, cellSize } = props;
  const vectors = [];
  for (let x = cellSize / 2; x < width; x += cellSize) {
    for (let y = cellSize / 2; y < height; y += cellSize) {
      const direction = getFieldVectorAtPosition(magnets, magnetModels, x, y).toAngle();
      vectors.push(
        <Vector key={`${x} ${y}`}
          x={x} y={y} length={cellSize} direction={direction} />
      );
    }
  }
  return (
    <Container width={width} height={height}>
      { vectors }
    </Container>
  );
}
