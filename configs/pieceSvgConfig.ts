import { PieceType } from "@/interfaces";
import {
  ArcherIcon,
  AxemanIcon,
  CalvaryIcon,
  KingIcon,
  AxemanNobleIcon,
  SwordsmanNobleIcon,
  PikemanIcon,
  SquireIcon,
} from "@/public/svg";

export const pieceSvgConfig = {
  [PieceType.ARCHER]: ArcherIcon,
  [PieceType.AXE]: AxemanIcon,
  [PieceType.CAVALRY]: CalvaryIcon,
  [PieceType.KING]: KingIcon,
  [PieceType.NOBLEAXE]: AxemanNobleIcon,
  [PieceType.NOBLESWORD]: SwordsmanNobleIcon,
  [PieceType.PIKE]: PikemanIcon,
  [PieceType.SQUIRE]: SquireIcon,
};
