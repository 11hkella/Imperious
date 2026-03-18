import { configuredTurrain, movementConfig } from "@/configs";
import { PieceType, Tile, Turrain, Army, Board } from "@/interfaces";
import { useMemo } from "react";

export const useInitGame = (teams: string[]) => {
  const { armyData, mapData } = useMemo(() => {
    // Todo: create placement stage for player setup
    const intialPlacementMap: PlacementMap[] = [
      {
        [`${PieceType.ARCHER}-1-${teams[0]}`]: "1-1",
        [`${PieceType.AXE}-1-${teams[0]}`]: "1-2",
        [`${PieceType.CAVALRY}-1-${teams[0]}`]: "1-3",
        [`${PieceType.KING}-1-${teams[0]}`]: "1-4",
        [`${PieceType.NOBLEAXE}-1-${teams[0]}`]: "1-5",
        [`${PieceType.NOBLESWORD}-1-${teams[0]}`]: "1-6",
        [`${PieceType.PIKE}-1-${teams[0]}`]: "1-7",
        [`${PieceType.SQUIRE}-1-${teams[0]}`]: "1-8",
      },
      {
        [`${PieceType.ARCHER}-1-${teams[1]}`]: "12-1",
        [`${PieceType.AXE}-1-${teams[1]}`]: "12-2",
        [`${PieceType.CAVALRY}-1-${teams[1]}`]: "12-3",
        [`${PieceType.KING}-1-${teams[1]}`]: "12-4",
        [`${PieceType.NOBLEAXE}-1-${teams[1]}`]: "12-5",
        [`${PieceType.NOBLESWORD}-1-${teams[1]}`]: "12-6",
        [`${PieceType.PIKE}-1-${teams[1]}`]: "12-7",
        [`${PieceType.SQUIRE}-1-${teams[1]}`]: "12-8",
      },
    ];

    const armies = teams.map((teamName) => initializeArmyData(teamName));
    const mapData = initializeMapData();

    const armyData = armies.reduce(
      (acc, army, index) => ({
        ...acc,
        ...placeArmy(teams[index], intialPlacementMap[index], army),
      }),
      {},
    );

    return { armyData, mapData };
  }, [teams]);

  return { pieceData: armyData, mapData };
};

const initializeMapData = (): Board => {
  const numRows = 12;
  const numCols = 12;
  const mapData: Record<string, Tile> = {};
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      const id = `${row + 1}-${col + 1}`;
      mapData[id] = {
        id,
        turrain: configuredTurrain[id] || Turrain.FIELD,
        position: `${row}-${col}`,
      };
    }
  }
  return mapData;
};

const initializeArmyData = (teamName: string) => {
  const armyComposition = {
    [PieceType.ARCHER]: 1,
    [PieceType.AXE]: 2,
    [PieceType.CAVALRY]: 2,
    [PieceType.KING]: 1,
    [PieceType.NOBLEAXE]: 1,
    [PieceType.NOBLESWORD]: 1,
    [PieceType.PIKE]: 4,
    [PieceType.SQUIRE]: 1,
  };

  const army = {} as Army;

  Object.entries(armyComposition).forEach(([pieceType, pieceCount]) => {
    for (let i = 1; i <= pieceCount; i++) {
      const movementInfo = movementConfig[pieceType as PieceType];
      army[`${pieceType}-${i}-${teamName}`] = {
        type: pieceType as PieceType,
        unitNumber: i,
        team: teamName,
        ...movementInfo,
        position: {},
      };
    }
  });

  return army;
};

const placeArmy = (
  teamName: string,
  placementMap: PlacementMap,
  army: Army,
) => {
  Object.entries(placementMap).forEach(([pieceId, tileId]) => {
    const [pieceType, unitNumber] = pieceId.split("-");
    const unitKey = `${pieceType}-${unitNumber}-${teamName}`;

    if (army[unitKey]) army[unitKey].position.current = tileId;
  });
  return army;
};

type PlacementMap = Record<string, string>;
