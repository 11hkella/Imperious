import { Tile, Turrain } from "@/interface";
import { configuredTurrain } from "./terrainConfig";

export const initializeBoardData = () => {
  const numRows = 12;
  const numCols = 12;

  const boardData: Record<string, Tile> = {};

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      const id = `${row + 1}-${col + 1}`;
      boardData[id] = {
        id,
        turrain: configuredTurrain[id] || Turrain.FIELD,
        position: { row, col },
      }
    }
  }

  return boardData;
}