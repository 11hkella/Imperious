// Drag-and-drop payload for a piece
export interface PieceDragItem {
  piece: Piece;
  sourceTile: import("./tile").Tile;
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

export interface Piece {
  id: string;
  type: PieceType;
  team: string;
  hasMoved: boolean;
  isAlive: boolean;
}
