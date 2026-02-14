import {
  PieceInterface,
  PieceType,
  Tile,
  TilePosition,
  Turrain,
} from "@/interface";
import { Direction } from "@/interface/movement";

const getDistanceAndDirection = (from: TilePosition, to: TilePosition) => {
  const dRow = to.row - from.row;
  const dCol = to.col - from.col;
  const absRow = Math.abs(dRow);
  const absCol = Math.abs(dCol);
  let direction: string = "";
  if (absRow === absCol && absRow !== 0) direction = Direction.DIAGONAL;
  else if (dRow === 0 || dCol === 0) direction = Direction.LINEAR;
  else if ((absRow === 2 && absCol === 1) || (absRow === 1 && absCol === 2))
    direction = Direction.LSHAPED;
  else direction = Direction.OMNI;
  return { distance: Math.max(absRow, absCol), direction };
};

const isValidMove = (piece: PieceInterface, from: Tile, to: Tile) => {
  if (!piece || !from) return false;
  const config = movementConfig[piece.type];
  if (!config) return false;
  const { distance, direction } = getDistanceAndDirection(
    from.position,
    to.position,
  );
  // Check range
  if (distance > config.moveRange) return false;
  // Check direction
  if (config.direction !== direction && config.direction !== Direction.OMNI)
    return false;
  // Check terrain
  if (to.turrain === Turrain.FOREST && !config.canTraverseForests) return false;
  if (to.turrain === Turrain.MOUNTAIN) return false;
  // Can't move to same tile
  if (from.id === to.id) return false;
  return true;
};

const movementConfig = {
  [PieceType.KING]: {
    moveRange: 1,
    canTraverseForests: false,
    canShoot: true,
    direction: Direction.OMNI,
  },
  [PieceType.PIKE]: {
    moveRange: 8,
    canTraverseForests: false,
    canShoot: false,
    direction: Direction.LINEAR,
  },
  [PieceType.AXE]: {
    moveRange: 8,
    canTraverseForests: true,
    canShoot: false,
    direction: Direction.DIAGONAL,
  },
  [PieceType.NOBLEAXE]: {
    moveRange: 12,
    canTraverseForests: false,
    canShoot: false,
    direction: Direction.OMNI,
  },
  [PieceType.NOBLESWORD]: {
    moveRange: 12,
    canTraverseForests: false,
    canShoot: false,
    direction: Direction.OMNI,
  },
  [PieceType.ARCHER]: {
    moveRange: 3,
    canTraverseForests: true,
    canShoot: true,
    direction: Direction.OMNI,
  },
  [PieceType.CAVALRY]: {
    moveRange: 12,
    canTraverseForests: false,
    canShoot: false,
    direction: Direction.OMNI,
  },
  [PieceType.SQUIRE]: {
    moveRange: 3,
    canTraverseForests: false,
    canShoot: false,
    direction: Direction.LSHAPED,
  },
};

export { movementConfig, getDistanceAndDirection, isValidMove };
