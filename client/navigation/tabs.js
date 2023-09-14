import React from 'react';
import {COLORS, icons } from "../constants";
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
        >
            <Tab.Screen 
                name = "Welcome"
                component={WelcomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <Image 
                            source = {icons.homeIcon}
                            resizeMode="contain"
                            style={{
                                width:25,
                                height: 25,
                                tintColor: focused ? COLORS.highlight : COLORS.dark
                            }}
                            />
                    )
                }}
            />
            <Tab.Screen 
                name = "Camera"
                component={CameraScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <Image 
                            source = {icons.addIcon}
                            resizeMode="contain"
                            style={{
                                width:25,
                                height: 25,
                                tintColor: focused ? COLORS.highlight : COLORS.dark
                            }}
                            />
                    )
                }}
            />
            <Tab.Screen 
                name = "Profile"
                component={ProfileScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <Image 
                            source = {icons.userIcon}
                            resizeMode="contain"
                            style={{
                                width:25,
                                height: 25,
                                tintColor: focused ? COLORS.highlight : COLORS.dark
                            }}
                            />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs;
