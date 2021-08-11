import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Button, View} from "react-native-web";

const Tab = createBottomTabNavigator();

const NavBar = (props) => {
    return (
        <View>
            <Button title="Go to Details"
                    onPress={() => { props.nav.navigate('Recipes'); }  }
                    />
        </View>
    );
}

export default NavBar
