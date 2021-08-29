import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

import Colours from "../config/Colours";
import {db} from "../config/FirebaseConfig";

//Renders an Individual Ingredient
const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

const IngredientsScreen = () => {
    //Firestore variables
    const [ingredients, setIngredients] = useState([]);
    const [loading, setLoading] = useState(false);

    const ref = db.firestore().collection("Ingredients");

    //Loads data from firestore
    function getIngredients() {
        setLoading(true);
        ref.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            });
            setIngredients(items);
            setLoading(false);
        })
    }

    useEffect(() => {
        getIngredients();
    }, [])

    //Lazy renders ingredients
    const renderItem = ({ item }) => (
        <Item title={item.name} />
    );

    return (
        <View style={styles.container}>
            <View style={styles.titleHeader}>

            </View>
            <View style={styles.listView}>
                <FlatList
                    data={ingredients}
                    renderItem={renderItem}
                    keyExtractor={item => item.name}
                />
            </View>
        </View>
    );
}

const fetchIngredients = async () => {
    const firestore = db.firestore();
    const data = await firestore.collection("Ingredients").get();
    const ingredients = data.docs.map(doc => doc.data());
    return ingredients;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    titleHeader: {
        backgroundColor: Colours.light_grey,
        width: '100%',
        height: '15%',
    },
    listView: {
        backgroundColor: Colours.white,
        width: '100%',
        height: '85%',
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});

export default IngredientsScreen;
