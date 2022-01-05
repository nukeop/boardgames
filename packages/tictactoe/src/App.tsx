import { Client } from 'boardgame.io/react';
import { SocketIO } from 'boardgame.io/multiplayer';

import { TicTacToe } from './Game';
import { TicTacToeBoard } from './components/TicTacToeBoard';
import './App.scss';

const TicTacToeClient = Client({
  game: TicTacToe,
  board: TicTacToeBoard,
  multiplayer: SocketIO({ server: 'localhost:8000' }),
});

export default TicTacToeClient;