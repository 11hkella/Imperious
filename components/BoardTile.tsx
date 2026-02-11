import { type Tile, Turrain } from "@/interface/tile";
import { type Dispatch, type SetStateAction, useRef } from "react";
import styled from "styled-components";
import { PieceImage } from "./Piece";
import { fieldColor, mountainColor, forestColor } from "./styles/colors";

export interface BoardTileProps {
  tileData: Tile;
  setGameData: Dispatch<SetStateAction<Record<string, Tile>>>;
}

export const BoardTile = ({ tileData, setGameData }: BoardTileProps) => {
  // TODO: tile should set its own state for performance optimization
  const { id, turrain, occupant } = tileData;

  const tileRef = useRef<HTMLDivElement>(null);

  const tileSize = {
    height: `${tileRef.current?.offsetHeight ?? 0}px`,
    width: `${tileRef.current?.offsetWidth ?? 0}px`,
  };

  return (
    <GameTileContainer ref={tileRef} turrain={turrain}>
      <PieceImage piece={occupant} tileSize={tileSize} />
      <TileLabel>{id}</TileLabel>
    </GameTileContainer>
  );
};

const GameTileContainer = styled.div<{ turrain: Turrain }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--foreground);
  background-color: ${({ turrain }) => {
    switch (turrain) {
      case Turrain.FIELD:
        return fieldColor;
      case Turrain.MOUNTAIN:
        return mountainColor;
      case Turrain.FOREST:
        return forestColor;
      default:
        return fieldColor;
    }
  }};
`;

const TileLabel = styled.p`
  color: grey;
  position: absolute;
  cursor: default;
`;
