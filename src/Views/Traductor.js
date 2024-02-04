import React, { useState } from 'react'
import { StyleSheet, TextInput, View, Button, Text, Alert } from 'react-native';


export const Traductor = () => {
    const [numero, setNumero] = useState("0");
    const [numLetras, setNumLetras] = useState("0");



    const handleInputChange = (text) => {
        setNumero(parseInt(text, 10) || 0);
    };

    const Convertidor = (num) => {

        const ArrayOfNum = String(num).split("").map((item) => {
            switch (item) {
                case "0":
                    return " Cero"

                case "1":
                    return " Uno"
                    
                case "2":
                    return " Dos"
                    
                case "3":
                    return " Tres"
                    
                case "4":
                    return " Cuatro"
                    
                case "5":
                    return " Cinco"
                    
                case "6":
                    return " Seis"
                    
                case "7":
                    return " Siete"
                    
                case "8":
                    return " Ocho"
                    
                case "9":
                    return " Nueve"
            
            }
        })

        return ArrayOfNum

    }

    return (
        <View style={styles.container}>

            <Text style={styles.text}  > Traductor</Text>

            <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder="Ingresa un número"
                value={numero}
                onChangeText={handleInputChange}
            />


            <Text>Numero en letras: {Convertidor(numero)}</Text>

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