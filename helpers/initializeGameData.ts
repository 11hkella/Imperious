import { PieceType } from "@/interface";
import { initializeBoardData } from "./initalizeBoardData";

export const initializeGameData = () => {
  const board = initializeBoardData();

  // Get all unique piece types
  const pieceTypes = [
    PieceType.ARCHER,
    PieceType.AXE,
    PieceType.KING,
    PieceType.NOBLEAXE,
    PieceType.NOBLESWORD,
    PieceType.PIKE,
    PieceType.CAVALRY,
    PieceType.SQUIRE,
  ];

  // Create one of each piece for each army
  const player1Pieces = pieceTypes.map((type, i) => ({
    id: `${type}-Player1-${i}`,
    type,
    team: "Player1",
    hasMoved: false,
    isAlive: true,
  }));
  const player2Pieces = pieceTypes.map((type, i) => ({
    id: `${type}-Player2-${i}`,
    type,
    team: "Player2",
    hasMoved: false,
    isAlive: true,
  }));

  // Place Player1's pieces on row 1 (top), Player2's on row 12 (bottom)
  for (let i = 0; i < pieceTypes.length; i++) {
    const col = i + 1; // columns 1-8
    const player1TileId = `1-${col}`;
    const player2TileId = `12-${col}`;
    board[player1TileId].occupant = player1Pieces[i];
    board[player2TileId].occupant = player2Pieces[i];
  }

  return board;
};
