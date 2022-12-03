import * as React from 'react';
//import {Text, View} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import PlayerScreen from '../screens/PlayersScreen';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Player" component={PlayerScreen} />
        </Tab.Navigator>
    );
}

export default Tabs;