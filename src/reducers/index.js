import { combineReducers } from 'redux';

const boardReducer = () => {
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

export default combineReducers({
  board: boardReducer
});
