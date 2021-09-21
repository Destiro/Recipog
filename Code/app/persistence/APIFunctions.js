import Env from "../config/EnvironmentVariables";

/**
 * Retrieving information from my Spoonacular API.
 * Used to fetch a daily meal planner, its nutritional values and images associated to recipes.
 */
export function getMealData(calories, callback) {
    fetch(
        `https://api.spoonacular.com/mealplanner/generate?apiKey=`+Env.spoonApiKey+`&timeFrame=day&targetCalories=`+calories
    )
        .then((response) => response.json())
        .then((data) => {
            callback(data);
        })
        .catch(() => {
            console.log("error");
        });
}

/**
 * Retrieving images from the image recipe database accessing spoonacular recipes.
 *
 * @param id
 * @param callback
 */
export function getMealImages(id, callback){
    fetch(
        `https://api.spoonacular.com/recipes/`+id+`/information?apiKey=`+Env.spoonApiKey+`&includeNutrition=false`
    )
        .then((response)=> response.json())
        .then((data) => {
            callback(data.image);
        })
        .catch(() => {
            console.log("error");
        })
}
