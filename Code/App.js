// App.js
import React from 'react';
import {NavigationContainer} from '@react-navigation/native'

import NavBar from "./app/components/NavBar";

const App = () => {
    return (
        <>
            <NavigationContainer>
                <NavBar />
            </NavigationContainer>
        </>
    );
};


export default App;
