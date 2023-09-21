import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
const Stack = createStackNavigator();
import * as Font from 'expo-font';

import * as SplashScreen from 'expo-splash-screen';

//import AppLoading from 'expo-app-loading';

import SignUpScreen from './client/components/SignUpScreen';
import LoginScreen from './client/components/LoginScreen';
import WelcomeScreen from './client/components/WelcomeScreen';
import SearchResults from './client/components/SearchResults';
import PreviewScreen from './client/components/PreviewScreen';
import EditProfileScreen from './client/components/EditProfileScreen';
import Settings from './client/components/Settings';
import SavedLikesScreen from './client/components/SavedLikesScreen';
import SavedSearchesScreen from './client/components/SavedSearchesScreen';

import CameraScreen from './client/components/CameraScreen';

import Tabs from './client/navigation/tabs';



export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [appIsReady, setAppIsReady] = useState(false);


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

  useEffect(() => {
    const prepareResources = async () => {
        try {
            await SplashScreen.preventAutoHideAsync();  // Prevent the splash screen from hiding automatically
            await loadFonts();
        } catch (error) {
            console.warn(error);
        } finally {
            setFontsLoaded(true);
            setAppIsReady(true);
            SplashScreen.hideAsync();  // Hide the splash screen manually
        }
    };

    prepareResources();
}, []);

if (!appIsReady) {
  return null; // Or some placeholder loading screen if you have one
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
        <Stack.Screen 
          name="EditProfileScreen" 
          component={EditProfileScreen}
          options={{
              headerBackTitle: null,
              title: "Edit Profile",
            }}/>
        <Stack.Screen 
          name="Settings" 
          component={Settings} 
          options={{
            headerBackTitle: null,
            title: "Settings",
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
