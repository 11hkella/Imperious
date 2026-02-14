import { ArcherIcon } from "@/components/svg/ArcherIcon"
import { AxemanIcon } from "@/components/svg/AxemanIcon"
import { AxemanNobelIcon } from "@/components/svg/AxemanNobleIcon"
import { CalvaryIcon } from "@/components/svg/CalvaryIcon"
import { KingIcon } from "@/components/svg/KingIcon"
import { PikemanIcon } from "@/components/svg/PikemanIcon"
import { SquireIcon } from "@/components/svg/SquireIcon"
import { SwordsmanNobleIcon } from "@/components/svg/SwordsmanNobleIcon"
import { PieceType } from "@/interface"

export const initializeArmyData = (teamName: string) => {

  return armyComposition.map((pieceType, i) => ({
    id: `${pieceType}-${teamName}-${i}`,
    type: pieceType,
    team: teamName,
    svgElement: pieceSvgMap[pieceType],
    hasMoved: false,
    isAlive: true,
  }))
}

const armyComposition = [
  PieceType.ARCHER,
  PieceType.AXE,
  PieceType.AXE,
  PieceType.CAVALRY,
  PieceType.CAVALRY,
  PieceType.KING,
  PieceType.NOBLEAXE,
  PieceType.NOBLESWORD,
  PieceType.PIKE,
  PieceType.PIKE,
  PieceType.PIKE,
  PieceType.PIKE,
  PieceType.SQUIRE,
]

const pieceSvgMap = {
  [PieceType.ARCHER]: ArcherIcon,
  [PieceType.AXE]: AxemanIcon,
  [PieceType.CAVALRY]: CalvaryIcon,
  [PieceType.KING]: KingIcon,
  [PieceType.NOBLEAXE]: AxemanNobelIcon,
  [PieceType.NOBLESWORD]: SwordsmanNobleIcon,
  [PieceType.PIKE]: PikemanIcon,
  [PieceType.SQUIRE]: SquireIcon,
}