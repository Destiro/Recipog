import React, {useEffect, useState} from 'react';
import Colours from "../config/Colours";
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Header from "../components/Header";
import {db} from "../config/FirebaseConfig";
import SearchBar from "../components/SearchBar";
import IngredientsFilter from "../components/IngredientsFilter";
import RecipeItem from "../components/RecipeItem";
import FindRecipes from "../utility/FindRecipes";

const RecipesScreen = (props) =>  {
    //Firestore variables
    const [recipes, setRecipes] = useState([]);
    const [displayRecipes, setDisplayRecipes] = useState([]);
    const [userIngredients, setUserIngredients] = useState([]);
    const [retrievedRecipes, setRetrievedRecipes] = useState(false);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const ref = db.firestore().collection("recipes");
    const userRef = db.firestore().collection("Users");

    //Loads data from firestore
    async function getRecipes() {
        await ref.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            });
            setRecipes(items);
            fetchUser(items)
        })
    }

    async function fetchUser(parsedRecipes) {
        await userRef.onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if(doc.data().username === props.login){
                    setUserIngredients(doc.data().ingredients)
                    setUser(doc.data())
                    setDisplayRecipes(FindRecipes(parsedRecipes, doc.data().ingredients));
                }
            });
        })
    }

    //Loads user data from firestore
    useEffect(() => {
        setDisplayRecipes(FindRecipes(recipes, userIngredients));
    }, [loading])

    //Lazy renders ingredients
    const renderItem = ({ item }) => (
        <RecipeItem
            title={item.Name}
            diff={item.Difficulty}
            time={item.Time}
            image={item.image}
        />
    );

    //Loads user and ingredient data
    if(!retrievedRecipes){
        getRecipes();
        setRetrievedRecipes(true);
        setLoading(!loading);
    }

    return (
        <View style={styles.container}>
            <Header title={"Recipes"} />
            <View style={styles.searchBox}>
                <SearchBar />
                <View style={{height: '5%'}} />
                <IngredientsFilter />
            </View>
            <View style={styles.listView}>
                <FlatList
                    contentContainerStyle={styles.grid}
                    numColumns={1}
                    data={displayRecipes}
                    renderItem={renderItem}
                    keyExtractor={item => item.Name}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        alignItems: "center",
        justifyContent: "space-evenly",
        width: '100%',
        height: '75%',
    },
});

export default RecipesScreen;
