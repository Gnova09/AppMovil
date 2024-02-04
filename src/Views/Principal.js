import React, { useState } from 'react'
import { Text, View, StyleSheet, Button, Alert } from "react-native";
import { PerfilLogo } from '../Components/PerfilLogo';
import { Sumadora } from './Sumadora';
import { Traductor } from './Traductor';
import { Tabla } from './Tabla';
import { Experiencia } from './Experiencia';

export const Principal = ({ view }) => {

    const RenderizarComponente = () => {
        switch (view) {
            case 1:
                return <Sumadora />;

            case 2:
                return <Traductor />;

            case 3:
                return < View></View>;

            case 4:
                return < Tabla />;

            case 5:
                return < Experiencia />;


        }
    }

    return (
        <View style={styles.container}>
            <PerfilLogo />
            <View>
                {/* Nombre */}
                <View style={styles.SubContainer} >
                    <Text style={styles.text} > Nombre: </Text>
                    <Text style={styles.SmallText} > Georges Bueno </Text>
                </View>

                {/* Correo */}
                <View style={styles.SubContainer} >
                    <Text style={styles.text} > Correo: </Text>
                    <Text style={styles.SmallText} >20198412@itla.edu.do </Text>
                </View>
            </View>

            <RenderizarComponente />

          
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 50,
        alignItems: "center",
        justifyContent: "space-between",

    },
    SubContainer: {
        flexDirection: "row",
        gap: 5,
        alignItems: "center"
    },
    text: {
        fontWeight: "bold",
        fontSize: 20
    },
    SmallText: {
        fontSize: 16
    },
    Btn: {
        borderRadius: 5,
        overflow: "hidden"

    }

})
