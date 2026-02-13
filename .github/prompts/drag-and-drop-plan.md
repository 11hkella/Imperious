## Plan: Drag-and-Drop with MovementConfig Validation

Enable drag-and-drop for pieces, enforcing movement rules from `movementConfig`. Movement range and direction are validated per piece type, using the config in helpers/MovementConfig.ts. Only valid moves (per range, direction, and terrain) are allowed.

**Steps**

1. Integrate React DnD
   - Add React DnD to the project.
   - Make Piece draggable (components/Piece.tsx).
   - Make BoardTile droppable (components/BoardTile.tsx).

2. Movement Validation
   - On drop, get the piece's type and retrieve its config from movementConfig.
   - Calculate the distance and direction between source and target tiles.
   - Validate:
     - Move is within moveRange.
     - Direction matches allowed (LINEAR, DIAGONAL, etc.).
     - Terrain is traversable (e.g., check canTraverseForests).
   - If direction is not specified, default to linear movement.

3. Update Board State
   - If move is valid, update board state in app/GameBoardClient.tsx.
   - Replace existing piece if tile is occupied.

4. Visual Feedback
   - Highlight valid target tiles during drag.
   - Show invalid moves as blocked (no drop allowed).

5. Edge Cases
   - Prevent dropping on invalid tiles (out of range, wrong direction, blocked terrain).
   - Handle replacing pieces on occupied tiles.

**Verification**

- Drag each piece and confirm only valid moves are allowed.
- Highlight valid tiles during drag.
- Test with different piece types and terrain.

**Decisions**

- Movement rules strictly follow movementConfig.
- React DnD is used for drag-and-drop.
- Replacing pieces on occupied tiles is allowed.
