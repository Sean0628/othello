import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from '../styles/header.module.css'
import { initBoard } from '../actions';

class Header extends Component {
  render() {
    return (
      <div className={styles.header_container}>
        <h2 className={styles.header_text}>Othello</h2>
        <button
          onClick={() => this.props.initBoard()}
          className='btn btn-danger btn-lg'
        >
          Reset
        </button>
      </div>
    );
  }
};

export default connect(null, { initBoard })(Header);
