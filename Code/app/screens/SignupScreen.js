import React from 'react';
import {StyleSheet, View, Text, Button, TouchableWithoutFeedback} from 'react-native';
import {TextInput} from "react-native-paper";

import Colours from "../config/Colours";
import {db} from "../config/FirebaseConfig";
import {AddNewUser} from "../persistence/FirebaseFunctions";

const SignupScreen = ({navigation}) => {
    const [login, setLogin] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [password2, setPassword2] = React.useState('');

    //Adds current inputted text as a new entry in firestore
    function addLogin(username, password, password2) {
        if (password !== password2) {
            alert("Passwords do not match!!")
        } else {
            if (login !== '' && password !== '') {
                AddNewUser(login, password);
                //Route back to login page
                navigation.navigate("Login");
            } else {
                //An empty given
                alert("Please enter a valid username and password! >:(");
            }
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerStyle}/>
            <View style={styles.SignupBox}>
                <Text style={styles.title}> Create Account </Text>
                <View style={{paddingBottom: 20, backgroundColor: Colours.purple_primary}}/>
                <TextInput
                    label="Username"
                    value={login}
                    onChangeText={text => setLogin(text)}
                    style={{backgroundColor: Colours.white}}
                />
                <View style={styles.space}/>
                <TextInput
                    label="Password"
                    value={password}
                    secureTextEntry={true}
                    onChangeText={text => setPassword(text)}
                    style={{backgroundColor: Colours.white}}
                />
                <View style={styles.space}/>
                <TextInput
                    label="Confirm Password"
                    value={password2}
                    secureTextEntry={true}
                    onChangeText={text => setPassword2(text)}
                    style={{backgroundColor: Colours.white}}
                />
                <View style={styles.space}/>
                <Button title={"Create Account"} style={styles.button}
                        onPress={() => addLogin(login, password, password2)}/>
            </View>
            <TouchableWithoutFeedback onPress={() => navigation.navigate("Login")}>
                <View style={styles.signUpFooter}>
                    <Text style={styles.signUpText}> Oops! I have an Account.</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colours.purple_primary,
    },
    headerStyle: {
        backgroundColor: Colours.purple_primary,
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        height: '19%',
    },
    title: {
        fontSize: 45,
        color: Colours.white,
    },
    SignupBox: {
        width: '80%',
        height: '60%',
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
    space: {
        paddingBottom: 20,
        backgroundColor: Colours.purple_primary
    }
});

export default SignupScreen;
