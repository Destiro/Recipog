import React, {useState} from 'react';
import Colours from "../config/Colours";
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Header from "../components/Header";
import GroceryItem from "../components/GroceryItem";

const GroceriesScreen = (props) =>  {
    const [groceries, setGroceries] = useState([
        {text: 'coffee', key: 'coffee'},
        {text: 'cupcakes', key: 'cupcakes'},
        {text: 'chocolate', key: 'chocolate'}
    ]);

    const pressHandler = (key) => {
        setGroceries((prevGroceries) => {
            return prevGroceries.filter(groceries => groceries.key != key)
        })
    }

    return (
        <View style={styles.container}>
            <Header title={"Groceries"} />
            <View style={styles.contentBox}>
                <View style={styles.list}>
                    <FlatList data={groceries}
                              renderItem={({ item }) => (
                                  <GroceryItem item={item} pressHandler={pressHandler}/>
                              )} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colours.light_grey,
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
