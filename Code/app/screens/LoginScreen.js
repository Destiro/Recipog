import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import { TextInput } from 'react-native-paper';

import Colours from "../config/Colours";
import LoginFunction, {checkLoginName} from "../utility/LoginFunction";

const LoginScreen = ({navigation}) => {
    const [login, setLogin] = React.useState('');
    const [password, setPassword] = React.useState('');

    function checkLogin(login, password){
        checkLoginName(login);
        console.log(login + " : " + password);
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerStyle}>
                <Text style={styles.title}> Recipog </Text>
            </View>
            <View style={styles.loginBox}>
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
                <Button title={"Login"} style={styles.button} onPress={() => checkLogin(login, password)}  />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colours.purple_primary,
    },
    title: {
        fontSize: 70,
        color: Colours.white,
    },
    headerStyle: {
        backgroundColor: Colours.purple_primary,
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        height: '35%',
    },
    loginBox: {
        width: '80%',
        height: '40%',
        backgroundColor: Colours.purple_primary,
    },
    button: {
        width: '70%',
        backgroundColor: Colours.blue_primary,
        height: 30,
    }
});

export default LoginScreen;
