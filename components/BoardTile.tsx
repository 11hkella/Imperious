"use client";

import { type Tile } from "@/interface/tile";
import { type Dispatch, type SetStateAction } from "react";
import { useDrop } from "react-dnd";
import { isValidMove } from "@/helpers/MovementConfig";
import { Piece } from "./Piece";
import { PieceDragItem, PieceInterface } from "@/interface";
import { GameTileContainer, TileLabel, DropOverlay } from "./BoardTileStyles";

export interface BoardTileProps {
  tileData: Tile;
  pieceData?: PieceInterface;
  setGameData: Dispatch<SetStateAction<Record<string, Tile>>>;
  setArmyData: Dispatch<SetStateAction<Record<string, PieceInterface>>>;
}

export const BoardTile: React.FC<BoardTileProps> = ({
  tileData,
  pieceData,
  setGameData,
  setArmyData,
}) => {
  const { id, turrain, occupantId } = tileData;

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

        if (occupantId) {
          // register the capture in army data if there is an occupant
          setArmyData((prev) => {
            const newArmy = { ...prev };
            newArmy[occupantId].isAlive = false;
            return newArmy;
          });
        }

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
