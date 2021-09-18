import React from 'react';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createStackNavigator} from "@react-navigation/stack";

import RecipesScreen from "../screens/RecipesScreen";
import MealPlannerScreen from "../screens/MealPlannerScreen";
import GroceriesScreen from "../screens/GroceriesScreen";
import IngredientsScreen from "../screens/IngredientsScreen";

const Tab = createBottomTabNavigator();

const NavBar = ({route}) => {
    return (
        <Tab.Navigator
            initialRouteName="Ingredients"
            screenOptions={{headerShown: false}}>
            <Tab.Screen
                name="Ingredients"
                children={()=><IngredientsScreen login={route.params.login}/>}
                options={{
                    tabBarLabel: 'My Pantry',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="fridge" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Recipes"
                children={()=><RecipesScreen login={route.params.login} />}
                options={{
                    tabBarLabel: 'Recipes',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="pot-steam" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Liked Recipes"
                children={()=> <MealPlannerScreen />}
                options={{
                    tabBarLabel: 'Meal Planner',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="hamburger" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Grocery List"
                children={()=><GroceriesScreen login={route.params.login}/>}
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
