import { PieceType } from "@/interface";
import { Direction } from "@/interface/movement";

export const movementConfig = {
  [PieceType.KING]: {
    moveRange: 1,
    canTraverseForests: false,
    canShoot: true,
    direction: Direction.OMNI,
  }
}