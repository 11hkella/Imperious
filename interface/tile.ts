// Drag-and-drop payload for a tile (if needed in future)
export interface TileDropTarget {
  tile: Tile;
}
import { PieceInterface } from "./piece";

export enum Turrain {
  FIELD = "field",
  MOUNTAIN = "mountain",
  FOREST = "forest",
}

export interface Tile {
  id: string;
  turrain: Turrain;
  occupant?: PieceInterface;
  position: TilePosition;
}

export interface TilePosition {
  row: number;
  col: number;
}
