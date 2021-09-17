import React from 'react';
import Colours from "../config/Colours";
import { StyleSheet, Text, View } from 'react-native';
import Header from "../components/Header";
import AddInput from "../components/AddInput";

const MealPlannerScreen = (props) =>  {

    //Adds a grocery item to the list
    const submitHandler = (text) => {
        if(text !== '') {
            console.log("Calories: "+text);
        }
    }

    return (
        <View style={styles.container}>
            <Header title={"Meal Planner"} />
            <View style={styles.contentBox}>
                <AddInput pText={"Number of Calories..."} buttonText={"Enter Calories"} submitHandler={submitHandler} />

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colours.white,
    },
    contentBox: {
        width: '80%',
        height: '90%',
        backgroundColor: Colours.white,
    },
});

export default MealPlannerScreen;
