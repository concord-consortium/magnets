import * as React from "react";
import { Container } from "@inlet/react-pixi";
import Vector from "./vector";
import { getFieldMagnitudeAndDirection } from "./magnet-util";
import { IMagnetProps } from "./magnet-canvas";

interface IProps {
  magnet: IMagnetProps;
  width: number;
  height: number;
  cellSize: number;
}

export default function VectorField(props: IProps) {
  const { magnet, width, height, cellSize } = props;
  const vectors = [];
  for (let x = cellSize / 2; x < width; x += cellSize) {
    for (let y = cellSize / 2; y < height; y += cellSize) {
      const direction = getFieldMagnitudeAndDirection(magnet, x, y)[1];
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
