import { PieceInterface } from "./piece";

// piece id will be in format "type-unitNumber-teamName" (e.g. "archer-1-blue", "pike-3-red")
export interface Army {
  [pieceId: string]: PieceInterface;
}
