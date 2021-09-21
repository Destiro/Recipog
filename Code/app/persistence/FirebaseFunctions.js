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
