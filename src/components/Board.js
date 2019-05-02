import React, { Component } from 'react';
import { connect } from 'react-redux';
import bind from 'classnames';
import styles from '../styles/board.module.css';
import { flipPiece } from '../actions';

class Board extends Component {
  countTurnOver = (board, player, p, q, d, e) => {
    let i;

    for (i = 1; board[p+i*d][q+i*e] === (3 - player); i++) {};

    if (board[p+i*d][q+i*e] === player) {
      return i - 1;
    } else {
      return 0;
    };
  };

  isValidMove = ({ board, player, p, q }) => {
    const playerNum = player ? 1 : 2;
    if (p < 1 || p > 8 || q < 1 || q > 8) return 0;
    if (this.countTurnOver(board, playerNum, p, q, -1,  0)) return 1;
    if (this.countTurnOver(board, playerNum, p, q,  1,  0)) return 1;
    if (this.countTurnOver(board, playerNum, p, q,  0, -1)) return 1;
    if (this.countTurnOver(board, playerNum, p, q,  0,  1)) return 1;
    if (this.countTurnOver(board, playerNum, p, q, -1, -1)) return 1;
    if (this.countTurnOver(board, playerNum, p, q, -1,  1)) return 1;
    if (this.countTurnOver(board, playerNum, p, q,  1, -1)) return 1;
    if (this.countTurnOver(board, playerNum, p, q,  1,  1)) return 1;
    return 0;
  };

  displayIndex = (grid, index1, index2) => {
    if (grid === -1) {
      if (index1 === 0) {
        return index2;
      } else if (index2 === 0) {
        return index1;
      }
    }
  }

  renderGrids() {
    return this.props.board.map((row, index1) => {
      return row.map((grid, index2) => {

        let pieceColor;
        switch (grid) {
          case 1:
            pieceColor = styles.white;
            break;
          case 2:
            pieceColor = styles.black;
            break;
          default:
            pieceColor = null;
        };

        let gridColor;
        if (grid === -1) {
          gridColor = styles.edge;
        } else {
          gridColor = null;
        }

        const params = {
          board: this.props.board,
          player: this.props.player,
          p: index1,
          q: index2
        }

        const onClickHangling = () => {
          if (grid === 0) {
            if (this.isValidMove(params) === 1) {
              return this.props.flipPiece(params);
            } else {
              return console.log('this is not');
            }
          } else {
            return false;
          }
        }

        const pieceStyleProps = bind(
          styles.piece,
          pieceColor
        );

        const gridStyleProps = bind(
          styles.grid,
          gridColor
        );

        return (
          <div
            onClick={onClickHangling}
            className={gridStyleProps}
            key={`[${index1}][${index2}]`}
          >
            <div className={pieceStyleProps}>
              {this.displayIndex(grid, index1, index2)}
            </div>
          </div>
        )
      });
    });
  }

  render() {
    return (
      <div className={styles.board}>
        {this.renderGrids()}
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    board: state.board,
    player: state.player.isPlayer1
  };
}

export default connect(mapStateToProps, {
  flipPiece,
})(Board);
