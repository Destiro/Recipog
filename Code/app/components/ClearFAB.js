import * as React from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import Colours from "../config/Colours";

const ClearFAB = ({clearHandler}) => (
    <FAB
        style={styles.fab}
        large
        label={"Clear"}
        icon="close-circle-outline"
        onPress={() => clearHandler()}
    />
);

const styles = StyleSheet.create({
    fab: {
        backgroundColor: Colours.purple_primary,
        position: 'absolute',
        margin: 16,
        left: 0,
        bottom: 0,
    },
})

export default ClearFAB;
