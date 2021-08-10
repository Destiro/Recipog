import { createStackNavigator } from '@react-navigation/stack';
import ingredientsScreen from "./pages/IngredientsScreen";
import recipesScreen from "./pages/RecipesScreen";
import likedScreen from "./pages/LikedScreen";
import singleRecipeScreen from "./pages/SingleRecipeScreen";
import loadingScreen from "./pages/LoadingScreen";
import groceriesScreen from "./pages/GroceriesScreen";
import React from "react";

const Stack = createStackNavigator();

function PageStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Ingredients" component={ingredientsScreen} />
            <Stack.Screen name="Recipes" component={recipesScreen} />
            <Stack.Screen name="Liked Recipes" component={likedScreen} />
            <Stack.Screen name="Single Recipe" component={singleRecipeScreen} />
            <Stack.Screen name="Loading" component={loadingScreen} />
            <Stack.Screen name="Grocery List" component={groceriesScreen} />
        </Stack.Navigator>
    );
}

export default PageStack
