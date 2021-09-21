import React, {useState} from 'react';
import Colours from "../config/Colours";
import { StyleSheet, View } from 'react-native';
import Header from "../components/Header";
import CaloriesInput from "../components/CaloriesInput";
import MealList from "../components/MealList";
import getMealData from "../persistence/APIFunctions";

const MealPlannerScreen = () =>  {
    const [mealData, setMealData] = useState(null);
    const[calories, setCalories] = useState("");

    //If valid calories, get meal data for calorie amount
    const submitHandler = () => {
        if(calories !== '') {
            getMealData(calories, function(data){
                setMealData(data);
            });
            console.log("2"+mealData);
        }else{
            alert("Please enter a valid amount of Calories >:(");
        }
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
