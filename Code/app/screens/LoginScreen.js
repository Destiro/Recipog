import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

import Colours from "../config/Colours";

const LoginScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text> Login Screen</Text>
            <Button title={"Press me"} onPress={() => alert("hello")} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    titleHeader: {
        backgroundColor: Colours.light_grey,
        width: '100%',
        height: '15%',
    },
});

export default LoginScreen;
