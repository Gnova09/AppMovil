import React,{useState} from 'react'
import { Text, View, StyleSheet, Button, Alert } from "react-native";
import { PerfilLogo } from '../Components/PerfilLogo';

export const Principal = () => {
    const [view, setview] = useState("Principal")
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
                    <Text style={styles.SmallText} >Georges.Bueno@hotmail.com </Text>
                </View>
            </View>

            <View style={styles.SubContainer} >
                {/* Sumadora */}
                <Button
                    title="Sumadora"
                    onPress={() => setview('Sumadora')}
                />
                {/* Traductor */}
                <Button
                    title="Traductor"
                    onPress={() => setview('Traductor')}
                />
                {/* Tabla */}
                <Button
                    title="Tabla"
                    onPress={() => setview('Tabla')}
                />
                {/* Experiencia */}
                <Button
                style={ styles.Btn}
                    title="Exp"
                    onPress={() => setview('Exp')}
                />
            </View>

            <Text>{view}</Text>
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
    Btn:{
        borderRadius: 5,
        overflow: "hidden"

    }

})
