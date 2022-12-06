import React from 'react';
import { StyleSheet, Text, View, Pressable, Button } from 'react-native';

const PlayerScreen = ({navigation}) => {
    return (
        <View style={StyleSheet.container}>
            <Text>Player Screen</Text>
        </View>
    );
}

export default PlayerScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8fcbbc'
    }
});