// Drag-and-drop payload for a tile (if needed in future)
export interface TileDropTarget {
  tile: Tile;
}

export enum Turrain {
  FIELD = "field",
  MOUNTAIN = "mountain",
  FOREST = "forest",
}

export interface Tile {
  id: string;
  turrain: Turrain;
  occupantId?: string;
  position: TilePosition;
}

export interface TilePosition {
  row: number;
  col: number;
}
