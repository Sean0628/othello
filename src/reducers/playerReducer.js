import {
  UPDATE_BOARD,
  TOGGLE_PLAYER
} from '../actions/types';

export default (state = { isPlayer1: true }, action) => {

  switch (action.type) {
    case UPDATE_BOARD:
    case TOGGLE_PLAYER:
      const bool = action.payload.player ? false : true;
      return { ...state, isPlayer1: bool };
    default:
      return state;
  }
};

