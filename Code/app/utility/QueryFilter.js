export default function QueryFilter(list, filter, isIngredient){
    let returnedList = [];
    if(list === []){ return [] }

    if(filter === "All Categories"){ return list; }
    //Checks if the filter is for ingredient or recipe
    if(isIngredient){
        for(let i=0; i< list.length; i++){
            if(list[i].category === filter){
                returnedList.push(list[i]);
            }
        }

    //I am a recipe
    }else{
        for(let i=0; i< list.length; i++){
            if(list[i].Tags === filter){
                returnedList.push(list[i]);
            }
        }
    }
    return returnedList;
}
