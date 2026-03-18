import { movementConfig } from "@/configs";
import { Direction, PieceInterface, Tile, Turrain } from "@/interfaces";

export const useMovePiece = (setArmyData) => {
  const movePiece = (piece: PieceInterface, to: string) => {
    if (!isValidMove(piece, to, piece.position.current)) return;

    if (occupantId) {
      // register the capture in army data if there is an occupant
      setArmyData((prev) => {
        const newArmy = { ...prev };
        newArmy[occupantId].isAlive = false;
        return newArmy;
      });
    }

    setGameData((prev) => {
      const newData = { ...prev };
      const sourceTileId = item.tile.id;
      // Remove piece from source tile
      if (sourceTileId && newData[sourceTileId]) {
        newData[sourceTileId] = {
          ...newData[sourceTileId],
          occupantId: undefined,
        };
      }
      // Replace piece on target tile (capture/replace logic)
      const { team, unitNumber, type } = item.piece;
      const pieceId = `${type}-${unitNumber}-${team}`;
      newData[id] = { ...newData[id], occupantId: pieceId };
      return newData;
    });

    return { targetTileId: id };
  };

  const isValidMove = (piece: PieceInterface, from: string, to?: string) => {
    if (!piece || !from || !to) return false;

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

  return { getDistanceAndDirection, isValidMove, movePiece };
};

// TODO: create a valid movement array of all valid squares for a piece
// getValidSquares(piece, map)

const getDistanceAndDirection = (from: string, to: string) => {
  const [toRow, toCol] = to.split("-").map(Number);
  const [fromRow, fromCol] = from.split("-").map(Number);
  const dRow = toRow - fromRow;
  const dCol = toCol - fromCol;
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
