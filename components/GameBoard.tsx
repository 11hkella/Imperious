"use client";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { BoardTile } from "@/components/BoardTile";
import type { Tile } from "@/interface/tile";
import styled from "styled-components";
import { PieceInterface } from "@/interface";

export const GameBoard = ({
  boardData,
  armyData,
  setBoardData,
  setArmyData,
}: {
  boardData: Record<string, Tile>;
  armyData: Record<string, PieceInterface>;
  setBoardData: React.Dispatch<React.SetStateAction<Record<string, Tile>>>;
  setArmyData: React.Dispatch<
    React.SetStateAction<Record<string, PieceInterface>>
  >;
}) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <GameBoardContainer>
        {Object.values(boardData).map((tileData) => {
          const pieceData = tileData.occupantId
            ? armyData[tileData.occupantId]
            : undefined;
          return (
            <BoardTile
              tileData={tileData}
              pieceData={pieceData}
              key={tileData.id}
              setGameData={setBoardData}
              setArmyData={setArmyData}
            />
          );
        })}
      </GameBoardContainer>
    </DndProvider>
  );
};

const GameBoardContainer = styled.div`
  height: 100%;
  padding: 6px;
  display: grid;
  aspect-ratio: 1;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
`;
