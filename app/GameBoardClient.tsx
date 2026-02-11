"use client";

import { useState } from "react";
import { GameBoard } from "./pageStyles";
import { BoardTile } from "@/components/BoardTile";
import type { Tile } from "@/interface/tile";

interface GameBoardClientProps {
  initialGameData: Record<string, Tile>;
}

export default function GameBoardClient({ initialGameData }: GameBoardClientProps) {
  const [gameData, setGameData] = useState<Record<string, Tile>>(initialGameData);

  return (
    <GameBoard>
      {Object.values(gameData).map((tileData) => (
        <BoardTile tileData={tileData} key={tileData.id} setGameData={setGameData} />
      ))}
    </GameBoard>
  );
}
