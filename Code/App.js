import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from "@react-navigation/stack";

import NavBar from "./app/components/NavBar";
import LoginScreen from "./app/screens/LoginScreen";
import SignupScreen from "./app/screens/SignupScreen";

const RootStack = createStackNavigator();
const LoginStack = createStackNavigator();

//Login screens stack
const LoginStackScreens = () => (
    <LoginStack.Navigator initialRouteName={"Login"} screenOptions={{headerShown: false}}>
        <LoginStack.Screen name={"Login"} component={LoginScreen} />
        <LoginStack.Screen name={"Signup"} component={SignupScreen} />
    </LoginStack.Navigator>
);

const App = () => {
    const [loginName, setLoginName] = React.useState(null);

    //Setting login name for retrieval
    function updateLoginName(newLoginName) {
        if(newLoginName != null) {
            setLoginName(newLoginName);
            console.log("I updated loginName: " + newLoginName);
        }
    }

    //Get login name for primary app pages
    function getLoginName(){
        return loginName;
    }

    return (
        <NavigationContainer>
            <RootStack.Navigator headerMode={"none"} initialRouteName={"Authentication"}>
                <RootStack.Screen name={"App"}
                                  component={NavBar}
                                  loginName={getLoginName()}
                />
                <RootStack.Screen name={"Authentication"}
                                  component={LoginStackScreens}
                                  loginName={updateLoginName()}
                />
            </RootStack.Navigator>
        </NavigationContainer>
    );
};


export default App;
