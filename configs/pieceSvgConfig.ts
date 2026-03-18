import { ArcherIcon } from "@/public/svg/ArcherIcon";
import { AxemanIcon } from "@/public/svg/AxemanIcon";
import { CalvaryIcon } from "@/public/svg/CalvaryIcon";
import { KingIcon } from "@/public/svg/KingIcon";
import { PikemanIcon } from "@/public/svg/PikemanIcon";
import { SquireIcon } from "@/public/svg/SquireIcon";
import { SwordsmanNobleIcon } from "@/public/svg/SwordsmanNobleIcon";
import { PieceType } from "@/interfaces";

export const pieceSvgConfig = {
  [PieceType.ARCHER]: ArcherIcon,
  [PieceType.AXE]: AxemanIcon,
  [PieceType.CAVALRY]: CalvaryIcon,
  [PieceType.KING]: KingIcon,
  [PieceType.NOBLEAXE]: AxemanNobelIcon,
  [PieceType.NOBLESWORD]: SwordsmanNobleIcon,
  [PieceType.PIKE]: PikemanIcon,
  [PieceType.SQUIRE]: SquireIcon,
};
