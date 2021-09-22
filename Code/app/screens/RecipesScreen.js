import React, {useEffect, useState} from 'react';
import Colours from "../config/Colours";
import {FlatList, StyleSheet, View} from 'react-native';
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import RecipeItem from "../components/RecipeItem";
import QueryFilter from "../utility/QueryFilter";
import QuerySearch from "../utility/QuerySearch";
import RecipeFilter from "../components/RecipeFilter";
import SingleRecipeScreen from "./SingleRecipeScreen";
import GetRecipeByName from "../utility/GetRecipeByName";
import {FetchRecipes} from "../persistence/FirebaseFunctions";

/**
 * Recipes screen to display all recipes the user can cook with
 * given the ingredients they currently have.
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const RecipesScreen = (props) =>  {
    //Firestore variables
    const [recipes, setRecipes] = useState([]);
    const [displayRecipes, setDisplayRecipes] = useState([]);
    const [userIngredients, setUserIngredients] = useState([]);
    const [retrievedRecipes, setRetrievedRecipes] = useState(false);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [recipeShowing, setRecipeShowing] = useState("");

    //Loads user data from firestore
    useEffect(() => {}, [loading])

    //Lazy renders ingredients
    const renderItem = ({ item }) => (
        <RecipeItem
            title={item.Name}
            diff={item.Difficulty}
            time={item.Time}
            image={item.image}
            touchHandler={touchHandler}
        />
    );

    //User uses filter dropdown, reduce results to context
    const filterHandler = (filter) => {
        if(recipes !== []){
            setDisplayRecipes(QueryFilter(recipes, filter, false))
            if(search !== ""){ searchHandler(search) }
            else{ setLoading(!loading); }
        }
    }

    //The user uses the search bar, reduce results to context
    const searchHandler = (newSearch) => {
        setSearch(newSearch);
        setDisplayRecipes(QuerySearch(recipes, newSearch));
        setLoading(!loading);
    }

    //Taps on a recipe, open up that recipe's screen
    const touchHandler = (title) => {
        setRecipeShowing(title);
    }

    //User presses back button, return to recipes screen
    const pressBackHandler = () => {
        setRecipeShowing("");
    }

    //Loads user and ingredient data
    if(!retrievedRecipes){
        FetchRecipes(props.login, function(recipes, userIngreds, displayRecipes){
            setRecipes(recipes);
            setUserIngredients(userIngreds);
            setDisplayRecipes(displayRecipes);
        })
        setRetrievedRecipes(true);
        setLoading(!loading);
    }

    return (
        recipeShowing === "" ? (
            <View style={styles.container}>
                <Header title={"Recipes"}/>
                <View style={styles.searchBox}>
                    <SearchBar searchHandler={searchHandler}/>
                    <View style={{height: '5%'}}/>
                    <RecipeFilter filterHandler={filterHandler}/>
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
        ) : ( <SingleRecipeScreen title={recipeShowing}
                                  recipe={GetRecipeByName(recipes, recipeShowing)}
                                  pressBackHandler={pressBackHandler}
        /> )
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
