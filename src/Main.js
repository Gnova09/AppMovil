import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants'
import { Principal } from './Views/Principal';
import { Menu } from './Components/Menu';

export const Main = () => {

    const [viewSelected, setViewSelected] = useState(3)


    const handleViewSelected=(view)=>{
        setViewSelected(view)
    }
    return (
        <View style={styles.container}>
            <Principal view={viewSelected} />   
            <Menu handleView={handleViewSelected} view={viewSelected}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        marginTop: Constants.statusBarHeight ,
        backgroundColor: '#fff',
       /*  alignItems: 'center',
        justifyContent: 'center', */
    },
});