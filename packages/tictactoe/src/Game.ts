import { Game } from "boardgame.io";
import { INVALID_MOVE } from "boardgame.io/core";

type TicTacToeBoardState = string[];

export interface TicTacToeState {
  cells: TicTacToeBoardState;
}

export const TicTacToe: Game<TicTacToeState> = {
  setup: () => ({ cells: Array(9).fill(null) }),

  turn: {
    minMoves: 1,
    maxMoves: 1,
  },

  moves: {
    clickCell: (G, ctx, id: number) => {
      if (G.cells[id] !== null) {
        return INVALID_MOVE;
      }
      G.cells[id] = ctx.currentPlayer;
    },
  },

  endIf: (G, ctx) => {
    if (IsVictory(G.cells)) {
      return { winner: ctx.currentPlayer };
    }
    if (IsDraw(G.cells)) {
      return { draw: true };
    }
  },

  ai: {
    enumerate: (G, ctx) =>
      G.cells
        .map((cell, i) => ({ move: "clickCell", args: [i] }))
        .filter((move) => G.cells[move.args[0]] === null),
  },
};

// Return true if `cells` is in a winning configuration.
function IsVictory(cells: TicTacToeBoardState) {
  const positions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const isRowComplete = (row: number[]) => {
    const symbols = row.map((i) => cells[i]);
    return symbols.every((i) => i !== null && i === symbols[0]);
  };

  return positions.map(isRowComplete).some((i) => i === true);
}

// Return true if all `cells` are occupied.
function IsDraw(cells: TicTacToeBoardState) {
  return cells.filter((c) => c === null).length === 0;
}
