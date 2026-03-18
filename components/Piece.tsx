"use client";

import styled, { css } from "styled-components";
import { useDrag } from "react-dnd";
import {
  PieceType as PieceTypeEnum,
  PieceInterface,
} from "../interfaces/piece";
import { ArcherIcon } from "../public/svg/ArcherIcon";
import { AxemanIcon } from "../public/svg/AxemanIcon";
import { AxemanNobleIcon } from "../public/svg/AxemanNobleIcon";
import { CalvaryIcon } from "../public/svg/CalvaryIcon";
import { KingIcon } from "../public/svg/KingIcon";
import { PikemanIcon } from "../public/svg/PikemanIcon";
import { SquireIcon } from "../public/svg/SquireIcon";
import { SwordsmanNobleIcon } from "../public/svg/SwordsmanNobleIcon";
import { Tile } from "@/interfaces";

// Map PieceType enum to corresponding SVG component
export const pieceTypeToSVG: Record<PieceTypeEnum, React.FC> = {
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
  tile: Tile;
}

export const Piece: React.FC<PieceProps> = ({ piece, tile }) => {
  // Setup drag
  const [{ isDragging }, dragRef] = useDrag({
    type: "PIECE",
    item: { piece, tile },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  if (!piece) return null;
  const SvgComponent = pieceTypeToSVG[piece.type];
  if (!SvgComponent) return null;
  return (
    <PieceIconContainer ref={dragRef} $isDragging={isDragging} tabIndex={0}>
      <SvgComponent />
    </PieceIconContainer>
  );
};

const PieceIconContainer = styled.div<{ $isDragging?: boolean }>`
  cursor: grab;
  z-index: 5;
  width: 100%;
  height: 100%;
  opacity: ${({ $isDragging }) => ($isDragging ? 0.5 : 1)};
  ${({ $isDragging }) =>
    $isDragging &&
    css`
      filter: drop-shadow(0 0 8px #8888ff);
    `}
`;
