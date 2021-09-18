import * as React from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import Colours from "../config/Colours";

const BackFAB = ({pressBackHandler}) => (
    <FAB
        style={styles.fab}
        large
        icon="arrow-left"
        onPress={() => pressBackHandler()}
    />
);

const styles = StyleSheet.create({
    fab: {
        backgroundColor: Colours.purple_primary,
        position: 'absolute',
        margin: 16,
        left: 0,
        top: 0,
    },
})

export default BackFAB;
