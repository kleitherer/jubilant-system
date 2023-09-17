import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import SignUpScreen from './client/components/SignUpScreen';
import LoginScreen from './client/components/LoginScreen';
import WelcomeScreen from './client/components/WelcomeScreen';
import SearchResults from './client/components/SearchResults';
import PreviewScreen from './client/components/PreviewScreen';
import CameraScreen from './client/components/CameraScreen';

import Tabs from './client/navigation/tabs';



export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      //general sans
      'GeneralSans-Bold': require('./client/assets/fonts/GeneralSans-Bold.ttf'),
      'GeneralSans-BoldItalic': require('./client/assets/fonts/GeneralSans-BoldItalic.ttf'),
      'GeneralSans-Extralight': require('./client/assets/fonts/GeneralSans-Extralight.ttf'),
      'GeneralSans-ExtralightItalic': require('./client/assets/fonts/GeneralSans-ExtralightItalic.ttf'),
      'GeneralSans-Italic': require('./client/assets/fonts/GeneralSans-Italic.ttf'),
      'GeneralSans-Light': require('./client/assets/fonts/GeneralSans-Light.ttf'),
      'GeneralSans-LightItalic': require('./client/assets/fonts/GeneralSans-LightItalic.ttf'),
      'GeneralSans-Medium': require('./client/assets/fonts/GeneralSans-Medium.ttf'),
      'GeneralSans-MediumItalic': require('./client/assets/fonts/GeneralSans-MediumItalic.ttf'),
      'GeneralSans-Regular': require('./client/assets/fonts/GeneralSans-Regular.ttf'),
      'GeneralSans-Semibold': require('./client/assets/fonts/GeneralSans-Semibold.ttf'),
      'GeneralSans-SemiboldItalic': require('./client/assets/fonts/GeneralSans-SemiboldItalic.ttf'),
      'GeneralSans-Variable': require('./client/assets/fonts/GeneralSans-Variable.ttf'),
      'GeneralSans-VariableItalic': require('./client/assets/fonts/GeneralSans-VariableItalic.ttf'),

      'SpaceMono-Regular': require('./client/assets/fonts/SpaceMono-Regular.ttf'),

      //playfair display
      'PlayfairDisplayBlack-RpvVa': require('./client/assets/fonts/PlayfairDisplayBlack-RpvVA.ttf'),
      'PlayfairDisplayBold-nRv8g': require('./client/assets/fonts/PlayfairDisplayBold-nRv8g.ttf'),

      'PlayfairDisplayMedium-9YKZK': require('./client/assets/fonts/PlayfairDisplayMedium-9YKZK.ttf'),
      
    });
  };

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    );
  }


  return (
    <NavigationContainer>
      
      <Stack.Navigator 
      >
        
        <Stack.Screen 
        
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
          /> 
        <Stack.Screen 
          name="SignUp"
          component={SignUpScreen}
          options={{headerShown: false}}
          /> 
       
        <Stack.Screen
          name="BottomTabBar"
          component={Tabs}
          options={{headerShown: false}}
        />

        {/*
        <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen} 
          options={{ title: 'Home', headerShown: false}}
          />
        <Stack.Screen 
          name="Camera" 
          component={CameraScreen} 
          options={{headerShown: false}}
          />
  */}
  
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
