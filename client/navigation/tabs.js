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

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
        tabBarOptions={{
            activeTintColor: COLORS.dark,
            inactiveTintColor: 'grey',
            labelStyle: {
                fontFamily: 'GeneralSans-Medium', // Change this to your desired font family
                fontSize: 11
            },
        }}
        >
            <Tab.Screen 
                name = "Home"
                component={WelcomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({focused}) => {
                        const iconSource = focused ? icons.homeFilled : icons.homeOutline;
                        return (
                        <Image 
                            source = {iconSource}
                            resizeMode="contain"
                            style={{
                                width:25,
                                height: 25,
                                tintColor: COLORS.dark
                            }}
                        />
                        );
                        }
                }}
            />
            <Tab.Screen 
                name = "Camera"
                component={CameraScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({focused}) => {
                        const iconSource = focused ? icons.addFilled : icons.addOutline;
                        return (
                        <Image 
                            source = {iconSource}
                            resizeMode="contain"
                            style={{
                                width:25,
                                height: 25,
                                tintColor: COLORS.dark
                            }}
                        />
                        );
                        }
                }}
            />
            <Tab.Screen 
                name = "Profile"
                component={ProfileScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({focused}) => {
                        const iconSource = focused ? icons.profileFilled : icons.profileOutline;
                        return (
                        <Image 
                            source = {iconSource}
                            resizeMode="contain"
                            style={{
                                width:25,
                                height: 25,
                                tintColor: COLORS.dark
                            }}
                        />
                        );
                        }
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs;
