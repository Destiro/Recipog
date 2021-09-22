import * as React from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import Colours from "../config/Colours";

/**
 * A back button to navigate back to the recipes page from the single recipes page.
 *
 * @param pressBackHandler
 * @returns {JSX.Element}
 * @constructor
 */
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
