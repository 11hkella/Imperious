# Drag-and-Drop Implementation Plan (react-dnd & styled-components)

This plan details the step-by-step code changes required to implement drag-and-drop for game pieces, with movement validation using `MovementConfig`, and styling via styled-components.

---

## Step-by-Step Plan

### 1. Install Dependencies

- Install `react-dnd`, `react-dnd-html5-backend`, and `styled-components`:
  ```sh
  npm install react-dnd react-dnd-html5-backend styled-components
  ```

### 2. Set Up DnD Context

- In `app/GameBoardClient.tsx`, wrap the board in a `DndProvider` using `HTML5Backend`.

### 3. Make Piece Draggable

- In `components/Piece.tsx`:
  - Add `"use client"` at the top.
  - Use the `useDrag` hook from `react-dnd`.
  - Style the piece using styled-components for drag state.

### 4. Make BoardTile Droppable

- In `components/BoardTile.tsx`:
  - Add `"use client"` at the top.
  - Use the `useDrop` hook from `react-dnd`.
  - Style the tile using styled-components for drop/hover/valid/invalid states.

### 5. Movement Validation

- On drop, in the drop handler (BoardTile), get the piece type and source/target positions.
- Use `helpers/MovementConfig.ts` to:
  - Retrieve the piece's movement config.
  - Calculate distance and direction.
  - Validate move range, direction, and terrain.
- Only allow drop if move is valid.

### 6. Update Board State

- In `app/GameBoardClient.tsx`, update the board state if the move is valid.
- Replace existing piece if the target tile is occupied.

### 7. Visual Feedback

- Highlight valid target tiles during drag (BoardTile).
- Show invalid moves as blocked (no drop allowed).
- Use styled-components for all visual feedback.

### 8. Edge Cases

- Prevent dropping on invalid tiles (out of range, wrong direction, blocked terrain).
- Handle replacing pieces on occupied tiles.

### 9. TypeScript Types

- Update types in `interface/piece.ts` and `interface/tile.ts` for drag-and-drop payloads.

### 10. Accessibility

- Add ARIA attributes and keyboard support as needed.

---

## File-by-File Changes

- `app/GameBoardClient.tsx`:
  - Wrap board in `DndProvider`.
  - Manage board state and handle piece movement.

- `components/Piece.tsx`:
  - Implement `useDrag`.
  - Use styled-components for drag state.

- `components/BoardTile.tsx`:
  - Implement `useDrop`.
  - Use styled-components for drop/hover/valid/invalid states.
  - Call movement validation logic on drop.

- `helpers/MovementConfig.ts`:
  - Ensure movement validation logic is exported and reusable.

- `interface/piece.ts`, `interface/tile.ts`:
  - Update types for drag-and-drop payloads.

---

## Verification

- Drag each piece and confirm only valid moves are allowed.
- Highlight valid tiles during drag.
- Test with different piece types and terrain.
