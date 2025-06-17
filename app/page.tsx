"use client";

import { useState } from "react";
import { Tile } from "../interface";
import { GameBoard, PageWrapper } from "./pageStyles";
import { initializeGameData } from "../helpers/initializeGameData";
import { BoardTile } from "@/components/BoardTile";

export default function Page() {
  // todo: create user login and authentication flow

  // index row,col
  const [gameData, setGetData] = useState<Tile[][]>(initializeGameData());

  return (
    <PageWrapper>
      {/* <h1>Welcome to Imperious</h1> */}

      <GameBoard>
        {gameData.map((row, rowIndex) =>
          row.map((tileData, colIndex) => (
            <BoardTile tileData={tileData} key={`${rowIndex}-${colIndex}`} />
          ))
        )}
      </GameBoard>
    </PageWrapper>
  );
}
