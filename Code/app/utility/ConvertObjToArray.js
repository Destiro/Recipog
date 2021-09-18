/**
 * Grabs all parameters and their values from an object and returns them in an array.
 * Used to get the ingredients and their quantities for recipe display.
 *
 * @param list
 * @returns {[]}
 * @constructor
 */
export default function ConvertObjToArray(list) {
    let returnList = [];

    for (var key in list) {
        returnList.push({key: key, value: getValueFromKey(list, key)});
    }

    return returnList;
}

function getValueFromKey(list, key){
    return list[key];
}
