import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import ingredientsScreen from "./pages/IngredientsScreen";
import recipesScreen from "./pages/RecipesScreen";
import likedScreen from "./pages/LikedScreen";
import singleRecipeScreen from "./pages/SingleRecipeScreen";
import loadingScreen from "./pages/LoadingScreen";
import groceriesScreen from "./pages/GroceriesScreen";

export default function App() {
  return (
    <BrowserRouter>
      <Route path = "/ingredients" component = {ingredientsScreen} />
      <Route path = "/" exact={true} component = {ingredientsScreen} />
      <Route path = "/recipes" component = {recipesScreen} />
      <Route path = "/liked" component = {likedScreen} />
      <Route path = "/singlerecipe" component = {singleRecipeScreen} />
      <Route path = "/loading" component = {loadingScreen} />
      <Route path = "/groceries" component={groceriesScreen}/>
    </BrowserRouter>
  );
}
