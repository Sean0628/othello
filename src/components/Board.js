import React, { Component } from 'react';
import { connect } from 'react-redux';
import bind from 'classnames';
import styles from '../styles/board.module.css';

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
        }
        
        const styleProps = bind(
          styles.piece,
          pieceColor
        );

        return (
          <div className={styles.grid} key={`${index1} ${index2}`} >
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
  return { board: state.board };
}

export default connect(mapStateToProps)(Board);
