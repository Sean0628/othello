import React, { Component } from 'react';
import { connect } from 'react-redux';

class Label extends Component {

  render() {
    const text = this.props.player ? 'White' : 'Black';

    return (
      <div>
        <div className='alert alert-primary h4'>
          <b>{`It's ${text}'s turn.`}</b>
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    player: state.player.isPlayer1
  }
};

export default connect(mapStateToProps)(Label);
