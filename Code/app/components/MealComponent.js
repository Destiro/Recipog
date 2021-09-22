import {Image, Linking, StyleSheet, Text, View, Button} from "react-native";
import React, {useEffect, useState} from "react";
import Colours from "../config/Colours";
import Display from "../config/Display";
import {getMealImages} from "../persistence/APIFunctions";

/**
 * Displaying an individual meal item in the meal component page.
 *
 * @param title
 * @param servings
 * @param prepTime
 * @param sourceURL
 * @param imageType
 * @param id
 * @returns {JSX.Element}
 * @constructor
 */
const MealComponent = ({ title, servings, prepTime, sourceURL, imageType, id}) => {
    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
        getMealImages(id, function(data){
            setImageUrl(data);
        });
    }, [id])

    function loadInBrowser() {
        Linking.openURL(sourceURL).catch(err => console.error("Couldn't load page", err));
    };

    return (
        <View style={styles.item}>
            <View style={styles.imgBox}>
                <Image style={{width: '100%', height: '100%', borderRadius: 10}} source={{uri: imageUrl}} />
            </View>
            <View style={styles.textBox}>
                <Text style={styles.itemText}> {title} </Text>
                <Text style={styles.itemDesc}> Servings: {servings}, Prep time: {prepTime}</Text>
                <View style={{position: 'absolute', bottom: 10, width: Display.width/2.5}}>
                    <Button title="Go to Recipe" onPress={ ()=>{loadInBrowser()}} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        borderColor: Colours.purple_primary,
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: Display.width/1.1,
        height: Display.height/5.7,
        borderRadius: 10,
        borderWidth: 2,
    },
    imgBox: {
        height: Display.height/6.35,
        width: Display.height/6.35,
        paddingHorizontal: 5,
    },
    textBox: {
        height: Display.height/6.35,
        width: Display.width/1.7,
        alignItems: 'center',
        padding: 2,
        flexDirection: 'column',
    },
    itemText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colours.black,
    },
    itemDesc: {
        fontSize: 18,
        fontWeight: '400',
        color: Colours.black,
    },
});

export default MealComponent;
