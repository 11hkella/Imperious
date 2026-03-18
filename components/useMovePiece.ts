import { movementConfig } from "@/configs";
import {
  TilePosition,
  Direction,
  PieceInterface,
  Tile,
  Turrain,
} from "@/interfaces";

export const useMovePiece = () => {
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
    const rules = movementConfig[piece.type];
    if (!rules) return false;
    const { distance, direction } = getDistanceAndDirection(
      from.position,
      to.position,
    );
    // Check range
    if (distance > rules.moveRange) return false;
    // Check direction
    if (rules.direction !== direction && rules.direction !== Direction.OMNI)
      return false;
    // Check terrain
    if (to.turrain === Turrain.FOREST && !rules.canTraverseForests)
      return false;
    if (to.turrain === Turrain.MOUNTAIN) return false;
    // Can't move to same tile
    if (from.id === to.id) return false;
    return true;
  };

  return { getDistanceAndDirection, isValidMove };
};
