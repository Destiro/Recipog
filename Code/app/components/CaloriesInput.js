import React, {useState} from 'react';
import {StyleSheet, TextInput, Button, View} from "react-native";

export default function AddInput({pText, submitHandler, buttonText, textHandler}) {
    const [text, setText] = useState('')

    //Meal planner screen only accepts numbers
    const changeHandlerNumbers = (val) => {
        let newVal = val.replace(/[^0-9]/g, '');
        setText(newVal);
        textHandler(newVal);
    }

    return (
        <View style={styles.addBar}>
                <TextInput
                    keyboardType = 'numeric'
                    style={styles.input}
                    placeholder={pText}
                    onChangeText={changeHandlerNumbers}
                />
            <Button title={buttonText} onPress={() => submitHandler()} style={styles.button}/>
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
