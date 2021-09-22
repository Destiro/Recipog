import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from "react-native";
import Colours from "../config/Colours";

/**
 * Displays the individual item in the grocery list on the grocery list page.
 *
 * @param item
 * @param pressHandler
 * @returns {JSX.Element}
 * @constructor
 */
export default function GroceryItem({ item, pressHandler }) {

    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <View style={styles.line} />
            <Text style={styles.item}> {item.text} </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    line: {
      width: '100%',
      height: 2,
      backgroundColor: Colours.purple_secondary,
      marginBottom: 10,
      marginTop: 10,
    },
    item: {
        padding: 16,
        borderColor: Colours.dark_grey,
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        fontSize: 16,
    }
})
