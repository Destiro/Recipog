import React, {useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from "react-native";
import Colours from "../config/Colours";

/**
 * A slideshow that displays 3 recipe images for the current
 * recipe the user has selected.
 *
 * @param imageString
 * @returns {JSX.Element}
 * @constructor
 */
export default function ImageSlideShow({imageString}) {
    const [current, setCurrent] = useState(0);

    //Fetch these images for the slideshow
    let state = {
        images: [
            require("../assets/recipe_images/" + imageString),
            require("../assets/recipe_images/1" + imageString),
            require("../assets/recipe_images/2" + imageString),
        ]
    };


    return (
        <View style={{width: '100%', height: '40%', alignItems: 'center'}}>
            <Image source={state.images[current]} style={{width: '100%', height: '100%'}}/>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => setCurrent(0)}>
                    <View style={current === 0 ? styles.item : styles.item2} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setCurrent(1)}>
                    <View style={current === 1 ? styles.item : styles.item2} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setCurrent(2)}>
                    <View style={current === 2 ? styles.item : styles.item2} />
                </TouchableOpacity>
            </View>
        </View>
);
}

const styles = StyleSheet.create({
    buttonContainer: {
        position: "absolute",
        bottom: 20,
        right: 20,
        width: '30%',
        height: '10%',
        flexDirection: "row"
    },
    item: {
        backgroundColor: Colours.purple_secondary,
        marginHorizontal: 10,
        width: 25,
        height: 25,
        borderRadius: 100,
    },
    item2: {
        backgroundColor: Colours.dark_grey,
        marginHorizontal: 10,
        width: 25,
        height: 25,
        borderRadius: 100,
    },
});
