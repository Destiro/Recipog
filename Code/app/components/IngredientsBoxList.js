import React from 'react';
import {StyleSheet, View, Text, FlatList} from "react-native";
import Colours from "../config/Colours";
import ConvertObjToArray from "../utility/ConvertObjToArray";
import Display from "../config/Display";

const IngredientBoxList = ({list}) => {
    const renderItem = ({ item }) => (
        <View style={{width: Display.width/2.2}}>
            <View style={styles.IngredTextWrap}>
                <Text style={styles.ingredText}>{item.key}</Text>
                <Text style={styles.ingredTextSub}>{item.value}</Text>
            </View>
        </View>
    );

    return(
        <View style={styles.ingredientBox}>
            <FlatList
                contentContainerStyle={styles.grid}
                numColumns={2}
                data={ConvertObjToArray(list)}
                renderItem={renderItem}
                keyExtractor={item => item.key}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    ingredientBox: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingTop: 5,
        paddingBottom: 20,
    },
    IngredTextWrap: {
        backgroundColor: Colours.purple_primary,
        borderRadius: 15,
        margin: 5,
        paddingHorizontal: 8,
        paddingVertical: 4,
        alignItems: 'center',
    },
    ingredText: {
        fontSize: 18,
        fontWeight: '400',
        color: Colours.white,
    },
    ingredTextSub: {
        fontSize: 16,
        fontWeight: '400',
        color: Colours.light_grey,
    },
    grid: {
        width: '100%',
        alignItems: 'center',
    },
});

export default IngredientBoxList;
