"use client";

import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { GameBoard } from "./pageStyles";
import { BoardTile } from "@/components/BoardTile";
import type { Tile } from "@/interface/tile";

interface GameBoardClientProps {
  initialGameData: Record<string, Tile>;
}

const GameBoardClient = ({ initialGameData }: GameBoardClientProps) => {
  const [gameData, setGameData] =
    useState<Record<string, Tile>>(initialGameData);

  return (
    <DndProvider backend={HTML5Backend}>
      <GameBoard>
        {Object.values(gameData).map((tileData) => (
          <BoardTile
            tileData={tileData}
            key={tileData.id}
            setGameData={setGameData}
          />
        ))}
      </GameBoard>
    </DndProvider>
  );
};

export default GameBoardClient;
