import React from 'react';
import Colours from "../config/Colours";
import { StyleSheet, Text, View } from 'react-native';
import Header from "../components/Header";

const RecipesScreen = () =>  {
    return (
        <View style={styles.container}>
            <Header title={"Recipes"} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default RecipesScreen;
