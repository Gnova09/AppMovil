import React, { useState } from 'react'
import { StyleSheet, TextInput, View, Button, Text, Alert } from 'react-native';


export const Tabla = () => {
    const [numero, setNumero] = useState("0");
    const [numero2, setNumero2] = useState("0");

    const handleInputChange = (text) => {
        
        setNumero(parseInt(text,10)|| 0);
    };
    
    

    const TablaList = ({num})=>{
        let i = 1
        let ListOfText = []
        while(i <= 13){
            ListOfText.push(<Text key={i}>{`${i} x ${num} = ${i*num}`}</Text>)
            i=i+1
        }
        return ListOfText
    }

    return (
        <View style={styles.container}>

        <Text style={styles.text}  > Tabla</Text>

            <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder="Ingresa un número"
                value={numero}
                onChangeText={handleInputChange}
            />
           <TablaList num={numero} />
            

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