import * as React from "react";
import { Container } from "@inlet/react-pixi";
import Vector from "./vector";
import { getFieldMagnitudeAndDirection } from "./magnet-util";

interface IProps {
  width: number;
  height: number;
  cellSize: number;
}

export default function VectorField(props: IProps) {
  const { width, height, cellSize } = props;
  const vectors = [];
  for (let x = cellSize / 2; x < width; x += cellSize) {
    for (let y = cellSize / 2; y < height; y += cellSize) {
      const direction = getFieldMagnitudeAndDirection(null, x, y)[1];
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
