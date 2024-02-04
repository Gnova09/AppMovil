import React, { useState } from 'react'
import { StyleSheet, TextInput, View, Button, Text, Alert } from 'react-native';


export const Sumadora = () => {
    const [numero, setNumero] = useState("0");
    const [numero2, setNumero2] = useState("0");

    const handleInputChange = (text) => {
        
        setNumero(parseInt(text,10)|| 0);
    };
    const handleInput2Change = (text) => {
        
        setNumero2(parseInt(text,10)|| 0);
    };
    


    return (
        <View style={styles.container}>

        <Text style={styles.text}  > Sumadora</Text>

            <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder="Ingresa un número"
                value={numero}
                onChangeText={handleInputChange}
            />
           
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder="Ingresa un número"
                value={numero2}
                onChangeText={handleInput2Change}
            />
            <Text>Suma total: {numero + numero2}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 50,
        //backgroundColor: '#67657f',
        /*  alignItems: 'center',
         justifyContent: 'center', */
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 10,
    },
    text: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 5
    }
});