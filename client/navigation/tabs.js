import React from 'react';
import {COLORS, FONTS, SIZES, icons } from "../constants";
import {
    View,
    Image,
    TouchableOpacity
} from 'react-native';

import {createBottomTabNavigator, BottomTabBar} from "@react-navigation/bottom-tabs";

import WelcomeScreen from "../components/WelcomeScreen";
import CameraScreen from "../components/CameraScreen";
import ProfileScreen from "../components/ProfileScreen";
import SearchScreen from "../components/SearchScreen";
//import { createDrawerNavigator } from '@react-navigation/drawer';

//const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

{/*
function ProfileDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Profile">
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}
*/}

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconSource;

                    if (route.name === 'Home') {
                        iconSource = focused ? icons.homeFilled : icons.homeOutline;
                    } else if (route.name === 'Search') {
                        iconSource = focused ? icons.searchFilled : icons.searchOutline;
                    } else if (route.name === 'Camera') {
                        iconSource = focused ? icons.addFilled : icons.addOutline;
                    } else if (route.name === 'Profile') {
                        iconSource = focused ? icons.profileFilled : icons.profileOutline;
                    }

                    return (
                        <Image
                            source={iconSource}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: 'grey'
                            }}
                        />
                    );
                },
                tabBarActiveTintColor: COLORS.dark,
                tabBarInactiveTintColor: 'grey',
                tabBarLabelStyle: {
                    fontSize: 11,
                },
            })}
        >
            <Tab.Screen
                name="Home"
                component={WelcomeScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Camera"
                component={CameraScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    )
}
export default Tabs;
