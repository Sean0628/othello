import React from 'react';
import { connect } from 'react-redux';
import bind from 'classnames';
import { useAlert } from 'react-alert';
import styles from '../styles/grid.module.css';
import { flipPiece } from '../actions';

const Grid = props  => {

  const flipPiece = params => {
    props.flipPiece(params);
  }

  const params = {
    board: props.board,
    player: props.player,
    p: props.index1,
    q: props.index2
  }

  const countTurnOver = (board, player, p, q, d, e) => {
    let i;

    for (i = 1; board[p+i*d][q+i*e] === (3 - player); i++) {};

    if (board[p+i*d][q+i*e] === player) {
      return i - 1;
    } else {
      return 0;
    };
  };

  const isValidMove = ({ board, player, p, q }) => {
    const playerNum = player ? 1 : 2;
    if (p < 1 || p > 8 || q < 1 || q > 8) return 0;
    if (countTurnOver(board, playerNum, p, q, -1,  0)) return 1;
    if (countTurnOver(board, playerNum, p, q,  1,  0)) return 1;
    if (countTurnOver(board, playerNum, p, q,  0, -1)) return 1;
    if (countTurnOver(board, playerNum, p, q,  0,  1)) return 1;
    if (countTurnOver(board, playerNum, p, q, -1, -1)) return 1;
    if (countTurnOver(board, playerNum, p, q, -1,  1)) return 1;
    if (countTurnOver(board, playerNum, p, q,  1, -1)) return 1;
    if (countTurnOver(board, playerNum, p, q,  1,  1)) return 1;
    return 0;
  };

  const alert = useAlert()

  const onClickHandling = () => {
    if (props.grid === 0) {
      if (isValidMove(params) === 1) {
        return flipPiece(params);
      } else {
        return alert.show('Oops!Cannot place your disk here!');
      }
    } else {
      return false;
    }
  }

  const displayIndex = () => {
    if (props.grid === -1) {
      if (props.index1 === 0) {
        return props.index2;
      } else if (props.index2 === 0) {
        return props.index1;
      }
    }
  }

  let gridColor;
  if (props.grid === -1) {
    gridColor = styles.edge;
  } else {
    gridColor = null;
  }

  const gridStyleProps = bind(
    styles.grid,
    gridColor
  );

  let pieceColor;
  switch (props.grid) {
    case 1:
      pieceColor = styles.white;
      break;
    case 2:
      pieceColor = styles.black;
      break;
    default:
      pieceColor = null;
  };

  const pieceStyleProps = bind(
    styles.piece,
    pieceColor
  );


  return (
    <div
      onClick={onClickHandling}
      className={gridStyleProps}
    >
      <div className={pieceStyleProps}>
        {displayIndex()}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    board: state.board,
    player: state.player.isPlayer1
  };
}

export default connect(mapStateToProps, 
  { flipPiece }
)(Grid);
