import React from 'react';
import {StyleSheet, View, Text} from "react-native";
import Colours from "../config/Colours";

/**
 * Used at the top of each major page, showing the title of the page
 * so the user knows which page they are currently on.
 *
 * @param title
 * @returns {JSX.Element}
 * @constructor
 */
const Header = ({title}) => {
    return(
      <View style={styles.headerBox}>
          <Text style={styles.pageTitle}> {title} </Text>
      </View>
    );
}

const styles = StyleSheet.create({
    headerBox: {
        backgroundColor: Colours.purple_primary,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '10%',
    },
    pageTitle: {
        fontSize: 45,
        fontWeight: '400',
        color: Colours.white,
    },
});

export default Header;
