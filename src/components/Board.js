import React, { Component } from 'react';
import { connect } from 'react-redux';
import bind from 'classnames';
import styles from '../styles/board.module.css';
import { flipPiece } from '../actions';

class Board extends Component {
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
            return this.props.flipPiece(params);
          } else {
            return false;
          }
        }

        const displayIndex = () => {
          if (grid === -1) {
            if (index1 === 0) {
              return index2;
            } else if (index2 === 0) {
              return index1;
            }
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
              {displayIndex()}
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
