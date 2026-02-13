"use client";

import { type Tile, Turrain } from "@/interface/tile";
import { type Dispatch, type SetStateAction, useRef } from "react";
import styled from "styled-components";
import { useDrop } from "react-dnd";
import { isValidMove } from "@/helpers/MovementConfig";
import { Piece } from "./Piece";
import { fieldColor, mountainColor, forestColor } from "./styles/colors";

export interface BoardTileProps {
  tileData: Tile;
  setGameData: Dispatch<SetStateAction<Record<string, Tile>>>;
}

export const BoardTile: React.FC<BoardTileProps> = ({
  tileData,
  setGameData,
}) => {
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
    canDrop: (item: any) => {
      // Validate move
      const fromTile = item.sourceTile || tileData;
      return isValidMove(item.piece, fromTile, tileData);
    },
    drop: (item: any) => {
      // Only allow drop if valid
      if (!isValidMove(item.piece, item.sourceTile, tileData)) return;
      setGameData((prev) => {
        const newData = { ...prev };
        const sourceTileId = item.sourceTile?.id;
        // Prevent dropping on same tile
        if (sourceTileId === id) return prev;
        // Prevent dropping on blocked terrain (should be handled by isValidMove, but double check)
        if (tileData.turrain === Turrain.MOUNTAIN) return prev;
        // Remove piece from source tile
        if (sourceTileId && newData[sourceTileId]) {
          newData[sourceTileId] = {
            ...newData[sourceTileId],
            occupant: undefined,
          };
        }
        // Replace piece on target tile (capture/replace logic)
        newData[id] = { ...newData[id], occupant: item.piece };
        return newData;
      });
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
      $occupied={!!occupant}
      aria-dropeffect={canDrop ? "move" : undefined}
    >
      <Piece piece={occupant} tileSize={tileSize} />
      <TileLabel>{id}</TileLabel>
      {isOver && canDrop && <DropOverlay $valid />}
      {isOver && !canDrop && <DropOverlay />}
    </GameTileContainer>
  );
};

const GameTileContainer = styled.div<{
  turrain: Turrain;
  $isOver?: boolean;
  $canDrop?: boolean;
  $occupied?: boolean;
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
`;

const DropOverlay = styled.div<{ $valid?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 10;
  background: ${
    ({ $valid }) =>
      $valid
        ? "rgba(76, 175, 80, 0.25)" // green for valid
        : "rgba(244, 67, 54, 0.25)" // red for invalid
  };
  border: ${({ $valid }) =>
    $valid ? "2px solid #4caf50" : "2px solid #f44336"};
  box-shadow: ${({ $valid }) =>
    $valid ? "0 0 8px #4caf50" : "0 0 8px #f44336"};
`;

const TileLabel = styled.p`
  color: grey;
  position: absolute;
  cursor: default;
`;
