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
            <View style={styles.bottomNav}>
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
        backgroundColor: Colours.blue_primary,
        width: '100%',
        height: '25%',
    },
    listView: {
        backgroundColor: Colours.purple_primary,
        width: '100%',
        height: '67%',
    },
    bottomNav: {
        backgroundColor: Colours.blue_secondary,
        width: '100%',
        height: '8%',
    }
});

export default IngredientsScreen;
