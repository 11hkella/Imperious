import { Tile, Piece } from "@/interface";

export const addPieceToTile = (
  gameData: Tile[][],
  row: number,
  col: number,
  piece: Piece
): Tile[][] => {
  // Create a copy of the game data to avoid mutating the original state
  const newGameData = gameData.map((r) => r.map((tile) => ({ ...tile })));

  // Check if the specified tile exists
  if (newGameData[row] && newGameData[row][col]) {
    // Add the piece to the occupant of the tile
    newGameData[row][col].occupant = piece;
  } else {
    console.error(`Tile at (${row}, ${col}) does not exist.`);
  }

  return newGameData;
}