
export enum PieceType {
  PIKE = "pike",
  AXE = "axe",
  KING = "king",
  NOBLE = "noble",
  ARCHER = "archer",
  CAVALRY = "cavalry",
  SQUIRE = "squire",
  // MONSTER = "monster", // for future use?
  // NPC = "npc",
}

export interface Piece {
  id: string;
  type: PieceType;
  team: number;
}