import React, {useState} from 'react';
import Colours from "../config/Colours";
import { StyleSheet, Text, View } from 'react-native';
import Header from "../components/Header";
import AddInput from "../components/AddInput";
import CaloriesInput from "../components/CaloriesInput";
import MealList from "../components/MealList";

const MealPlannerScreen = () =>  {
    const [mealData, setMealData] = useState(null);
    const[calories, setCalories] = useState("");

    //Adds a grocery item to the list
    const submitHandler = () => {
        if(calories !== '') {
            console.log("Calories: "+calories);
            getMealData();
        }else{
            alert("Please enter a valid amount of Calories >:(");
        }
    }

    function getMealData() {
        console.log(`calories=${calories}`);
        fetch(
          `https://api.spoonacular.com/mealplanner/generate?apiKey=a2b75871bb854b19a8b8d55d1c54fdac&timeFrame=day&targetCalories=${calories}`
        )
            .then((response) => response.json())
            .then((data) => {
                setMealData(data)
                console.log(data);
            })
            .catch(() => {
                console.log("error");
            });
    }

    return (
        <View style={styles.container}>
            <Header title={"Meal Planner"} />
            <View style={styles.contentBox}>
                <CaloriesInput pText={"Number of Calories..."}
                          buttonText={"Enter Calories"}
                          submitHandler={submitHandler}
                          textHandler={(val)=>setCalories(val)}
                />
                {mealData && <MealList mealData={mealData} />}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colours.white,
    },
    contentBox: {
        width: '80%',
        height: '90%',
        backgroundColor: Colours.white,
    },
});

export default MealPlannerScreen;
