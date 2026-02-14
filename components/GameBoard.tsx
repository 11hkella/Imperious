"use client";

import { useMemo, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { BoardTile } from "@/components/BoardTile";
import type { Tile } from "@/interface/tile";
import styled from "styled-components";
import { useInitGame } from "./useInitGame";

export const GameBoard = () => {
  const teams = ["red", "blue"];
  const { mapData: defaultGame, pieceData: defaultPieces } = useInitGame(teams);
  const [gameData, setGameData] = useState<Record<string, Tile>>(defaultGame);
  const [armyData, setArmyData] = useState(defaultPieces);
  const [teamTurn, setTeamTurn] = useState(teams[0]);

  console.log({ gameData, armyData });

  const turnQueue = useMemo(() => {
    const pieceLineup: string[] = [];
    Object.values(gameData).forEach((tile) => {
      if (tile.occupantId) {
        pieceLineup.push(tile.occupantId);
      }
    });
    return pieceLineup.filter(
      (pieceId) => armyData[pieceId]?.team === teamTurn,
    );
    // override for generating turn queue
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [teamTurn]);

  return (
    <DndProvider backend={HTML5Backend}>
      <GameBoardContainer>
        {Object.values(gameData).map((tileData) => {
          const pieceData = tileData.occupantId
            ? armyData[tileData.occupantId]
            : undefined;
          return (
            <BoardTile
              tileData={tileData}
              pieceData={pieceData}
              key={tileData.id}
              setGameData={setGameData}
            />
          );
        })}
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
