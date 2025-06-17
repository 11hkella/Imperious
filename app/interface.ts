export enum Turrain {
  FIELD = "field",
  MOUNTAIN = "mountain",
  FOREST = "forest",
}

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

export interface Occupant {
  id: string;
  type: PieceType;
  team: number;
}

export interface GameData {
  id: string;
  turrain: Turrain;
  occupant: Occupant | null;
}
