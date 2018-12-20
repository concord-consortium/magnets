import * as React from "react";
import { Container } from "@inlet/react-pixi";
import Vector from "./vector";
import { getFieldDirection } from "./magnet-util";

interface IProps {
  width: number;
  height: number;
}

export default function VectorField(props: IProps) {
  const { width, height } = props;
  const vectorSize = 50;
  const vectors = [];
  for (let x = vectorSize / 2; x < width; x += vectorSize) {
    for (let y = vectorSize / 2; y < height; y += vectorSize) {
      const direction = getFieldDirection(null, x, y);
      vectors.push(
        <Vector key={`${x} ${y}`}
          x={x} y={y} length={vectorSize} direction={direction} />
      );
    }
  }
  return (
    <Container width={width} height={height}>
      { vectors }
    </Container>
  );
}
