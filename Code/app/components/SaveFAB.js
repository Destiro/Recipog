import * as React from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import Colours from "../config/Colours";

const SaveFAB = ({saveHandler}) => (
    <FAB
        style={styles.fab}
        large
        label={"Save"}
        icon="content-save"
        onPress={() => saveHandler()}
    />
);

const styles = StyleSheet.create({
    fab: {
        backgroundColor: Colours.purple_primary,
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
})

export default SaveFAB;
