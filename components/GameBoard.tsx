"use client";

import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { BoardTile } from "@/components/BoardTile";
import type { Tile } from "@/interface/tile";
import styled from "styled-components";
import { useInitGame } from "./useInitGame";

export const GameBoard = () => {
  const { mapData: defaultGame } = useInitGame();
  const [gameData, setGameData] = useState<Record<string, Tile>>(defaultGame);]

  return (
    <DndProvider backend={HTML5Backend}>
      <GameBoardContainer>
        {Object.values(gameData).map((tileData) => (
          <BoardTile
            tileData={tileData}
            key={tileData.id}
            setGameData={setGameData}
          />
        ))}
      </GameBoardContainer>
    </DndProvider>
  );
};

const GameBoardContainer = styled.div`
  height: 100%;
  display: grid;
  aspect-ratio: 1;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  padding: 6px;
`;
