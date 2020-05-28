import React from 'react';

import { StatusBar, YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Unrecognized WebSocket']);
YellowBox.ignoreWarnings(['Remote debugger']);

import Routes from './src/routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor="#7D40E7" />
      <Routes />
    </>
  );
}
