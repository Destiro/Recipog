import React from "react";
import {FlatList, StyleSheet, Text, View} from "react-native";
import Colours from "../config/Colours";
import Display from "../config/Display";
import MealComponent from "./MealComponent";
import ShortenWords from "../utility/ShortenWords";

export default function MealList({mealData}) {
    const nutrients = mealData.nutrients;

    const renderItem = ({item}) => (
        <MealComponent
            title={ShortenWords(item.title)}
            servings={item.servings}
            prepTime={item.readyInMinutes}
            sourceURL={item.sourceUrl}
            imageType={item.imageType}
            id={item.id}
        />
    );

    return (
        <View style={styles.container}>
            <View style={styles.nutritionBox}>
                <Text style={styles.subHeading}> Nutrition Info </Text>
                <View style={{flexDirection: "row", width: "100%"}}>
                    <View style={{width: '50%', alignItems: 'center'}}>
                        <Text style={styles.nutritionText}>
                            <Text style={{fontWeight: "bold", color: Colours.purple_primary}}>Cal: </Text>
                            <Text>{nutrients.calories.toFixed(0)}cals </Text>
                        </Text>
                        <Text style={styles.nutritionText}>
                            <Text style={{fontWeight: "bold", color: Colours.purple_primary}}>Carbs: </Text>
                            <Text>{nutrients.carbohydrates.toFixed(0)}g </Text>
                        </Text>
                    </View>
                    <View style={{width: '50%', alignItems: 'center'}}>
                        <Text style={styles.nutritionText}>
                            <Text style={{fontWeight: "bold", color: Colours.purple_primary}}>Fat: </Text>
                            <Text>{nutrients.fat.toFixed(0)}g </Text>
                        </Text>
                        <Text style={styles.nutritionText}>
                            <Text style={{fontWeight: "bold", color: Colours.purple_primary}}>Protein: </Text>
                            <Text>{nutrients.protein.toFixed(0)}g</Text>
                        </Text>
                    </View>
                </View>
            </View>
            <View>
                <FlatList
                    contentContainerStyle={styles.grid}
                    numColumns={1}
                    data={mealData.meals}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    nutritionBox: {
        height: '16%',
        width: Display.width / 1.1,
        alignItems: 'center',
        marginBottom: 10,
    },
    subHeading: {
        fontSize: 24,
        fontWeight: '400',
        paddingTop: 10,
        color: Colours.purple_primary,
    },
    nutritionText: {
        paddingTop: 5,
        fontSize: 18,
        fontWeight: '400',
        color: Colours.black,
    },
});
