// TopTabsNavigator.jsx
import React from 'react';
import { Text } from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SavedLikesScreen from '../components/SavedLikesScreen';
import SavedSearchesScreen from '../components/SavedSearchesScreen';
import { AntDesign } from '@expo/vector-icons'; 

//outline: <AntDesign name="hearto" size={24} color="black" />
//full: <AntDesign name="heart" size={24} color="black" />

const Tab = createMaterialTopTabNavigator();


const TopTabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 12, fontFamily: 'GeneralSans-Medium' },
        tabBarShowLabel: false,
        tabBarIndicatorStyle: { backgroundColor: 'grey' }
      }}
    >
      <Tab.Screen 
        name="Saved Likes" 
        component={SavedLikesScreen} 
        options={{
            tabBarIcon: ({color, focused}) => <AntDesign name="hearto" size={24} color={focused ? 'grey': color} />
        }}
        />
      <Tab.Screen 
        name="Saved Searches" 
        component={SavedSearchesScreen}
        options={{
          tabBarIcon: ({ color, focused}) => <AntDesign name="search1" size={24} color={focused ? 'grey': color} />
        }}
      />
    </Tab.Navigator>
  );
}

export default TopTabsNavigator;
