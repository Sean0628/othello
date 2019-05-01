import React, { Component } from 'react';
import Grid from './Grid';
import styles from '../styles/board.module.css';

class Board extends Component {
  render() {
    let i;
    const grids = [];
    for (i = 0; i < 100; i++) {
      grids.push(<Grid />)
    }

    return (
      <div className={styles.board}>
        {grids}
      </div>
    );
  }
};

export default Board;
