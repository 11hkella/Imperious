"use client";

import { Tile } from "@/interface";
import { useState, useMemo } from "react";
import styled from "styled-components";
import { GameBoard } from "./GameBoard";
import { TurnTracker } from "./TurnTracker";
import { useInitGame } from "./useInitGame";

export const GameTable = () => {
  const teams = ["red", "blue"];
  const { mapData: defaultGame, pieceData: defaultPieces } = useInitGame(teams);
  const [gameData, setGameData] = useState<Record<string, Tile>>(defaultGame);
  const [armyData, setArmyData] = useState(defaultPieces);
  const [teamTurn, setTeamTurn] = useState(teams[0]);
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

  const [pieceTurn, setPieceTurn] = useState<string | null>(turnQueue[0]);

  console.log({ gameData, armyData, teamTurn, pieceTurn });

  return (
    <GameTableContainer>
      <GameBoard
        boardData={gameData}
        armyData={armyData}
        setBoardData={setGameData}
        setArmyData={setArmyData}
      />
      <TurnTracker
        gameData={gameData}
        armyData={armyData}
        turnQueue={turnQueue}
        teamTurn={teamTurn}
        pieceTurn={pieceTurn}
        setTeamTurn={setTeamTurn}
        setPieceTurn={setPieceTurn}
      />
    </GameTableContainer>
  );
};

const GameTableContainer = styled.div`
  display: flex;
  justify-content: space-around;
  height: 100%;
  width: 100%;
`;
