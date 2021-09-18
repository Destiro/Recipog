import React from 'react';
import Colours from "../config/Colours";
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import BackFAB from "../components/BackFAB";
import RecipeHeader from "../components/RecipeHeader";
import IngredientBoxList from "../components/IngredientsBoxList";

const SingleRecipeScreen = ({title, recipe, pressBackHandler}) =>  {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image style={{width: '100%', height: '40%'}}
                   source={require('../assets/recipe_images/'+recipe.image)} />
            <BackFAB pressBackHandler={pressBackHandler} />
            <RecipeHeader title={title} difficulty={recipe.Difficulty} time={recipe.Time} />
            <Text style={styles.subHeading}> Ingredients </Text>
            <IngredientBoxList list={recipe.Ingredients} />
            <View style={{width: '95%', alignItems: 'center'}}>
                <Text style={styles.subHeading}> Instructions </Text>
                <Text style={{fontSize: 18, alignSelf: 'center'}}>{recipe.Instructions}</Text>
            </View>
            <Text style={styles.subHeading}> Tags </Text>
            <Text style={{fontSize: 18}}>{recipe.Tags}.</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    subHeading: {
        paddingTop: 10,
        fontSize: 24,
        fontWeight: '400',
        color: Colours.purple_primary,
    },
});

export default SingleRecipeScreen;
