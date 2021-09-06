//Renders an Individual Ingredient
import {Image, StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native";
import React from "react";
import Colours from "../config/Colours";
import Display from "../config/Display";

const IngredientItem = ({ title, image, touchHandler, selected }) => (
    <TouchableWithoutFeedback onPress={() => touchHandler(title)}>
        <View style={selected ? styles.item : styles.item2}>

            <Image style={{width: '100%', height: '90%', paddingTop: 10}}
                   source={require('../assets/images/'+image)} />
            <Text style={styles.title}>{title}</Text>

        </View>
    </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
    title: {
        paddingTop: 10,
        fontSize: 18,
        color: Colours.white,
    },
    item: {
        backgroundColor: Colours.blue_primary,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: Display.width/2.2,
        height: Display.width/2.2,
    },
    item2: {
        backgroundColor: Colours.dark_grey,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: Display.width/2.2,
        height: Display.width/2.2,
    },
});

export default IngredientItem;
