import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initBoard } from '../actions';

class Header extends Component {
  render() {
    return (
      <div>
        <h2>Othello</h2>
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
