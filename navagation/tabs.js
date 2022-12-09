import React from 'react';
import {Text, View, Image} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import PlayerScreen from '../screens/PlayersScreen';
import TeamsScreen from '../screens/TeamsScreen';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator
            screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: [
                {
                    display: 'flex'
                }
            ],
            style: {
                position: 'absolute',
                bottom: 25,
                left: 20,
                right: 20,
                elevation: 0,
            }
           }} 
        >
            <Tab.Screen name="Home" component={HomeScreen} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItens: 'center', justifyContent: 'center'}}>
                            <Image
                                source={require('../assets/home.png')}
                                resizeMode="contain"
                                style= {{
                                    width: 80,
                                    height: 80,
                                    tintColor: focused ? '#e32f45' : '#748c94',
                                }}
                            />
                        </View>
                    )
                }}
            />

            <Tab.Screen name="Player" component={PlayerScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItens: 'center', justifyContent: 'center'}}>
                            <Image
                                source={require('../assets/player.png')}
                                resizeMode="contain"
                                style= {{
                                    width: 80,
                                    height: 80,
                                    tintColor: focused ? '#e32f45' : '#748c94',
                                }}
                            />
                        </View>
                    )
                }}
            />
            <Tab.Screen name="Teams" component={TeamsScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItens: 'center', justifyContent: 'center'}}>
                            <Image
                                source={require('../assets/teams.png')}
                                resizeMode="contain"
                                style= {{
                                    width: 100,
                                    height: 100,
                                    tintColor: focused ? '#e32f45' : '#748c94',
                                }}
                            />
                        </View>
                    )
                }}
                
            />
            
        </Tab.Navigator>
    );
}

export default Tabs;