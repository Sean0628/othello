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

        const styleProps = bind(
          styles.piece,
          pieceColor
        );

        const params = {
          board: this.props.board,
          player: this.props.player,
          p: index1,
          q: index2
        }

        return (
          <div
            onClick={() => this.props.flipPiece(params)}
            className={styles.grid}
            key={`[${index1}][${index2}]`}
          >
            <div className={styleProps}>
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
  flipPiece
})(Board);
