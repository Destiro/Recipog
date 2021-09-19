import React from "react";
import {Text, View} from "react-native";

export default function MealList({mealData}) {
    const nutrients = mealData.nutrients;

    return (
      <View>
          <Text> Macros </Text>
          <Text>
              Calories: {nutrients.calories.toFixed(0)}
              Carbohydrates: {nutrients.carbohydrates.toFixed(0)}
              Fat: {nutrients.fat.toFixed(0)}
              Protein: {nutrients.protein.toFixed(0)}
          </Text>
      </View>
    );
}
