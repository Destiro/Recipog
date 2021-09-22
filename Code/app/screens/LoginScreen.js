import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, Button, TouchableWithoutFeedback} from 'react-native';
import { TextInput } from 'react-native-paper';

import Colours from "../config/Colours";
import CheckLogin from "../utility/CheckLogin";
import {getUsers} from "../persistence/FirebaseFunctions";

/**
 * Login to account to continue using the application or
 * navigate to the signup page.
 *
 * @param navigation
 * @returns {JSX.Element}
 * @constructor
 */
const LoginScreen = ({navigation}) => {
    const [login, setLogin] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers(function(data){
            setUsers(data);
        });
    }, [])

    //Checks if this is a valid user, then navigates to ingredients page if valid
    function checkLogin(login, password){
        if(!CheckLogin(login,password,users)){
            alert("Incorrect user or pass! >:(");
        }else{
            navigation.navigate("App", { login: login })
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerStyle}>
                <Text style={styles.title}> Recipog </Text>
            </View>
            <View style={styles.loginBox}>
                <TextInput
                    label="Username"
                    value={login}
                    onChangeText={text => setLogin(text)}
                    style={{backgroundColor: Colours.white}}
                />
                <View style={{paddingBottom: 30, backgroundColor: Colours.purple_primary}} />
                <TextInput
                    label="Password"
                    value={password}
                    secureTextEntry={true}
                    onChangeText={text => setPassword(text)}
                    style={{backgroundColor: Colours.white}}
                />
                <View style={{paddingBottom: 30, backgroundColor: Colours.purple_primary}} />
                <Button title={"Login"} style={styles.button} onPress={() => checkLogin(login,password)}  />
            </View>
            <TouchableWithoutFeedback onPress={() => navigation.navigate("Signup")}>
                <View style={styles.signUpFooter}>
                    <Text style={styles.signUpText}> Dont have an account?</Text>
                    <Text style={styles.signUpText2}> Sign up </Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colours.purple_primary,
    },
    title: {
        fontSize: 70,
        color: Colours.white,
    },
    headerStyle: {
        backgroundColor: Colours.purple_primary,
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        height: '35%',
    },
    loginBox: {
        width: '80%',
        height: '50%',
        backgroundColor: Colours.purple_primary,
    },
    button: {
        width: '70%',
        backgroundColor: Colours.blue_primary,
        height: 30,
    },
    signUpFooter: {
        width: '80%',
        height: '10%',
        alignItems: 'center',
        backgroundColor: Colours.purple_primary,
        justifyContent: 'center',
    },
    signUpText: {
        fontSize: 18,
        color: Colours.light_grey,
    },
    signUpText2: {
        fontSize: 18,
        color: Colours.white,
    }
});

export default LoginScreen;
