"use client";

import { useState } from "react";
import { Tile } from "../interface";
import { GameBoard, PageWrapper } from "./pageStyles";
import { initializeGameData } from "../helpers/initializeGameData";
import { BoardTile } from "@/components/BoardTile";

export default function Page() {
  // todo: create user login and authentication flow

  // index row,col
  const [gameData, setGetData] = useState(initializeGameData());

  console.log("gameData at start of game:", gameData);
  return (
    <PageWrapper>
      {/* <h1>Welcome to Imperious</h1> */}

      <GameBoard>
        {Object.values(gameData).map((tileData) => (
          <BoardTile tileData={tileData} key={tileData.id} />
        ))}
      </GameBoard>
    </PageWrapper>
  );
}
