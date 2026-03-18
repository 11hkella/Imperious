import { PieceType } from "@/interfaces";
import { Direction } from "@/interfaces/movement";

export const movementConfig = {
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
