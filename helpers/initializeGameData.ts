import { PieceType } from "@/interface";
import { initializeBoardData } from "./initalizeBoardData";
import { initializeArmyData } from "./initializeArmyData";

export const initializeGameData = () => {
  const board = initializeBoardData();

  const player1Pieces = initializeArmyData("Player1");

  board['1-6'].occupant = player1Pieces.find((piece) => piece.type === PieceType.KING);

  return board;
};