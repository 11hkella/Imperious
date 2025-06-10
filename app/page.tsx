"use client";

import { useState } from "react";
import { GameData } from "./interface";
import { GameBoard, PageWrapper } from "./pageStyles";
import { initialize } from "next/dist/server/lib/render-server";
import { initializeGameData } from "./initializeGameData";
import { GameTile } from "@/components/gameTile";

export default function Page() {
  // todo: create user login and authentication flow

  // index row,col
  const [gameData, setGetData] = useState<GameData[][]>(initializeGameData());

  console.log("gameData", gameData);
  return (
    <PageWrapper>
      {/* <h1>Welcome to Imperious</h1> */}

      <GameBoard>
        {gameData.map((row, rowIndex) =>
          row.map((tileData, colIndex) => (
            <GameTile tileData={tileData} key={`${rowIndex}-${colIndex}`} />
          ))
        )}
      </GameBoard>
    </PageWrapper>
  );
}
