import {db} from "../config/FirebaseConfig";
import FindRecipes from "../utility/FindRecipes";

/**
 * Firebase functions to retrieve and push data to firebase.
 * Used in different pages, pulling different data.
 */

/**
 * Getting all users from firestore
 *
 * @param callback
 */
export function getUsers(callback) {
    db.firestore().collection("Users").onSnapshot((querySnapshot) => {
        const users = [];
        querySnapshot.forEach((doc) => {
            users.push(doc.data());
        });
        callback(users);
    })
}

/**
 * Adding a new user to the user database
 *
 * @param username
 * @param password
 * @constructor
 */
export function AddNewUser(username, password) {
    db.firestore().collection("Users").doc(username).set({
        username: username,
        password: password,
        ingredients: [],
        groceries: []
    }).then(function () {
        console.log("User successfully added!");
    }).catch(function (error) {
        console.error("Error adding user: ", error)
    });
}

/**
 * Fetching all ingredients to display on the ingredients screen from firestore
 *
 * @param callback
 * @constructor
 */
export function FetchIngredients(callback){
    db.firestore().collection("Ingredients").onSnapshot((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
            items.push(doc.data());
        });
        callback(items);
    })
}

/**
 * Saving the user's selected ingredients to firestore to load on-launch later
 *
 * @param user
 * @param username
 * @param userIngredients
 * @constructor
 */
export function SaveIngredients(user, username, userIngredients){
    db.firestore().collection("Users").doc(username).set({
        username: user.username,
        password: user.password,
        ingredients: userIngredients,
        groceries: user.groceries,
    }).then(function () {
        console.log("Successfully saved ingredients!");
    }).catch(function (error) {
        console.error("Error saving ingredients: ", error)
    });
}

/**
 * Fetching the users selected ingredients.
 *
 * @param username
 * @param callback
 * @constructor
 */
export function FetchUserIngredients(username, callback){
    db.firestore().collection("Users").onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            if(doc.data().username === username){
                callback(doc.data().ingredients, doc.data())
            }
        });
    })
}

/**
 * Storing the users groceries on firestore.
 *
 * @param username
 * @param user
 * @param groceries
 * @constructor
 */
export function SaveGroceries(username, user, groceries){
    db.firestore().collection("Users").doc(username).set({
        username: user.username,
        password: user.password,
        ingredients: user.ingredients,
        groceries: groceries,
    }).then(function () {
        console.log("Successfully saved groceries!");
    }).catch(function (error) {
        console.error("Error saving groceries: ", error)
    });
}

/**
 * Fetching the users groceries from firestore.
 *
 * @param username
 * @param callback
 * @constructor
 */
export function FetchUserGroceries(username, callback){
    db.firestore().collection("Users").onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            if(doc.data().username === username){
                callback(doc.data().groceries, doc.data())
            }
        });
    })
}

/**
 * Fetching the recipes to be displayed on the recipes screen from firestore.
 *
 * @param username
 * @param callback
 * @constructor
 */
export function FetchRecipes(username, callback) {
    db.firestore().collection("recipes").onSnapshot((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
            items.push(doc.data());
        });
        getUserRecipes(items, username, callback)
    })
}

/**
 * Getting the user's recipes from firestore.
 *
 * @param recipes
 * @param username
 * @param callback
 */
function getUserRecipes(recipes, username, callback) {
    db.firestore().collection("Users").onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            if(doc.data().username === username){
                callback(recipes, doc.data().ingredients, FindRecipes(recipes, doc.data().ingredients));
            }
        });
    })
}
