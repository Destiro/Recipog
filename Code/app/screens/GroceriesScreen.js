import React, {useState} from 'react';
import Colours from "../config/Colours";
import { StyleSheet, Text, View } from 'react-native';
import Header from "../components/Header";

const GroceriesScreen = (props) =>  {
    const [groceries, setGroceries] = useState([]);
    //props.login

    return (
        <View style={styles.container}>
            <Header title={"Groceries"} />
            <View style={styles.list}>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    list: {
        backgroundColor: Colours.light_grey,
        width: '80%',
        height: '90%',
    }
});

export default GroceriesScreen;
