import {
  INIT_BOARD,
  UPDATE_BOARD 
} from './types';

export const flipPiece = params => {
  console.log(params);
  return {
    type: UPDATE_BOARD,
    payload: params
  };
};

