import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";

import IngredientsScreen from "./app/screens/IngredientsScreen";
import RecipesScreen from "./app/screens/RecipesScreen";
import LikedScreen from "./app/screens/LikedScreen";
import GroceriesScreen from "./app/screens/GroceriesScreen";
import SingleRecipeScreen from "./app/screens/SingleRecipeScreen";
import LoadingScreen from "./app/screens/LoadingScreen";
import NavBar from "./app/components/NavBar";

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Ingredients" NavBar={(props) => <NavBar {...props} />}>
          <Stack.Screen name="Ingredients" component={IngredientsScreen} />
          <Stack.Screen name="Recipes" component={RecipesScreen} />
          <Stack.Screen name="Liked" component={LikedScreen} />
          <Stack.Screen name="Groceries" component={GroceriesScreen} />
          <Stack.Screen name="SingleRecipe" component={SingleRecipeScreen} />
          <Stack.Screen name="Loading" component={LoadingScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
