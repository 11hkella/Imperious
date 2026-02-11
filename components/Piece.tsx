import styled from "styled-components";
import {
  PieceType as PieceTypeEnum,
  Piece as PieceInterface,
} from "../interface/piece";
import { ArcherIcon } from "./svg/ArcherIcon";
import { AxemanIcon } from "./svg/AxemanIcon";
import { AxemanNobleIcon } from "./svg/AxemanNobleIcon";
import { CalvaryIcon } from "./svg/CalvaryIcon";
import { KingIcon } from "./svg/KingIcon";
import { PikemanIcon } from "./svg/PikemanIcon";
import { SquireIcon } from "./svg/SquireIcon";
import { SwordsmanNobleIcon } from "./svg/SwordsmanNobleIcon";

// Map PieceType enum to corresponding SVG component
export const pieceTypeToSVG: Record<
  PieceTypeEnum,
  React.FC<{ height?: string; width?: string }>
> = {
  [PieceTypeEnum.ARCHER]: ArcherIcon,
  [PieceTypeEnum.AXE]: AxemanIcon,
  [PieceTypeEnum.NOBLEAXE]: AxemanNobleIcon,
  [PieceTypeEnum.CAVALRY]: CalvaryIcon,
  [PieceTypeEnum.KING]: KingIcon,
  [PieceTypeEnum.PIKE]: PikemanIcon,
  [PieceTypeEnum.SQUIRE]: SquireIcon,
  [PieceTypeEnum.NOBLESWORD]: SwordsmanNobleIcon,
};

export interface PieceProps {
  piece?: PieceInterface;
  tileSize?: { height: string; width: string };
}

export const PieceImage = ({ piece, tileSize }: PieceProps) => {
  if (!piece) return null;
  const SvgComponent = pieceTypeToSVG[piece.type];
  if (!SvgComponent) return null;
  return (
    <PieceIconContainer onClick={() => {}}>
      <SvgComponent height={tileSize?.height} width={tileSize?.width} />
    </PieceIconContainer>
  );
};

const PieceIconContainer = styled.div`
  cursor: pointer;
  z-index: 5;
`;
