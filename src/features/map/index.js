import React from 'react';
import { connect } from 'react-redux';
import { SPRITE_SIZE } from '../../config/constants';

import './style.css';

const getTileSprite = type => {
  switch (type) {
    case 0:
      return 'grass';
    case 3:
      return 'tree';
    case 4:
      return 'chest';
    case 5:
      return 'rock';
    case 6:
      return 'tree';
  }
};

const MapTile = props => {
  return (
    <div
      className={`tile ${getTileSprite(props.tile)}`}
      style={{ height: SPRITE_SIZE, width: SPRITE_SIZE }}
    />
  );
};

const MapRow = props => {
  return (
    <div
      className='row'
      style={{ height: SPRITE_SIZE, lineHeight: `${SPRITE_SIZE}px` }}
    >
      {props.tiles.map((tile, index) => (
        <MapTile tile={tile} key={index} />
      ))}
    </div>
  );
};

function Map(props) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%'
      }}
    >
      {props.tiles.map((row, index) => (
        <MapRow tiles={row} key={index} />
      ))}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    tiles: state.map.tiles
  };
};

export default connect(mapStateToProps)(Map);
