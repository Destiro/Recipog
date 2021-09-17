import React, { useState } from 'react';
import {StyleSheet, TextInput, Button, View} from "react-native";
import Colours from "../config/Colours";

export default function AddInput({pText, submitHandler, buttonText} ) {
    const [text, setText] = useState('')

    const changeHandler = (val) => {
        setText(val);
    }

    return (
        <View style={styles.addBar}>
            <TextInput
                style={styles.input}
                placeholder={pText}
                onChangeText={changeHandler}
                />
                <Button title={buttonText} onPress={() => submitHandler(text)} style={styles.button} />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginTop: 20,
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        fontSize: 22,
    },
    button: {
        padding: 15,
        fontSize: 16,
    }
})
