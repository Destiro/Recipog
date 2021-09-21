import {db} from "../config/FirebaseConfig";

/**
 * Firebase functions to retrieve and push data to firebase.
 * Used in different pages, pulling different data.
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

export function FetchIngredients(callback){
    db.firestore().collection("Ingredients").onSnapshot((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
            items.push(doc.data());
        });
        callback(items);
    })
}

export function SaveIngredients(user, username, userIngredients){
    console.log(user);
    console.log(username);
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

export function FetchUserIngredients(username, callback){
    db.firestore().collection("Users").onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            if(doc.data().username === username){
                callback(doc.data().ingredients, doc.data())
            }
        });
    })
}

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

export function FetchUserGroceries(username, callback){
    db.firestore().collection("Users").onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            if(doc.data().username === username){
                callback(doc.data().groceries, doc.data())
            }
        });
    })
}
