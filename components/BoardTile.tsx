"use client";

import { type Tile, Turrain } from "@/interface/tile";
import { type Dispatch, type SetStateAction, useRef } from "react";
import styled, { css } from "styled-components";
import { useDrop } from "react-dnd";
import { PieceImage } from "./Piece";
import { fieldColor, mountainColor, forestColor } from "./styles/colors";

export interface BoardTileProps {
  tileData: Tile;
  setGameData: Dispatch<SetStateAction<Record<string, Tile>>>;
}

  // TODO: tile should set its own state for performance optimization
  const { id, turrain, occupant } = tileData;

  const tileRef = useRef<HTMLDivElement>(null);

  const tileSize = {
    height: `${tileRef.current?.offsetHeight ?? 0}px`,
    width: `${tileRef.current?.offsetWidth ?? 0}px`,
  };

  // Setup drop
  const [{ isOver, canDrop }, dropRef] = useDrop({
    accept: "PIECE",
    drop: (item: any) => {
      // Movement validation and state update will be handled in next steps
      return { targetTileId: id };
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  // Merge refs
  const setRefs = (el: HTMLDivElement) => {
    tileRef.current = el;
    dropRef(el);
  };

  return (
    <GameTileContainer
      ref={setRefs}
      turrain={turrain}
      $isOver={isOver}
      $canDrop={canDrop}
      aria-dropeffect={canDrop ? "move" : undefined}
    >
      <PieceImage piece={occupant} tileSize={tileSize} />
      <TileLabel>{id}</TileLabel>
    </GameTileContainer>
  );
};

const GameTileContainer = styled.div<{
  turrain: Turrain;
  $isOver?: boolean;
  $canDrop?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--foreground);
  position: relative;
  background-color: ${({ turrain }) => {
    switch (turrain) {
      case Turrain.FIELD:
        return fieldColor;
      case Turrain.MOUNTAIN:
        return mountainColor;
      case Turrain.FOREST:
        return forestColor;
      default:
        return fieldColor;
    }
  }};
  ${({ $isOver, $canDrop }) =>
    $isOver && $canDrop &&
    css`
      outline: 3px solid #4caf50;
      box-shadow: 0 0 8px #4caf50;
    `}
  ${({ $isOver, $canDrop }) =>
    $isOver && !$canDrop &&
    css`
      outline: 3px solid #f44336;
      box-shadow: 0 0 8px #f44336;
      opacity: 0.7;
    `}
`;

const TileLabel = styled.p`
  color: grey;
  position: absolute;
  cursor: default;
`;
