import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';

import Colours from "../config/Colours";
import Display from "../config/Display";
import Header from "../components/Header";
import IngredientItem from "../components/IngredientItem";
import SaveFAB from "../components/SaveFAB";
import ClearFAB from "../components/ClearFAB";
import SearchBar from "../components/SearchBar";
import IngredientsFilter from "../components/IngredientsFilter";
import QueryFilter from "../utility/QueryFilter";
import QuerySearch from "../utility/QuerySearch";
import {FetchIngredients, FetchUserIngredients, SaveIngredients} from "../persistence/FirebaseFunctions";

const IngredientsScreen = (props) => {
    //Wall of state variables :(((((((
    const [ingredients, setIngredients] = useState([]);
    const [userIngredients, setUserIngredients] = useState([]);
    const [filterIngredients, setFilterIngredients] = useState([]);
    const [user, setUser] = useState(null);
    const [retrievedIngreds, setRetrievedIngreds] = useState(false);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");

    //Force re-render on loading change
    useEffect(() => {}, [loading])

    //User taps on an ingredient functionality
    const touchHandler = (title) => {
        //User doesnt have ingredient => add
        if(!userIngredients.includes(title)) {
            let newList = [title];
            for(let i=0; i<userIngredients.length; i++){
                newList.push(userIngredients[i])
            }
            setUserIngredients(newList);

        //User has ingredient => remove
        }else{
            setUserIngredients((prevIngredients) => {
                return prevIngredients.filter(ingred => ingred !== title)
            })
        }

        //Force a render
        setLoading(!loading);
    }

    //Saves ingredients to firebase
    const saveHandler = () => {
        SaveIngredients(user, props.login, userIngredients);
    }

    //Clears the user ingredients list
    const clearHandler = () => {
        setUserIngredients([]);
        setLoading(!loading);
    }

    const filterHandler = (filter) => {
        if(ingredients !== []){
            setFilterIngredients(QueryFilter(ingredients, filter, true))
            if(search !== ""){ searchHandler(search) }
            else{ setLoading(!loading); }
        }
    }

    const searchHandler = (newSearch) => {
        setSearch(newSearch);
        setFilterIngredients(QuerySearch(ingredients, newSearch, true));
        setLoading(!loading);
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

    //Loads user and ingredient data only once
    if(!retrievedIngreds){
        FetchUserIngredients(props.login, function(userIngreds, user){
            setUserIngredients(userIngreds);
            setUser(user);
        })

        FetchIngredients(function(data){
            setIngredients(data);
            setFilterIngredients(data);
        });

        setRetrievedIngreds(true);
    }

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
                    data={filterIngredients}
                    extraData={loading}
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
