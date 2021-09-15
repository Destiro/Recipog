import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';

import Colours from "../config/Colours";
import Display from "../config/Display";
import {db} from "../config/FirebaseConfig";
import Header from "../components/Header";
import IngredientItem from "../components/IngredientItem";
import SaveFAB from "../components/SaveFAB";
import ClearFAB from "../components/ClearFAB";
import SearchBar from "../components/SearchBar";
import IngredientsFilter from "../components/IngredientsFilter";
import QueryFilter from "../utility/QueryFilter";
import QuerySearch from "../utility/QuerySearch";

const IngredientsScreen = (props) => {
    //Wall of state variables :(((((((
    const [ingredients, setIngredients] = useState([]);
    const [userIngredients, setUserIngredients] = useState([]);
    const [filterIngredients, setFilterIngredients] = useState([]);
    const [user, setUser] = useState(null);
    const [retrievedIngreds, setRetrievedIngreds] = useState(false);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");

    const ref = db.firestore().collection("Ingredients");
    const userRef = db.firestore().collection("Users");

    //Loads data from firestore
    function getIngredients() {
        ref.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            });
            setIngredients(items);
            setFilterIngredients(items);
            setLoading(true);
        })
    }

    const fetchUser = async() => {
        try{
            const response = await userRef.doc(props.login).get();
            if(response.exists){

                if(user === null) {
                    setUserIngredients(response.data().ingredients);
                }
                setUser(response.data());
                setLoading(true);
            }
        } catch(err) {
            console.error(err);
        }
    }

    //Loads user data from firestore
    useEffect(() => {
        if(!retrievedIngreds){
            fetchUser();
            getIngredients();
            setRetrievedIngreds(true);
        }
        console.log("reloaded");
    }, [loading])

    //User taps on an ingredient functionality
    const touchHandler = (title) => {
        //User doesnt have ingredient => add
        if(!userIngredients.includes(title)) {
            let newUserIngredients = userIngredients;
            newUserIngredients.push(title);
            setUserIngredients(newUserIngredients);

        //User has ingredient => remove
        }else{
            setUserIngredients((prevIngredients) => {
                return prevIngredients.filter(ingred => ingred !== title)
            })
        }

        //Force a render
        setLoading(false);
    }

    //Saves ingredients to firebase
    const saveHandler = () => {
        userRef.doc(props.login).set({
            username: user.username,
            password: user.password,
            ingredients: userIngredients,
            groceries: user.groceries,
            favourites: user.favourites
        }).then(function () {
            console.log("Successfully saved ingredients!");
        }).catch(function (error) {
            console.error("Error saving ingredients: ", error)
        });
    }

    //Clears the user ingredients list
    const clearHandler = () => {
        setUserIngredients([]);
        setLoading(false);
    }

    const filterHandler = (filter) => {
        if(ingredients !== []){
            setFilterIngredients(QueryFilter(ingredients, filter, true))
            if(search !== ""){ searchHandler(search) }
            else{ setLoading(false); }
        }
    }

    const searchHandler = (newSearch) => {
        setSearch(newSearch);
        setFilterIngredients(QuerySearch(ingredients, newSearch));
        setLoading(false);
    }

    //Lazy renders ingredients
    const renderItem = ({ item }) => (
        <IngredientItem
            title={item.name}
            image={item.image}
            touchHandler={touchHandler}
            selected={userIngredients.includes(item.name)}
        />
    );

    return (
        <View style={styles.container}>
            <Header title={"My Pantry"} />
            <View style={styles.searchBox}>
                <SearchBar searchHandler={searchHandler} />
                <View style={{height: '5%'}} />
                <IngredientsFilter filterHandler={filterHandler}/>
            </View>
            <View style={styles.listView}>
                <FlatList
                    contentContainerStyle={styles.grid}
                    numColumns={2}
                    initialNumToRender={8}
                    data={filterIngredients}
                    renderItem={renderItem}
                    keyExtractor={item => item.name}
                />
            </View>
            <SaveFAB saveHandler={saveHandler}/>
            <ClearFAB clearHandler={clearHandler}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    searchBox: {
        backgroundColor: Colours.white,
        alignItems: 'center',
        width: '100%',
        height: '15%',
    },
    listView: {
        backgroundColor: Colours.white,
        flexDirection: "column",
        justifyContent: "space-evenly",
        width: '100%',
        height: '75%',
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
    item2: {
        backgroundColor: Colours.blue_secondary,
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
});

export default IngredientsScreen;
