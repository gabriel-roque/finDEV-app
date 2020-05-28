import { REACT_NATIVE_API } from 'react-native-dotenv';

import socketio from 'socket.io-client';

const socket = socketio(REACT_NATIVE_API, {
  autoConnect: false,
});

function subscribeNewDevs(subcribeFunction) {
  socket.on('new-dev', subcribeFunction);
}

function connect(latitude, longitude, techs) {
  socket.io.opts.query = {
    latitude,
    longitude,
    techs,
  };
  socket.connect();
}

function disconnect() {
  if (socket.connected) {
    socket.disconnect();
  }
}

export { connect, disconnect, subscribeNewDevs };
