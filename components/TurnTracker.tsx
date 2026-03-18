"use client";

import { PieceInterface, Tile } from "@/interfaces";
import styled from "styled-components";

export const TurnTracker = ({
  gameData,
  armyData,
  turnQueue,
  teamTurn,
  pieceTurn,
  setTeamTurn,
  setPieceTurn,
}: {
  gameData: Record<string, Tile>;
  armyData: Record<string, PieceInterface>;
  turnQueue: string[];
  teamTurn: string;
  pieceTurn: string | null;
  setTeamTurn: React.Dispatch<React.SetStateAction<string>>;
  setPieceTurn: React.Dispatch<React.SetStateAction<string | null>>;
}) => {
  return (
    <div>
      <h2>{`${teamTurn}'s Turn List`}</h2>
      <LineupContainer>
        {turnQueue.map((pieceId) => {
          const piece = armyData[pieceId];
          if (!piece) return null;
          return (
            <UnitIndicator
              key={pieceId}
              piece={piece}
              $isActive={pieceId === pieceTurn}
              onClick={() => setPieceTurn(pieceId)}
            >
              {"placehoder for piece icon"}
            </UnitIndicator>
          );
        })}
        <MoveConfirmationContainer>
          <button
            onClick={() => {
              setPieceTurn(null);
              setTeamTurn((prev) => (prev === "red" ? "blue" : "red"));
            }}
            disabled={!pieceTurn}
          >
            Confirm
          </button>
          <button
            onClick={() => {
              setPieceTurn(null);
              setTeamTurn((prev) => (prev === "red" ? "blue" : "red"));
            }}
            disabled={!pieceTurn}
          >
            Cancel
          </button>
        </MoveConfirmationContainer>
      </LineupContainer>
    </div>
  );
};

const LineupContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const UnitIndicator = styled.div<{ piece: PieceInterface; $isActive: boolean }>`
  padding: 8px;
  border: 2px solid ${({ piece }) => (piece.hasMoved ? "grey" : "black")};
  background-color: ${({ $isActive }) => ($isActive ? "lightgray" : "white")};
  cursor: pointer;
`;

const MoveConfirmationContainer = styled.div`
  margin-top: 16px;
  padding: 8px;
`;
