import { Suspense } from "react";
import { PageWrapper } from "./pageStyles";
import { initializeGameData } from "../helpers/initializeGameData";
import type { Tile } from "@/interface/tile";
import GameBoardClient from "./GameBoardClient";

// Server Component: initializes game data and passes to client
export default async function Page() {
  // Initialize game data on the server
  const initialGameData: Record<string, Tile> = initializeGameData();

  return (
    <PageWrapper>
      {/* <h1>Welcome to Imperious</h1> */}
      <Suspense fallback={<div>Loading game board...</div>}>
        <GameBoardClient initialGameData={initialGameData} />
      </Suspense>
    </PageWrapper>
  );
}
