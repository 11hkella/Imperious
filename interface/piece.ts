import { Tile } from "./tile";

// Drag-and-drop payload for a piece
export interface PieceDragItem {
  piece: PieceInterface;
  tile: Tile;
}
export enum PieceType {
  PIKE = "pike",
  AXE = "axe",
  KING = "king",
  NOBLEAXE = "nobleAxe",
  NOBLESWORD = "nobleSword",
  ARCHER = "archer",
  CAVALRY = "cavalry",
  SQUIRE = "squire",
  // MONSTER = "monster", // for future use?
  // NPC = "npc",
}

export interface PieceInterface {
  id: string;
  type: PieceType;
  team: string;
  hasMoved: boolean;
  isAlive: boolean;
}
