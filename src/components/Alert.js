import React, { Component } from 'react';
import { connect } from 'react-redux';

class Alert extends Component {

  render() {
    const text = this.props.player ? 'White' : 'Black';

    return (
      <div>
        <div className='alert alert-primary'>
          {`It's ${text}'s turn.`}
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

export default connect(mapStateToProps)(Alert);
