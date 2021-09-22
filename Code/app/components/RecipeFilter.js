import React, {useState} from "react";
import { StyleSheet } from "react-native";
import {Picker} from '@react-native-picker/picker';

/**
 * Filter box for my recipes page
 *
 * @param filterHandler
 * @returns {JSX.Element}
 * @constructor
 */
const RecipeFilter = ({filterHandler}) => {
    const [category, setCategory] = useState("All Categories");

    return (
        <Picker
            style={styles.picker}
            selectedValue={category}
            mode="dropdown"
            onValueChange={(itemValue, itemIndex) => {
                setCategory(itemValue)
                filterHandler(itemValue)
            }
            }>
            <Picker.Item label="All Categories" value="All Categories" />
            <Picker.Item label="Vegetarian" value="Vegetarian" />
            <Picker.Item label="Pescatarian" value="Pescatarian" />
        </Picker>
    );
}

const styles = StyleSheet.create({
    picker: {
        height: '45%',
        width: '95%',
        borderWidth: 1,
        borderRadius: 5,
    }
});

export default RecipeFilter;
