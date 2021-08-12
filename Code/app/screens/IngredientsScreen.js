import React from 'react';
import Colours from "../config/Colours";
import { StyleSheet, Text, View } from 'react-native';

const IngredientsScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.titleHeader}>

            </View>
            <View style={styles.listView}>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    titleHeader: {
        backgroundColor: Colours.light_grey,
        width: '100%',
        height: '15%',
    },
    listView: {
        backgroundColor: Colours.white,
        width: '100%',
        height: '85%',
    },
});

export default IngredientsScreen;
