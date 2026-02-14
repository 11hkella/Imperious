"use client";

import { type Tile, Turrain } from "@/interface/tile";
import { type Dispatch, type SetStateAction } from "react";
import styled from "styled-components";
import { useDrop } from "react-dnd";
import { isValidMove } from "@/helpers/MovementConfig";
import { Piece } from "./Piece";
import { fieldColor, mountainColor, forestColor } from "./styles/colors";
import { PieceDragItem, PieceInterface } from "@/interface";

export interface BoardTileProps {
  tileData: Tile;
  pieceData?: PieceInterface;
  setGameData: Dispatch<SetStateAction<Record<string, Tile>>>;
}

export const BoardTile: React.FC<BoardTileProps> = ({
  tileData,
  pieceData,
  setGameData,
}) => {
  const { id, turrain } = tileData;

  const [{ isOver, canDrop }, dropRef] = useDrop(() => {
    return {
      accept: "PIECE",
      canDrop: (item: PieceDragItem) => {
        const fromTile = item.tile;
        const isvalid = isValidMove(item.piece, fromTile, tileData);
        return isvalid;
      },
      drop: (item: PieceDragItem) => {
        if (!isValidMove(item.piece, item.tile, tileData)) return;

        setGameData((prev) => {
          const newData = { ...prev };
          const sourceTileId = item.tile.id;
          // Remove piece from source tile
          if (sourceTileId && newData[sourceTileId]) {
            newData[sourceTileId] = {
              ...newData[sourceTileId],
              occupantId: undefined,
            };
          }
          // Replace piece on target tile (capture/replace logic)
          const { team, unitNumber, type } = item.piece;
          const pieceId = `${type}-${unitNumber}-${team}`;
          newData[id] = { ...newData[id], occupantId: pieceId };
          return newData;
        });
        return { targetTileId: id };
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
    };
  });

  return (
    <GameTileContainer
      ref={dropRef}
      turrain={turrain}
      $isOver={isOver}
      $canDrop={canDrop}
      $occupied={!!pieceData}
    >
      <Piece piece={pieceData} tile={tileData} />
      <TileLabel>{id}</TileLabel>
      {isOver && <DropOverlay $valid={canDrop} />}
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
