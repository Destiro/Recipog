import React, {useEffect, useState} from 'react';
import Colours from "../config/Colours";
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Header from "../components/Header";
import {db} from "../config/FirebaseConfig";
import IngredientItem from "../components/IngredientItem";
import SearchBar from "../components/SearchBar";
import DropDownFilter from "../components/DropDownFilter";
import RecipeItem from "../components/RecipeItem";

const RecipesScreen = (props) =>  {
    //Firestore variables
    const [recipes, setRecipes] = useState([]);
    const [displayRecipes, setDisplayRecipes] = useState([]);
    const [userIngredients, setUserIngredients] = useState([]);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const ref = db.firestore().collection("recipes");
    const userRef = db.firestore().collection("Users");

    //Loads data from firestore
    function getRecipes() {
        ref.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            });
            setRecipes(items);
            setLoading(true);
        })
    }

    //Loads user data from firestore
    useEffect(() => {
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
        fetchUser();
        getRecipes();
    }, [loading])

    //Lazy renders ingredients
    const renderItem = ({ item }) => (
        <RecipeItem
            title={item.Name}
            diff={item.Difficulty}
            time={item.Time}
        />
    );

    return (
        <View style={styles.container}>
            <Header title={"Recipes"} />
            <View style={styles.searchBox}>
                <SearchBar />
                <View style={{height: '10%'}} />
                <DropDownFilter />
            </View>
            <View style={styles.listView}>
                <FlatList
                    contentContainerStyle={styles.grid}
                    numColumns={1}
                    data={recipes}
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
