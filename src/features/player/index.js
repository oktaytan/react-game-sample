import React from 'react';
import { connect } from 'react-redux';
import playerWalk from './player_walk.png';
import handleMovement from './movement';

function Player(props) {
  return (
    <div
      style={{
        position: 'absolute',
        top: props.position[1],
        left: props.position[0],
        backgroundImage: `url('${playerWalk}')`,
        backgroundPosition: props.spriteLocation,
        width: '40px',
        height: '40px'
      }}
    />
  );
}

const mapStateToProps = state => {
  return {
    ...state.player,
    position: state.player.position,
    hairColor: state.player.hairColor
  };
};

export default connect(mapStateToProps)(handleMovement(Player));
