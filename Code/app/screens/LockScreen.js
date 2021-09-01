import React from 'react';
import {StyleSheet, View} from 'react-native';

import Colours from "../config/Colours";

const LockScreen = () => {
    return (
        <View style={styles.container}>

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

export default LockScreen;
