import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

import Colours from "../config/Colours";

const LoginScreen = ({navigation}) => {

    return (
        <View style={styles.container}>
            <View style={styles.headerStyle}>
                <Text style={styles.title}> Recipog </Text>
            </View>
            <View style={styles.loginBox}>
                <Text> Login Screen</Text>
                <Button title={"Press me"} onPress={() => navigation.navigate("App")} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colours.purple_secondary,
    },
    title: {
        fontSize: 70,
        color: Colours.white,
    },
    headerStyle: {
        backgroundColor: Colours.purple_secondary,
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        height: '35%',
    },
    loginBox: {
        width: '80%',
        height: '40%',
        backgroundColor: Colours.white,
    }
});

export default LoginScreen;
