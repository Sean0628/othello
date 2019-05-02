import {
  INIT_BOARD,
  UPDATE_BOARD
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
