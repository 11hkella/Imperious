import { Piece } from "./piece";

export enum Turrain {
  FIELD = "field",
  MOUNTAIN = "mountain",
  FOREST = "forest",
}

export interface Tile {
  id: string;
  turrain: Turrain;
  occupant?: Piece;
  position: { row: number; col: number };
}
