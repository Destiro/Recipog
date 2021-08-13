import React from 'react';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import RecipesScreen from "../screens/RecipesScreen";
import LikedScreen from "../screens/LikedScreen";
import GroceriesScreen from "../screens/GroceriesScreen";
import IngredientsScreen from "../screens/IngredientsScreen";
import Colours from "../config/Colours";

const Tab = createBottomTabNavigator();

const NavBar = () => {
    return (
        <Tab.Navigator
            initialRouteName="Ingredients"
            screenOptions={{
                tabBarActiveTintColor: Colours.purple_primary,
            }}
        >
            <Tab.Screen
                name="Ingredients"
                component={IngredientsScreen}
                options={{
                    tabBarLabel: 'My Pantry',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="fridge" color={color} size={size} />
                    ),
                    headerStyle: {
                        backgroundColor: Colours.purple_primary,
                        height: '15%',
                    },
                    tabBarLabelStyle: {
                        fontSize: 11
                    },
                    headerTitleStyle: {
                        fontSize: 30
                    },
                    headerTitleAlign: 'center',
                    headerStatusBarHeight: 70,
                    headerTintColor: Colours.white,
                }}
            />
            <Tab.Screen
                name="Recipes"
                component={RecipesScreen}
                options={{
                    tabBarLabel: 'Recipes',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="pot-steam" color={color} size={size} />
                    ),
                    headerStyle: {
                        backgroundColor: Colours.purple_primary,
                        height: '15%',
                    },
                    tabBarLabelStyle: {
                        fontSize: 11
                    },
                    headerTitleStyle: {
                        fontSize: 30
                    },
                    headerTitleAlign: 'center',
                    headerStatusBarHeight: 70,
                    headerTintColor: Colours.white,
                }}
            />
            <Tab.Screen
                name="Liked Recipes"
                component={LikedScreen}
                options={{
                    tabBarLabel: 'Favourites',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="heart" color={color} size={size} />
                    ),
                    headerStyle: {
                        backgroundColor: Colours.purple_primary,
                        height: '15%',
                    },
                    tabBarLabelStyle: {
                        fontSize: 11
                    },
                    headerTitleStyle: {
                        fontSize: 30
                    },
                    headerTitleAlign: 'center',
                    headerStatusBarHeight: 70,
                    headerTintColor: Colours.white,
                }}
            />
            <Tab.Screen
                name="Grocery List"
                component={GroceriesScreen}
                options={{
                    tabBarLabel: 'Groceries',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="cart" color={color} size={size} />
                    ),
                    headerStyle: {
                        backgroundColor: Colours.purple_primary,
                        height: '15%',
                    },
                    tabBarLabelStyle: {
                        fontSize: 11
                    },
                    headerTitleStyle: {
                        fontSize: 30
                    },
                    headerTitleAlign: 'center',
                    headerStatusBarHeight: 70,
                    headerTintColor: Colours.white,
                }}
            />
        </Tab.Navigator>
    )
}

export default NavBar
