import { Tile, Turrain } from "../interface";
import { configuredTurrain } from "./terrainConfig";

export const initializeGameData = () => {
  const numRows = 12;
  const numCols = 12;

  const gameData: Tile[][] = [];

  for (let row = 0; row < numRows; row++) {
    const rowData: Tile[] = [];
    for (let col = 0; col < numCols; col++) {
      const id = `${row + 1}-${col + 1}`;
      rowData.push({
        id,
        turrain: configuredTurrain[id] || Turrain.FIELD,
        occupant: null,
      });
    }
    gameData.push(rowData);
  }

  return gameData;
};