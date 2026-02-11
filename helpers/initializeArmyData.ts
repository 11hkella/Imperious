import { PieceType } from "@/interface";

export const initializeArmyData = (teamName: string) => {
  return armyComposition.map((pieceType, i) => ({
    id: `${pieceType}-${teamName}-${i}`,
    type: pieceType,
    team: teamName,
    hasMoved: false,
    isAlive: true,
  }));
};

const armyComposition = [
  PieceType.ARCHER,
  PieceType.AXE,
  PieceType.AXE,
  PieceType.CAVALRY,
  PieceType.CAVALRY,
  PieceType.KING,
  PieceType.NOBLEAXE,
  PieceType.NOBLESWORD,
  PieceType.PIKE,
  PieceType.PIKE,
  PieceType.PIKE,
  PieceType.PIKE,
  PieceType.SQUIRE,
];
