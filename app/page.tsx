import { Suspense } from "react";
import { PageWrapper } from "./pageStyles";
import { GameBoard } from "@/components/GameBoard";

// Server Component: initializes game data and passes to client
export default async function Page() {
  // Initialize game data on the server
  // todo: fetch game log from database
  return (
    <PageWrapper>
      {/* <h1>Welcome to Imperious</h1> */}
      <Suspense fallback={<div>Loading game board...</div>}>
        <GameBoard />
      </Suspense>
    </PageWrapper>
  );
}
