import { PieceInterface, Tile, Turrain } from "@/interface";
import { useMemo } from "react";
import { PieceType } from "@/interface";
import { configuredTurrain } from "@/helpers/terrainConfig";
import { Board } from "@/interface/board";

export const useInitGame = () => {
  const { redArmy, blueArmy, mapData } = useMemo(() => {
    // Todo: create placement stage for player setup
    const placementMapRed: PlacementMap = {
      [`${PieceType.ARCHER}-1`]: "1-1",
      [`${PieceType.AXE}-1`]: "1-2",
      [`${PieceType.CAVALRY}-1`]: "1-3",
      [`${PieceType.KING}-1`]: "1-4",
      [`${PieceType.NOBLEAXE}-1`]: "1-5",
      [`${PieceType.NOBLESWORD}-1`]: "1-6",
      [`${PieceType.PIKE}-1`]: "1-7",
      [`${PieceType.SQUIRE}-1`]: "1-8",
    };
    const placementMapBlue: PlacementMap = {
      [`${PieceType.ARCHER}-1`]: "12-1",
      [`${PieceType.AXE}-1`]: "12-2",
      [`${PieceType.CAVALRY}-1`]: "12-3",
      [`${PieceType.KING}-1`]: "12-4",
      [`${PieceType.NOBLEAXE}-1`]: "12-5",
      [`${PieceType.NOBLESWORD}-1`]: "12-6",
      [`${PieceType.PIKE}-1`]: "12-7",
      [`${PieceType.SQUIRE}-1`]: "12-8",
    };

    const redArmy = initializeArmyData("Red");
    const blueArmy = initializeArmyData("Blue");
    const mapData = initializeMapData();
    placeArmy(redArmy, placementMapRed, mapData);
    placeArmy(blueArmy, placementMapBlue, mapData);

    return { redArmy, blueArmy, mapData };
  }, []);

  return { redArmy, blueArmy, mapData };
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
        position: { row, col },
      };
    }
  }
  return mapData;
};

const initializeArmyData = (teamName: string): PieceInterface[] => {
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

  const army = [] as PieceInterface[];

  Object.entries(armyComposition).forEach(([pieceType, pieceCount]) => {
    for (let i = 1; i <= pieceCount; i++) {
      army.push({
        type: pieceType as PieceType,
        unitNumber: i,
        team: teamName,
        hasMoved: false,
        isAlive: true,
      });
    }
  });
  return army;
};

const placeArmy = (
  army: PieceInterface[],
  placementMap: PlacementMap,
  board: Board,
) => {
  Object.entries(placementMap).forEach(([pieceId, tileId]) => {
    const [pieceType, unitNumber] = pieceId.split("-");
    const piece = army.find(
      (p) => p.type === pieceType && p.unitNumber === parseInt(unitNumber),
    );
    console.log({ pieceId, tileId, piece });
    if (board[tileId]) board[tileId].occupant = piece;
  });
};

type PlacementMap = Record<string, string>;
