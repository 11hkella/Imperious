import { JSX } from "react";

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
  svgElement: ({ height, width }: {
    height?: string | undefined;
    width?: string | undefined;
  }) => JSX.Element;
  hasMoved: boolean;
  isAlive: boolean;
}