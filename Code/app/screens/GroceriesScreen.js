import React from 'react';
import Colours from "../config/Colours";
import { StyleSheet, Text, View } from 'react-native';
import Header from "../components/Header";

const GroceriesScreen = () =>  {
    return (
        <View style={styles.container}>
            <Header title={"Groceries"} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default GroceriesScreen;
