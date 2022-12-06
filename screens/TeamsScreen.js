import React from 'react';
import { StyleSheet, Text, View, Pressable, Button } from 'react-native';

const TeamsScreen = ({navigation}) => {
    return (
        <View style={StyleSheet.container}>
            <Text>Teams Screen</Text>
        </View>
    );
}

export default TeamsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8fcbbc'
    }
});