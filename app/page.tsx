import { Suspense } from "react";
import { PageWrapper } from "./pageStyles";
import { GameTable } from "@/components/GameTable";

// Server Component: initializes game data and passes to client
export default async function Page() {
  // Initialize game data on the server
  // todo: fetch game log from database
  return (
    <PageWrapper>
      {/* <h1>Welcome to Imperious</h1> */}
      <Suspense fallback={<div>Loading game board...</div>}>
        <GameTable />
      </Suspense>
    </PageWrapper>
  );
}
