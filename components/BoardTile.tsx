import { Tile, Turrain } from "@/interface";
import { Dispatch, SetStateAction, useRef } from "react";
import styled from "styled-components";
import { fieldColor, mountainColor, forestColor } from "./styles/colors";

export const BoardTile = ({ tileData, setGameData }: { tileData: Tile, setGameData: Dispatch<SetStateAction<Record<string, Tile>>> }) => {
  // TODO: tile should set it's own state for performance optimization
  const { id, turrain, occupant } = tileData;

  const tileRef = useRef<HTMLDivElement>(null);

  const tileSize = {
    height: `${tileRef.current?.offsetHeight}px`,
    width: `${tileRef.current?.offsetWidth}px`
  }

  return (
    <GameTileContainer ref={tileRef} turrain={turrain}>
      {occupant && <PieceIconContainer onClick={() => { }}>
        {occupant.svgElement(tileSize)}
      </PieceIconContainer>
      }
      <TileLabel>{id}</TileLabel>
    </GameTileContainer>
  );
};

const GameTileContainer = styled.div<{ turrain: Turrain }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--foreground);
  background-color: ${({turrain}) => { 
    switch(turrain) {
      case Turrain.FIELD:
        return fieldColor;
      case Turrain.MOUNTAIN:
        return mountainColor;
      case Turrain.FOREST:
        return forestColor;
      default:
        return fieldColor;
    }
  }}
`;

const TileLabel = styled.p`
  color: grey;
  position: absolute;
  cursor: default;
`
const PieceIconContainer = styled.div`
  cursor: pointer;
  z-index: 5;
`;