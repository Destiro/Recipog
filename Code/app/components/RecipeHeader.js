import React from 'react';
import {StyleSheet, View, Text} from "react-native";
import Colours from "../config/Colours";

/**
 * Shows the title and desc for recipes in the single recipe screen.
 *
 * @param title
 * @param difficulty
 * @param time
 * @returns {JSX.Element}
 * @constructor
 */
const RecipeHeader = ({title, difficulty, time}) => {
    return(
        <View style={styles.headerBox}>
            <View style={styles.titleBox}>
                <Text style={styles.pageTitle}> {title} </Text>
            </View>
            <View style={styles.descBox} >
                <Text style={styles.pageDesc}>Difficulty: {difficulty} Time: {time}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerBox: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '15%',
    },
    titleBox: {
        backgroundColor: Colours.purple_primary,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '66%',
    },
    descBox: {
        backgroundColor: Colours.dark_grey,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '34%',
    },
    pageTitle: {
        fontSize: 26,
        fontWeight: '400',
        color: Colours.white,
    },
    pageDesc: {
        fontSize: 18,
        fontWeight: '400',
        color: Colours.white,
    },
});

export default RecipeHeader;
