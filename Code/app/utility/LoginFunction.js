import React from "react";

export default function LoginFunction() {
    const [loginName, setLoginName] = React.useState(null);

    //Setting login name for retrieval
    function updateLoginName(newLoginName) {
        if (newLoginName != null) {
            setLoginName(newLoginName);
            console.log("I updated loginName: " + newLoginName);
        }
        RootStack.navigate('App');
    }

    //Get login name for primary app pages
    function getLoginName() {
        return loginName;
    }
}
