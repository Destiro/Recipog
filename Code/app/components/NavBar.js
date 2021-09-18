import React from 'react';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createStackNavigator} from "@react-navigation/stack";

import RecipesScreen from "../screens/RecipesScreen";
import MealPlannerScreen from "../screens/MealPlannerScreen";
import GroceriesScreen from "../screens/GroceriesScreen";
import IngredientsScreen from "../screens/IngredientsScreen";
import SingleRecipeScreen from "../screens/SingleRecipeScreen";

const Tab = createBottomTabNavigator();
const RecipeStack = createStackNavigator();

//Stack navigator from Recipes to Single Recipe
const RecipeStackScreens = (props) => (
    <RecipeStack.Navigator initialRouteName={"Recipe"} screenOptions={{headerShown: false}}>
        <RecipeStack.Screen name={"Recipe"} children={()=><RecipesScreen login={props.login} />}/>
        <RecipeStack.Screen name={"SingleRecipe"} component={SingleRecipeScreen} />
    </RecipeStack.Navigator>
);

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
                children={()=><RecipeStackScreens login={route.params.login} route={route}/>}
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
