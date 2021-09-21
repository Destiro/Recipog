import Env from "../config/EnvironmentVariables";

/**
 * Retrieving information from my Spoonacular API.
 * Used to fetch a daily meal planner, its nutritional values and images associated to recipes.
 */
export default function getMealData(calories, callback) {
    fetch(
        `https://api.spoonacular.com/mealplanner/generate?apiKey=`+Env.spoonApiKey+`&timeFrame=day&targetCalories=`+calories
    )
        .then((response) => response.json())
        .then((data) => {
            console.log("1"+data);
            callback(data);
        })
        .catch(() => {
            console.log("error");
        });
}
