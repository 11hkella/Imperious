import { GameData, Turrain } from "./interface";

export const initializeGameData = () => {
  const numRows = 12;
  const numCols = 12;

  const gameData: GameData[][] = [];

  for (let row = 0; row < numRows; row++) {
    const rowData: GameData[] = [];
    for (let col = 0; col < numCols; col++) {
      const id = `${row + 1}-${col + 1}`;
      rowData.push({
        id,
        turrain: configuredTurrain[id] || Turrain.FIELD,
        occupant: null,
      });
    }
    gameData.push(rowData);
  }

  return gameData;
};

const configuredTurrain: Record<string, Turrain> = {
  "1-1": Turrain.MOUNTAIN,
  "1-6": Turrain.MOUNTAIN,
  "1-7": Turrain.MOUNTAIN,
  "1-18": Turrain.MOUNTAIN,
  "1-19": Turrain.FOREST,
  "1-24": Turrain.MOUNTAIN,
  "4-8": Turrain.MOUNTAIN,
  "4-11": Turrain.FOREST,
  "4-14": Turrain.MOUNTAIN,
  "4-15": Turrain.MOUNTAIN,
  "4-19": Turrain.MOUNTAIN,
  "4-20": Turrain.MOUNTAIN,
  "5-1": Turrain.MOUNTAIN,
  "5-7": Turrain.FOREST,
  "5-11": Turrain.MOUNTAIN,
  "5-14": Turrain.MOUNTAIN,
  "5-17": Turrain.MOUNTAIN,
  "5-19": Turrain.MOUNTAIN,
  "6-6": Turrain.MOUNTAIN,
  "6-7": Turrain.MOUNTAIN,
  "6-8": Turrain.MOUNTAIN,
  "6-9": Turrain.MOUNTAIN,
  "6-18": Turrain.MOUNTAIN,
  "6-19": Turrain.FOREST,
  "7-7": Turrain.MOUNTAIN,
  "7-18": Turrain.MOUNTAIN,
  "7-19": Turrain.MOUNTAIN,
  "7-23": Turrain.MOUNTAIN,
  "7-24": Turrain.MOUNTAIN,
  "8-5": Turrain.FOREST,
  "8-6": Turrain.MOUNTAIN,
  "8-7": Turrain.MOUNTAIN,
  "8-24": Turrain.FOREST,
  "9-19": Turrain.MOUNTAIN,
  "10-4": Turrain.MOUNTAIN,
  "10-19": Turrain.MOUNTAIN,
  "10-20": Turrain.FOREST,
  "11-4": Turrain.MOUNTAIN,
  "11-5": Turrain.MOUNTAIN,
  "11-6": Turrain.FOREST,
  "11-9": Turrain.MOUNTAIN,
  "11-10": Turrain.FOREST,
  "11-14": Turrain.MOUNTAIN,
  "14-8": Turrain.FOREST,
  "14-9": Turrain.MOUNTAIN,
  "14-10": Turrain.MOUNTAIN,
  "14-15": Turrain.MOUNTAIN,
  "14-19": Turrain.FOREST,
  "14-20": Turrain.MOUNTAIN,
  "14-23": Turrain.MOUNTAIN,
  "15-10": Turrain.MOUNTAIN,
  "15-11": Turrain.MOUNTAIN,
  "15-15": Turrain.MOUNTAIN,
  "15-18": Turrain.MOUNTAIN,
  "16-17": Turrain.MOUNTAIN,
  "16-18": Turrain.MOUNTAIN,
  "17-4": Turrain.MOUNTAIN,
  "17-5": Turrain.MOUNTAIN,
  "17-8": Turrain.MOUNTAIN,
  "17-16": Turrain.MOUNTAIN,
  "17-17": Turrain.MOUNTAIN,
  "18-5": Turrain.MOUNTAIN,
  "18-16": Turrain.MOUNTAIN,
  "18-21": Turrain.MOUNTAIN,
  "19-1": Turrain.MOUNTAIN,
  "19-3": Turrain.FOREST,
  "19-4": Turrain.MOUNTAIN,
  "19-6": Turrain.MOUNTAIN,
  "19-7": Turrain.MOUNTAIN,
  "19-8": Turrain.MOUNTAIN,
  "19-17": Turrain.MOUNTAIN,
  "19-18": Turrain.FOREST,
  "19-21": Turrain.FOREST,
  "20-1": Turrain.MOUNTAIN,
  "20-4": Turrain.MOUNTAIN,
  "20-10": Turrain.FOREST,
  "20-14": Turrain.MOUNTAIN,
  "20-18": Turrain.MOUNTAIN,
  "21-9": Turrain.FOREST,
  "21-14": Turrain.MOUNTAIN,
  "21-24": Turrain.FOREST,
  "23-10": Turrain.MOUNTAIN,
  "23-11": Turrain.MOUNTAIN,
  "24-1": Turrain.MOUNTAIN,
  "24-14": Turrain.MOUNTAIN,
  "24-15": Turrain.MOUNTAIN,
  "24-24": Turrain.MOUNTAIN,
};
