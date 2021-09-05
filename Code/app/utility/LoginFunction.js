import React from "react";
import {db} from "../config/FirebaseConfig";

const LoginFunction = () => {
    const [loginName, setLoginName] = React.useState(null);

    function updateLoginName(newLoginName) {
        setLoginName(newLoginName);
        console.log("I updated loginName: " + newLoginName);
    }

    //Get login name for primary app pages
    function getLoginName() {
        return loginName;
    }
}

//Setting login name for retrieval
export function checkLoginName(username, password) {
    console.log(username + " : " + password);
    const ref = db.firestore().collection("Users");
    let isValidName = false;
    if (username !== '') {
        // dbRef.get().then(value => {isValidName = (isValidName || value.child(newLoginName).exists())});
        //setLoginName(newLoginName);
        console.log("Login name is valid: " + isValidName+" : "+username);
    }
    return isValidName;
}

export default LoginFunction;
