import React from 'react';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import RecipesScreen from "../screens/RecipesScreen";
import LikedScreen from "../screens/LikedScreen";
import GroceriesScreen from "../screens/GroceriesScreen";
import IngredientsScreen from "../screens/IngredientsScreen";

const Tab = createBottomTabNavigator();

const NavBar = () => {
    return (
        <Tab.Navigator
            initialRouteName="Ingredients"
            screenOptions={{
                tabBarActiveTintColor: '#e91e63',
            }}
        >
            <Tab.Screen
                name="Ingredients"
                component={IngredientsScreen}
                options={{
                    tabBarLabel: 'My Pantry',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Recipes"
                component={RecipesScreen}
                options={{
                    tabBarLabel: 'Recipes',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="bell" color={color} size={size} />
                    ),
                    tabBarBadge: 3,
                }}
            />
            <Tab.Screen
                name="Liked"
                component={LikedScreen}
                options={{
                    tabBarLabel: 'Favourites',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Groceries"
                component={GroceriesScreen}
                options={{
                    tabBarLabel: 'Groceries',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default NavBar
