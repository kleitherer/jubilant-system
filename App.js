import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {getApps } from 'firebase/app';
const Stack = createStackNavigator();

import LoginScreen from './client/components/LoginScreen';
import WelcomeScreen from './client/components/WelcomeScreen';
import SearchResults from './client/components/SearchResults';
import PreviewScreen from './client/components/PreviewScreen';
import CameraScreen from './client/components/CameraScreen';



export default function App() {
  const apps = getApps();
  
  if (!apps.length) {
    return null;  // or render a loading spinner
  }
  return (
    <NavigationContainer>
      <Stack.Navigator 
      //initialRouteName="Login"
      >
        <Stack.Screen 
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
          /> 

  
        <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen} 
          options={{ title: 'Home' }}
          />
        <Stack.Screen 
          name="Camera" 
          component={CameraScreen} />
        <Stack.Screen 
          name="Preview" 
          component={PreviewScreen} />
        <Stack.Screen 
          name="SearchResults" 
          component={SearchResults} />
  
      </Stack.Navigator>
    </NavigationContainer>
  );
}
