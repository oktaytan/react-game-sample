import React from 'react';
import Map from '../map';
import Player from '../player';

import { tiles } from '../../data/maps/1';
import store from '../../config/store';

function World(props) {
  store.dispatch({
    type: 'ADD_TILES',
    payload: {
      tiles
    }
  });
  return (
    <div
      style={{
        position: 'relative',
        width: '800px',
        height: '480px',
        margin: '30px auto',
        backgroundColor: '#2ecc71',
        border: '10px solid white',
        overflow: 'hidden'
      }}
    >
      <Map className='map' />
      <Player />
    </div>
  );
}

export default World;
