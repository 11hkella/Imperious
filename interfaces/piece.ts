import { Direction } from ".";

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
  type: PieceType;
  unitNumber: number;
  team: string;
  moveRange: number;
  canTraverseForests: boolean;
  canShoot: boolean;
  direction: Direction;
  position: {
    current?: string; // row-col
    previous?: string; // row-col
  };
}
// isAlive => if current position then isAlive = true
// hasMoved => if previous position then hasMoved = true
