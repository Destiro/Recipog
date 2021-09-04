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
export function checkLoginName(newLoginName) {
    const dbRef = db.database().ref();
    let isValidName = false;
    if (newLoginName !== '') {
       // dbRef.get().then(value => {isValidName = (isValidName || value.child(newLoginName).exists())});
        //setLoginName(newLoginName);
        console.log("Login name is valid: " + isValidName);
    }
    return isValidName;
}

export default LoginFunction;
