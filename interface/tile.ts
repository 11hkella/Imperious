// Drag-and-drop payload for a tile (if needed in future)
export interface TileDropTarget {
  tile: Tile;
}
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
