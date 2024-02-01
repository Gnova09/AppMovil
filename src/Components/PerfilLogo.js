import React from 'react'
import { Image, View, StyleSheet } from 'react-native'

export const PerfilLogo = () => {
    return (
        <View>
            <Image
                style={styles.logo}
                source={require('../../assets/fb.png')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 100,
        height: 100,
    },
})