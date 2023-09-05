import React, { useState, useEffect } from 'react';
import { ScrollView, Button, Image, View, Platform, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import Slider from '@react-native-community/slider';

const Stack = createStackNavigator();

import WelcomeScreen from './client/components/WelcomeScreen';
import SearchResults from './client/components/SearchResults';
import VerticalSlider from './client/components/VerticalSlider';
//make sure you understand where verticalslider is going
import PreviewScreen from './client/components/PreviewScreen';
import CameraScreen from './client/components/CameraScreen';



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen} 
          options={{ title: 'Home' }}/>
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
