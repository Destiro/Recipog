import React, {useEffect, useState} from "react";
import { StyleSheet } from "react-native";
import {Picker} from '@react-native-picker/picker';


const IngredientsFilter = ({filterHandler}) => {
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
            <Picker.Item label="Essentials" value="Essentials" />
            <Picker.Item label="Savoury" value="Savoury" />
            <Picker.Item label="Sweet" value="Sweet" />
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

export default IngredientsFilter;
