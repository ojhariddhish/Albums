// For Android App

import React from 'react';
import {
  AppRegistry,
  View
} from 'react-native';

import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';


// Create a Component
const App = () => {
  return (
    <View style={{ flex: 1 }}><Header headerText={'Albums'} /><AlbumList /></View>
  );
};

// Render to the device
AppRegistry.registerComponent('albums', () => App);
