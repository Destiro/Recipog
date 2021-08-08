import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import ingredientsScreen from "./pages/ingredientsScreen";
import recipesScreen from "./pages/recipesScreen";
import likedScreen from "./pages/likedScreen";
import singleRecipeScreen from "./pages/singleRecipeScreen";
import loadingScreen from "./pages/loadingScreen";
import groceriesScreen from "./pages/groceriesScreen";

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
