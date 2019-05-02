import { combineReducers } from 'redux';
import {
  INIT_BOARD,
  UPDATE_BOARD
} from '../actions/types';

const initialBoard = () => {
  const COLUMNS = 10;

  let board = Array.apply(null, Array(COLUMNS)).map(() => Array(COLUMNS).fill(-1));

  let i, j;

  for (i = 1; i<= 8; i++) {
    for (j = 1; j<= 8; j++) {
      board[i][j] = 0;
    }
  }

  board[4][5] = board[5][4] = 1;
  board[4][4] = board[5][5] = 2;

  return board;
};

const playerReducer = (state = { isPlayer1: true }, action) => {
  switch (action.type) {
    case UPDATE_BOARD:
      const bool = action.payload.player ? false : true;
      return { ...state, isPlayer1: bool };
    default:
      return state;
  }
};

const countTurnOver = (board, player, p, q, d, e) => {
  let i;

  for (i = 1; board[p+i*d][q+i*e] === (3 - player); i++) {};

  if (board[p+i*d][q+i*e] === player) {
    return i - 1;
  } else {
    return 0;
  };
};

const updateBoard = ({ board, player, p, q }) => {
  const updatedBoard = [...board];
  let count, d, e, i;
  const playerNum = player ? 1 : 2;

  for (d = -1; d <= 1; d++) {
    for (e = -1; e <= 1; e++) {
      if (d === 0 && e === 0) { continue; }
      count = countTurnOver(updatedBoard, playerNum, p, q, d, e);
      for (i = 1; i <= count; i++) {
        updatedBoard[p+i*d][q+i*e] = playerNum;
      }
    }
  }
  updatedBoard[p][q] = playerNum;
  return updatedBoard;
};


const boardReducer = (board = [], action) => {
  switch (action.type) {
    case INIT_BOARD:
      return initialBoard();
    case UPDATE_BOARD:
      return updateBoard(action.payload);
    default:
      return initialBoard();
  }
}

export default combineReducers({
  player: playerReducer,
  board: boardReducer
});
