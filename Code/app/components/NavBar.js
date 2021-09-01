import React from 'react';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createStackNavigator} from "@react-navigation/stack";

import RecipesScreen from "../screens/RecipesScreen";
import LikedScreen from "../screens/LikedScreen";
import GroceriesScreen from "../screens/GroceriesScreen";
import IngredientsScreen from "../screens/IngredientsScreen";
import SingleRecipeScreen from "../screens/SingleRecipeScreen";
import Colours from "../config/Colours";

const Tab = createBottomTabNavigator();
const RecipeStack = createStackNavigator();

//Stack navigator from Recipes to Single Recipe
const RecipeStackScreens = () => (
    <RecipeStack.Navigator initialRouteName={"Recipe"} screenOptions={{headerShown: false}}>
        <RecipeStack.Screen name={"Recipe"} component={RecipesScreen} />
        <RecipeStack.Screen name={"SingleRecipe"} component={SingleRecipeScreen} />
    </RecipeStack.Navigator>
);

//Stack navigator from Liked to Single Recipe
const LikedStackScreens = () => (
    <RecipeStack.Navigator initialRouteName={"Liked"} screenOptions={{headerShown: false}}>
        <RecipeStack.Screen name={"Liked"} component={LikedScreen} />
        <RecipeStack.Screen name={"SingleRecipe"} component={SingleRecipeScreen} />
    </RecipeStack.Navigator>
);


const NavBar = () => {
    return (
        <Tab.Navigator
            initialRouteName="Ingredients"
            screenOptions={{headerShown: false}}>
            <Tab.Screen
                name="Ingredients"
                component={IngredientsScreen}
                options={{
                    tabBarLabel: 'My Pantry',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="fridge" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Recipes"
                component={RecipeStackScreens}
                options={{
                    tabBarLabel: 'Recipes',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="pot-steam" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Liked Recipes"
                component={LikedStackScreens}
                options={{
                    tabBarLabel: 'Favourites',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="heart" color={color} size={size} />
                    ),
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
                }}
            />
        </Tab.Navigator>
    )
}

export default NavBar
