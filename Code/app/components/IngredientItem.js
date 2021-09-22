import {Image, StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native";
import React, { PureComponent } from 'react';
import Colours from "../config/Colours";
import Display from "../config/Display";

/**
 * Renders an individual ingredient block in the ingredients screen
 * displaying the image and accompanying text
 */
class IngredientItem extends PureComponent {
    render () {
        return (
        <TouchableWithoutFeedback onPress={() => this.props.touchHandler(this.props.title)}>
            <View style={this.props.selected ? styles.item : styles.item2}>

                <Image style={{width: '100%', height: '90%', paddingTop: 10}}
                       source={require('../assets/ingredient_images/'+this.props.image)} />
                <Text style={styles.title}>{this.props.title}</Text>

            </View>
        </TouchableWithoutFeedback>
        )
    }
}

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
        borderRadius: 10,
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
        borderRadius: 10,
    },
});

export default IngredientItem;
