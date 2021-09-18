/**
 * Given the recipe name, retrieve the whole recipe from a list
 *
 * @param recipeList
 * @param name
 * @constructor
 */
export default function FindRecipes(recipeList, name){

    //Iterate through all possible recipes
    for(let i=0; i<recipeList.length; i++){

        //Found recipe, return
        if(recipeList[i].Name === name){
            return recipeList[i];
        }
    }

    return null;
}
