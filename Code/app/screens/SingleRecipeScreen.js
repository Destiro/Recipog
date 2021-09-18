import React from 'react';
import Colours from "../config/Colours";
import { StyleSheet, Text, View } from 'react-native';
import Header from "../components/Header";

const SingleRecipeScreen = (props) =>  {
    return (
        <View style={styles.container}>
            <Header title={"My Pantry"} />
            <Text> props.recipeName </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
});

export default SingleRecipeScreen;
