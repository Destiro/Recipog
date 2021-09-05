import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

import Colours from "../config/Colours";
import {TextInput} from "react-native-paper";

const SignupScreen = () => {
    const [login, setLogin] = React.useState('');
    const [password, setPassword] = React.useState('');

    return (
        <View style={styles.container}>
            <View style={styles.SignupBox}>
                <Text style={styles.title}> Create Account </Text>
                <View style={{paddingBottom: 30, backgroundColor: Colours.purple_primary}} />
                <TextInput
                    label="Username"
                    value={login}
                    onChangeText={text => setLogin(text)}
                    style={{backgroundColor: Colours.white}}
                />
                <View style={{paddingBottom: 30, backgroundColor: Colours.purple_primary}} />
                <TextInput
                    label="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={{backgroundColor: Colours.white}}
                />
                <View style={{paddingBottom: 30, backgroundColor: Colours.purple_primary}} />
                <Button title={"Create Account"} style={styles.button} onPress={() => alert(login+" : "+password)}  />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colours.purple_primary,
    },
    title: {
        fontSize: 45,
        color: Colours.white,
    },
    SignupBox: {
        width: '80%',
        height: '50%',
        backgroundColor: Colours.purple_primary,
    },
    button: {
        width: '70%',
        backgroundColor: Colours.blue_primary,
        height: 30,
    },
});

export default SignupScreen;
