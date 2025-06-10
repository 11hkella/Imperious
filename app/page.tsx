import { GameBoard, PageWrapper } from "./pageStyles";

export default function Page() {
  // todo: create user login and authentication flow

  enum Turrain {
    FIELD = "field",
    MOUNTAIN = "mountain",
    FOREST = "forest",
  }

  enum PieceType {
    PIKE = "pike",
    AXE = "axe",
    KING = "king",
    NOBLE = "noble",
    ARCHER = "archer",
    CAVALRY = "cavalry",
    SQUIRE = "squire",
    // MONSTER = "monster", // for future use?
    // NPC = "npc",
  }

  interface Occupant {
    id: string;
    type: PieceType;
    team: number;
  }

  interface GameData {
    id: string;
    turrain: Turrain;
    occupant: Occupant | null;
  }

  // index row,col
  const gameData: GameData[][] = [
    [
      {
        id: "1-1",
        turrain: Turrain.FIELD,
        occupant: null,
      },
      {
        id: "1-1",
        turrain: Turrain.FIELD,
        occupant: null,
      },
      {
        id: "1-1",
        turrain: Turrain.FIELD,
        occupant: null,
      },
      {
        id: "1-1",
        turrain: Turrain.FIELD,
        occupant: null,
      },
      {
        id: "1-1",
        turrain: Turrain.FIELD,
        occupant: null,
      },
      {
        id: "1-1",
        turrain: Turrain.FIELD,
        occupant: null,
      },
      {
        id: "1-1",
        turrain: Turrain.FIELD,
        occupant: null,
      },
      {
        id: "1-1",
        turrain: Turrain.FIELD,
        occupant: null,
      },
      {
        id: "1-1",
        turrain: Turrain.FIELD,
        occupant: null,
      },
      {
        id: "1-1",
        turrain: Turrain.FIELD,
        occupant: null,
      },
      {
        id: "1-1",
        turrain: Turrain.FIELD,
        occupant: null,
      },
      {
        id: "1-1",
        turrain: Turrain.FIELD,
        occupant: null,
      },
    ],
  ];

  return (
    <PageWrapper>
      <h1>Welcome to Imperious</h1>

      <GameBoard></GameBoard>
    </PageWrapper>
  );
}
