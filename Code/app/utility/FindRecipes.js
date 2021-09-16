/**
 * Checks which recipes the user has all the ingredients for.
 *
 * @param recipeList
 * @param userIngredients
 * @constructor
 */
export default function FindRecipes(recipeList, userIngredients){
    let returnList = [];

    //Iterate through all possible recipes
    for(let i=0; i<recipeList.length; i++){

        let canRecipe = true;
        for(var key in recipeList[i].Ingredients){
            if(!userIngredients.includes(key)){
                canRecipe = false;
                break;
            }
        }

        if(canRecipe){
            returnList.push(recipeList[i]);
        }
    }

    return returnList;
}
