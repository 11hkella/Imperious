import { Turrain } from "@/interfaces";
import styled from "styled-components";
import { fieldColor, mountainColor, forestColor } from "./styles/colors";

export const GameTileContainer = styled.div<{
  turrain: Turrain;
  $isOver?: boolean;
  $canDrop?: boolean;
  $occupied?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--foreground);
  position: relative;
  background-color: ${({ turrain }) => {
    switch (turrain) {
      case Turrain.FIELD:
        return fieldColor;
      case Turrain.MOUNTAIN:
        return mountainColor;
      case Turrain.FOREST:
        return forestColor;
      default:
        return fieldColor;
    }
  }};
`;

export const DropOverlay = styled.div<{ $valid?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 10;
  background: ${
    ({ $valid }) =>
      $valid
        ? "rgba(76, 175, 80, 0.25)" // green for valid
        : "rgba(244, 67, 54, 0.25)" // red for invalid
  };
  border: ${({ $valid }) =>
    $valid ? "2px solid #4caf50" : "2px solid #f44336"};
  box-shadow: ${({ $valid }) =>
    $valid ? "0 0 8px #4caf50" : "0 0 8px #f44336"};
`;

export const TileLabel = styled.p`
  color: grey;
  position: absolute;
  cursor: default;
`;
