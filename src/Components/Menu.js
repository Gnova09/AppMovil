import React from 'react'
import { Button, Text, View, StyleSheet, Alert, TouchableOpacity } from 'react-native'


/* 
1: Sum
2: Traduc
3: Home
4: Tabla
5: Exp
 */

export const Menu = ({ handleView }) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.MenuBTN}
                title="Sum"
                onPress={() => handleView(1)}
            >
                <Text>Sum</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.MenuBTN}
                title="Traduc"
                onPress={() => handleView(2)}
            >
                <Text>Traduc</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.MenuBTN}
                title="Home"
                onPress={() => handleView(3)}
            >
                <Text>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.MenuBTN}
                title="Tabla"
                onPress={() => handleView(4)}
            >
                <Text>Tabla</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.MenuBTN}
                title="Exp"
                onPress={() => handleView(5)}
            >
                <Text>Exp</Text>
            </TouchableOpacity>



        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 4,
        flexDirection: "row",
        justifyContent: "space-between",
        position: "absolute",
        width: "100%",
        height: 60,
        backgroundColor: "#67657f",
        bottom: 0
    },
    MenuBTN: {
        borderRadius: 5,
        padding: 2,
        alignItems: "center",
        borderColor: "black",
        justifyContent: "center",
        height: "100%",
        width: "19%",
        backgroundColor: "white"
    },
    btn: {
        fontSize: 1,
        backgroundColor: "white"

    }
})