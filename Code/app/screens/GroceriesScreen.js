import React, {useEffect, useState} from 'react';
import Colours from "../config/Colours";
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Header from "../components/Header";
import GroceryItem from "../components/GroceryItem";
import AddInput from "../components/AddInput";
import SaveFAB from "../components/SaveFAB";
import ClearFAB from "../components/ClearFAB";
import {db} from "../config/FirebaseConfig";
import {FetchUserGroceries, SaveGroceries} from "../persistence/FirebaseFunctions";

const GroceriesScreen = (props) =>  {
    // Reference to current users grocery list
    const [groceries, setGroceries] = useState([]);
    const [user, setUser] = useState(null);
    const [loaded, setLoading] = useState(false);

    //Retrieve initial Grocery list from firestore
    useEffect(() => {
        FetchUserGroceries(props.login, function(userGroceries, user){
            setUser(user);
            setGroceries(userGroceries)
        })
        setLoading(true);
    }, [loaded]);

    //Removes a grocery item if tapped
    const pressHandler = (key) => {
        setGroceries((prevGroceries) => {
            return prevGroceries.filter(groceries => groceries.key !== key)
        })
    }

    //Adds a grocery item to the list
    const submitHandler = (text) => {
        if(text !== '') {
            setGroceries((prevGroceries) => {
                return [
                    {text: text, key: text + Math.random().toString()},
                    ...prevGroceries
                ]
            })
        }
    }

    //Saves groceries to firebase
    const saveHandler = () => {
        SaveGroceries(props.login, user, groceries);
    }

    //Clears the grocery list
    const clearHandler = () => {
        setGroceries([]);
    }

    return (
        <View style={styles.container}>
            <Header title={"Groceries"} />
            <View style={styles.contentBox}>
                <AddInput pText={"A Grocery Item..."} buttonText={"Add Grocery Item"} submitHandler={submitHandler} />
                <View style={styles.list} >
                    <FlatList data={groceries}
                              renderItem={({ item }) => (
                                  <GroceryItem item={item} pressHandler={pressHandler}/>
                              )} />
                </View>
            </View>
            <SaveFAB saveHandler={saveHandler}/>
            <ClearFAB clearHandler={clearHandler}/>
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
    list: {
        backgroundColor: Colours.white,
        width: '100%',
        height: '80%',
    }
});

export default GroceriesScreen;
