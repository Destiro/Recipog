import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Text, FlatList, Image, TouchableWithoutFeedback} from 'react-native';

import Colours from "../config/Colours";
import Display from "../config/Display";
import {db} from "../config/FirebaseConfig";

//Renders an Individual Ingredient
const Item = ({ title, image }) => (
    <TouchableWithoutFeedback onPress={() => console.log(title)}>
    <View style={styles.item}>

            <Image style={{width: '100%', height: '90%', paddingTop: 10}}
                   source={require('../assets/images/'+image)} />
            <Text style={styles.title}>{title}</Text>

    </View>
    </TouchableWithoutFeedback>
);

function toggleHighlight(title){
    console.log(title)
}

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
        <Item title={item.name} image={item.image} />
    );

    return (
        <View style={styles.container}>
            <View style={styles.titleHeader}>
                <Text style={{fontSize: 32}}> Search bar and filters </Text>
            </View>
            <View style={styles.listView}>
                <FlatList
                    contentContainerStyle={styles.grid}
                    numColumns={2}
                    data={ingredients}
                    renderItem={renderItem}
                    keyExtractor={item => item.name}
                />
            </View>
        </View>
    );
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
        flexDirection: "column",
        justifyContent: "space-evenly",
        width: '100%',
        height: '85%',
    },
    item: {
        backgroundColor: Colours.blue_primary,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: Display.width/2.2,
        height: Display.width/2.2,
    },
    grid: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        paddingTop: 10,
        fontSize: 18,
        color: Colours.white,
    },
});

export default IngredientsScreen;
