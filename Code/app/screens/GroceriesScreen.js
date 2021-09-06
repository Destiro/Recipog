import React, {useState} from 'react';
import Colours from "../config/Colours";
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Header from "../components/Header";
import GroceryItem from "../components/GroceryItem";
import AddGrocery from "../components/AddGrocery";
import SaveFAB from "../components/SaveFAB";
import ClearFAB from "../components/ClearFAB";

const GroceriesScreen = (props) =>  {
    const [groceries, setGroceries] = useState([
        {text: 'coffee', key: '1'},
        {text: 'cupcakes', key: '2'},
        {text: 'chocolate', key: '3'}
    ]);

    const pressHandler = (key) => {
        setGroceries((prevGroceries) => {
            return prevGroceries.filter(groceries => groceries.key !== key)
        })
    }

    const submitHandler = (text) => {
        setGroceries((prevGroceries) => {
            return [
                {text: text, key: text+Math.random().toString() },
                ...prevGroceries
            ]
        })
    }

    return (
        <View style={styles.container}>
            <Header title={"Groceries"} />
            <View style={styles.contentBox}>
                <AddGrocery submitHandler={submitHandler} />
                <View style={styles.list} >
                    <FlatList data={groceries}
                              renderItem={({ item }) => (
                                  <GroceryItem item={item} pressHandler={pressHandler}/>
                              )} />
                </View>
            </View>
            <SaveFAB />
            <ClearFAB />
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
