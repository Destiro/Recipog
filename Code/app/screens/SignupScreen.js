import React from 'react';
import {StyleSheet, View} from 'react-native';

import Colours from "../config/Colours";

const SignupScreen = () => {
    return (
        <View style={styles.container}>
            <Text> Signup Screen</Text>
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

export default SignupScreen;
