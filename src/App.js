
import React,{useState} from "react";
import { render } from "react-dom";
import { Client } from "boardgame.io/react";
import { SocketIO } from "boardgame.io/multiplayer";
import { TicTacToe } from "./Game";
import { TicTacToeBoard } from "./Board";

const TicTacToeClient = Client({
  game: TicTacToe,
  board: TicTacToeBoard,
  debug: false,
  multiplayer: SocketIO({ server: "localhost:8000" })
});

const App = () => {


    const [playerId, setPlayerId] = useState( null );


    if (playerId=== null) {
      return (
        <div>
          <p>Play as</p>
          <button onClick={() => setPlayerId( "0" )}>
            Player 0
          </button>
          <button onClick={() => setPlayerId( "1" )}>
            Player 1
          </button>
        </div>
      );
    }
    return (
      <div>
        <TicTacToeClient playerID={playerId} />
      </div>
    );
}

export default App;