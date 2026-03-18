"use client";

import styled, { css } from "styled-components";
import { useDrag } from "react-dnd";
import { PieceInterface } from "../interfaces/piece";
import { Tile } from "@/interfaces";
import { pieceSvgConfig } from "@/configs";

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
  const SvgComponent = pieceSvgConfig[piece.type];
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
