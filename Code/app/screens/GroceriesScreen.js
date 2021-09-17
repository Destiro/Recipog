import React, {useEffect, useState} from 'react';
import Colours from "../config/Colours";
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Header from "../components/Header";
import GroceryItem from "../components/GroceryItem";
import AddInput from "../components/AddInput";
import SaveFAB from "../components/SaveFAB";
import ClearFAB from "../components/ClearFAB";
import {db} from "../config/FirebaseConfig";

const GroceriesScreen = (props) =>  {
    // Reference to current users grocery list
    const ref = db.firestore().collection("Users");
    const [groceries, setGroceries] = useState([]);
    const [user, setUser] = useState(null);
    const [loaded, setLoading] = useState(false);

    //Retrieve initial Grocery list from firestore
    useEffect(() => {
        const fetchData = async() => {
            try{
                const response = await ref.doc(props.login).get();
                if(response.exists){
                    setUser(response.data());
                    setGroceries(response.data().groceries);
                    setLoading(true);
                }
            } catch(err) {
                console.error(err);
            }
        }
        fetchData();
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
        ref.doc(props.login).set({
            username: user.username,
            password: user.password,
            ingredients: user.ingredients,
            groceries: groceries,
            favourites: user.favourites
        }).then(function () {
            console.log("Successfully saved groceries!");
        }).catch(function (error) {
            console.error("Error saving groceries: ", error)
        });
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
