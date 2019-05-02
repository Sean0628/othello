import {
  INIT_BOARD,
  UPDATE_BOARD,
  TOGGLE_PLAYER
} from './types';

export const initBoard = () => {
  return {
    type: INIT_BOARD
  };
};

export const flipPiece = params => {
  return {
    type: UPDATE_BOARD,
    payload: params
  };
};

export const switchPlayer = isPlayer1 => {
  return {
    type: TOGGLE_PLAYER,
    payload: { player: isPlayer1 }
  };
};
