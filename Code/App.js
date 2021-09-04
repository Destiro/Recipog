import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from "@react-navigation/stack";

import NavBar from "./app/components/NavBar";
import LoginScreen from "./app/screens/LoginScreen";
import SignupScreen from "./app/screens/SignupScreen";

import LoginFunction from "./app/utility/LoginFunction";

const RootStack = createStackNavigator();

const App = () => {

    return (
        <NavigationContainer>
            <RootStack.Navigator headerMode={"none"} initialRouteName={"Login"}>
                <RootStack.Screen name={"App"}
                                  component={NavBar}
                />
                <RootStack.Screen name={"Login"}
                                  component={LoginScreen}
                />
                <RootStack.Screen name={"Signup"}
                                  component={SignupScreen}
                />
            </RootStack.Navigator>
        </NavigationContainer>
    );
};


export default App;
