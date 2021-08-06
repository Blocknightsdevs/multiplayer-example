import { INVALID_MOVE } from "boardgame.io/core";

// Return true if `cells` is in a winning configuration.
function IsVictory(cells) {
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

  const isRowComplete = (row) => {
    const symbols = row.map((i) => cells[i]);
    /*
        Array.prototype.every()
        Determina si todos los elementos en el array satisfacen una condición.
    */
    return symbols.every((i) => i !== null && i === symbols[0]); //returns bool[]
  };
  /*El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.*/
  /*Array.prototype.some()
    El método some() comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.*/
  return positions.map(isRowComplete).some((i) => i === true);
}

/*El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.*/
// Return true if all `cells` are occupied.
function IsDraw(cells) {
  return cells.filter((c) => c === null).length === 0;
}

export const TicTacToe = {
  setup: () => ({ cells: Array(9).fill(null) }),

  turn: {
    moveLimit: 1,
  },

  moves: {
    clickCell: (G, ctx, id) => {
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
};
