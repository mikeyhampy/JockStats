// import { StatusBar } from 'expo-status-bar';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { StyleSheet, Text, View, Pressable } from 'react-native';
// import Icon from 'react-native-ico-material-design';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Tabs from './navagation/tabs';

const App = () => {
  return(
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}

export default App;