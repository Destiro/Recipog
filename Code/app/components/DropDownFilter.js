import React, { useState } from "react";
import { Picker, StyleSheet } from "react-native";

const DropDownFilter = () => {
    const [selectedValue, setSelectedValue] = useState("All Categories");

    return (
        <Picker
            selectedValue={selectedValue}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
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
        width: '78%',
    }
});

export default DropDownFilter;
