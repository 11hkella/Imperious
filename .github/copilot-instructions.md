#

# File Structure Overview

#

The project is organized as follows:

- `app/` — Main Next.js App Router directory. Contains:
  - `GameBoardClient.tsx` — Main game board client component (board state, rendering, DnD logic)
  - `page.tsx` — App entry point
  - `layout.tsx` — Root layout
  - `globals.css`, `pageStyles.ts` — Global and page-level styles
- `components/` — UI components:
  - `BoardTile.tsx` — Board tile (DnD drop logic, tile rendering)
  - `Piece.tsx` — Piece rendering
  - `styles/colors.ts` — Color/style constants
  - `svg/` — SVG icons for pieces and terrain
- `helpers/` — Game logic and data initialization:
  - `addPieceToTile.ts` — Utility for placing pieces
  - `initalizeBoardData.ts` — Board grid/terrain setup
  - `initializeArmyData.ts` — Army composition
  - `initializeGameData.ts` — Game setup (board + armies)
  - `MovementConfig.ts` — Move validation
  - `terrainConfig.ts` — Terrain configuration
- `interface/` — TypeScript interfaces and enums:
  - `index.ts` — Barrel export
  - `piece.ts`, `tile.ts`, `movement.ts` — Entity definitions
- `public/` — Static assets
- `package.json`, `tsconfig.json`, `next.config.ts`, etc. — Project config

Refer to this section for a high-level understanding of where to find and place code.

# Copilot Instructions for Imperious

## Project Overview

- **Imperious** is a turn-based strategy game built with Next.js (App Router) and React, using TypeScript throughout.
- The main game board is rendered in `app/GameBoardClient.tsx`, which manages board state and renders `BoardTile` components for each tile.
- Drag-and-drop is implemented using `react-dnd` for moving pieces between tiles.
- Board and army data are initialized via helpers in `helpers/` (see `initializeBoardData.ts`, `initializeArmyData.ts`, `initializeGameData.ts`).
- Game entities (tiles, pieces, movement) are defined in `interface/`.

## Key Architectural Patterns

- **Board State:**
  - The board is a 12x12 grid, represented as a `Record<string, Tile>` (see `helpers/initalizeBoardData.ts`).
  - Each tile has an `id`, `turrain` (terrain), and optional `occupant` (piece).
- **Drag-and-Drop:**
  - `BoardTile` uses `useDrop` from `react-dnd` to handle piece movement, validating moves with `isValidMove` from `helpers/MovementConfig.ts`.
  - Dropping a piece updates the board state via `setGameData`.
- **Piece/Army Initialization:**
  - Army composition is defined in `helpers/initializeArmyData.ts`.
  - Game setup (including piece placement) is handled in `helpers/initializeGameData.ts`.
- **Styling:**
  - Uses `styled-components` for component-level styles.
  - Color and style constants are in `components/styles/colors.ts`.
- **SVG Icons:**
  - Piece and terrain icons are in `components/svg/`.

## Developer Workflows

- **Development:**
  - Start dev server: `pnpm run dev` (or `npm run dev`, `yarn dev`, `bun dev`).
  - Main entry: `app/page.tsx` and `app/GameBoardClient.tsx`.
- **Editing:**
  - Hot reload is enabled; edit files in `app/` or `components/` to see changes live.
- **Testing:**
  - No explicit test setup found; add tests in a `__tests__/` or similar directory if needed.

## Project Conventions

- **TypeScript:**
  - All components and helpers are typed; interfaces are in `interface/`.
- **Imports:**
  - Uses `@/` alias for root imports (configured in `tsconfig.json`).
- **Component Structure:**
  - UI components in `components/`, with subfolders for styles and SVGs.
- **Helpers:**
  - Game logic and data initialization in `helpers/`.

## Integration Points

- **External:**
  - Uses `react-dnd` for drag-and-drop, `styled-components` for styling.
- **No backend/API integration** is present in the current codebase.

## Examples

- See `app/GameBoardClient.tsx` for board rendering and state management.
- See `components/BoardTile.tsx` for drag-and-drop logic and tile rendering.
- See `helpers/initializeGameData.ts` for game setup logic.

---

**Update this file if you add new workflows, conventions, or major features.**

---

**Code Editing Convention:**

- When modifying files, always automatically delete any unused imports as part of the edit.
