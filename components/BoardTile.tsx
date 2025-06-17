import { Tile } from "@/interface";
import styled from "styled-components";

export const BoardTile = ({ tileData }: { tileData: Tile }) => {
  const { id, turrain, occupant } = tileData;

  return (
    <GameTileContainer>
      {occupant && <span className="occupant-info">{occupant.type}</span>}
    </GameTileContainer>
  );
};

const GameTileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--foreground);
`;
