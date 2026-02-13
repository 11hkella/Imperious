"use client";

import styled, { css } from "styled-components";
import { useDrag } from "react-dnd";
import { PieceType as PieceTypeEnum, PieceInterface } from "../interface/piece";
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
}

export const Piece: React.FC<PieceProps> = ({ piece }) => {
  // Setup drag
  const [{ isDragging }, dragRef] = useDrag({
    type: "PIECE",
    item: { piece, tileId: piece?.tileId }, // tileId will be injected by BoardTile
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  if (!piece) return null;
  const SvgComponent = pieceTypeToSVG[piece.type];
  if (!SvgComponent) return null;
  return (
    <PieceIconContainer
      ref={dragRef}
      $isDragging={isDragging}
      aria-grabbed={isDragging}
      tabIndex={0}
    >
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
