import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, Button, TouchableWithoutFeedback} from 'react-native';
import { TextInput } from 'react-native-paper';

import Colours from "../config/Colours";
import {db} from "../config/FirebaseConfig";

const LoginScreen = ({navigation}) => {
    const [login, setLogin] = React.useState('');
    const [password, setPassword] = React.useState('');

    const [users, setUsers] = useState([]);
    const ref = db.firestore().collection("Users");

    //Loads data from firestore
    function getUsers() {
        ref.onSnapshot((querySnapshot) => {
            const users = [];
            querySnapshot.forEach((doc) => {
                users.push(doc.data());
            });
            setUsers(users);
        })
    }

    useEffect(() => {
        getUsers();
    }, [])

    //Checks if this is a valid user, then navigates to ingredients page if valid
    function checkLogin(login, password){
        let isValidName = false;
        if (login !== '' && password !== '') {
            for(let i=0; i<users.length; i++){
                if(users[i].username === login && users[i].password === password){
                    isValidName = true;
                }
            }
        }

        if(!isValidName){
            alert("Incorrect user or pass! >:(");
        }else{
            navigation.navigate("App", { username: login })
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
