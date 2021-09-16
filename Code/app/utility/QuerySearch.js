/**
 * Queries the list of filtered ingredients and then returns the new list
 *
 * @param list
 * @param search
 * @returns {*}
 * @constructor
 */
export default function QuerySearch(list, search, isIngred){
    if(isIngred){ return list.filter((item) => item.name.toLowerCase().indexOf(search.toLowerCase()) > -1); }
    else{ return list.filter((item) => item.Name.toLowerCase().indexOf(search.toLowerCase()) > -1); }
}
