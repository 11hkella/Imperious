import { Tile } from "@/interface";
import { useRef } from "react";
import styled from "styled-components";

export const BoardTile = ({ tileData }: { tileData: Tile }) => {
  const { id, turrain, occupant } = tileData;

  const tileRef = useRef<HTMLDivElement>(null);

  const tileSize = {
    height: `${tileRef.current?.offsetHeight}px`,
    width: `${tileRef.current?.offsetWidth}px`
  }

  return (
    <GameTileContainer ref={tileRef}>
      {occupant && occupant.svgElement(tileSize)}
      <TileLabel>{id}</TileLabel>
    </GameTileContainer>
  );
};

const GameTileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--foreground);
`;

const TileLabel = styled.p`
  color: grey;
  position: absolute;
`