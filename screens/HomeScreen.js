import React, { Component } from 'react';
import { StyleSheet, Text, View, Pressable, Button, AsyncStorageStatic } from 'react-native';



class HomeScreen extends Component {
    


    render () {
        
    return (
        <View style={styles.Page}> 
            <Text style={styles.Title}>JockStats</Text>
            <Text style={styles.Authors}>Created by: Michael Hampton and Weston Elsmore</Text>
            <Text style={styles.SecondTitle}>Welcome to JockStats!</Text>
            <Text style={styles.FirstPara}>This app is created for the sole purpose of 
            helping those in athletic sports keep tabs on their own stats or the 
            stats of another athlete.</Text>
            <Text style={styles.SecondPara}>To create a profile and start recording your stats, go to the Profile page and create your profile. 
            You may also go to the Team page and create stats for a specific team.</Text>
        </View>
    );
    }
}

export default HomeScreen;

const styles = StyleSheet.create({
    Page: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'beige'
    },
    Title: {
        fontSize: 50,
        textDecorationLine: 'underline',
        color: 'black',
        textShadowOffset: {width: -2, height: 2},
        textShadowRadius: 10,
        textShadowColor: 'black'
    },
    Authors: {
        justifyContent: 'flex-end'
    },
    SecondTitle: {
        fontSize: 30,
        paddingTop: 50
    },
    FirstPara: {
        padding: 20,
        fontSize: 20,
        alignContent: 'center'
    },
    SecondPara: {
        padding: 20,
        fontSize: 20
    }


});