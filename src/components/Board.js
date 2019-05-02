import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from '../styles/board.module.css';
import Grid from './Grid';

class Board extends Component {
  renderGrids() {
    return this.props.board.map((row, index1) => {
      return row.map((grid, index2) => {
        return (
          <React.Fragment key={`[${index1}][${index2}]`}>
            <Grid grid={grid} index1={index1} index2={index2} />
          </React.Fragment>
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
  };
}

export default connect(mapStateToProps)(Board);
