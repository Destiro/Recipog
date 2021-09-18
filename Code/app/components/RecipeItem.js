//Renders an Individual Ingredient
import {Image, StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native";
import React from "react";
import Colours from "../config/Colours";
import Display from "../config/Display";

const RecipeItem = ({ title, diff, time, image, touchHandler }) => (
    <TouchableWithoutFeedback onPress={() => touchHandler(title)}>
        <View style={styles.item}>
            <Image style={{width: '100%', height: '90%', paddingTop: 10}}
                   source={require('../assets/recipe_images/'+image)} />
            <View style={styles.bottomBar}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.descText}>Difficulty: {diff}    Time: {time}</Text>
            </View>
        </View>
    </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
    title: {
        paddingTop: 10,
        fontSize: 24,
        color: Colours.white,
    },
    descText: {
        fontSize: 18,
        color: Colours.white,
    },
    item: {
        backgroundColor: Colours.blue_primary,
        padding: 0,
        marginVertical: 8,
        marginHorizontal: 10,
        alignItems: 'center',
        width: Display.width/1.1,
        height: Display.width/1.1,
    },
    bottomBar: {
        position: "absolute",
        width: '100%',
        height: '20%',
        backgroundColor: Colours.blue_secondary,
        alignItems: "center",
        bottom: 0
    }
});

export default RecipeItem;
