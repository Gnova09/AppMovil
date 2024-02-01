import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants'
import { Principal } from './Views/Principal';

export const Main = () => {
    return (
        <View style={styles.container}>
            <Principal />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight ,
        backgroundColor: '#fff',
       /*  alignItems: 'center',
        justifyContent: 'center', */
    },
});