import * as React from 'react';
import {Button, StyleSheet, View} from 'react-native';

const NavBar = (props) => {
    return (
        <View style={styles.container}>
            <Button title="Ingredients" onPress={() => props.nav.navigate('Ingredients')}/>
            <Button title="Recipes" onPress={() => props.nav.navigate('Recipes')}/>
            <Button title="Favourites" onPress={() => props.nav.navigate('Liked')}/>
            <Button title="Groceries" onPress={() => props.nav.navigate('Groceries')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    }
});

export default NavBar
