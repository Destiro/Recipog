import React from 'react';
import Colours from "../config/Colours";
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import BackFAB from "../components/BackFAB";
import RecipeHeader from "../components/RecipeHeader";
import IngredientBoxList from "../components/IngredientsBoxList";
import ImageSlideShow from "../components/ImageSlideShow";

/**
 * Single recipe page to display the details of a particular recipe
 * that the user selected from the recipe list page.
 *
 * @param title
 * @param recipe
 * @param pressBackHandler
 * @returns {JSX.Element}
 * @constructor
 */
const SingleRecipeScreen = ({title, recipe, pressBackHandler}) =>  {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <ImageSlideShow imageString={recipe.image} />
            <BackFAB pressBackHandler={pressBackHandler} />
            <RecipeHeader title={title} difficulty={recipe.Difficulty} time={recipe.Time} />
            <Text style={styles.subHeading}> Ingredients </Text>
            <IngredientBoxList list={recipe.Ingredients} />
            <View style={{width: '85%', alignItems: 'center'}}>
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
