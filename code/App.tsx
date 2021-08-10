import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import PageStack from "./PageStack";

export default function App() {
  return (
      <NavigationContainer>
          <PageStack />
      </NavigationContainer>
  );
}
