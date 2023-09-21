import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, {useEffect, useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import welcomePageStyles from '../styles/welcomePageStyles';
import { authenticated } from '../../firebase';
import { COLORS, FONTS, SIZES } from '../constants';
import { setDoc, getDoc, doc } from "firebase/firestore";
import { db, storage } from "../../firebase"; 
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage';
// ... other imports
import authenticationStyles from '../styles/authenticationStyles';
import { Ionicons } from '@expo/vector-icons';

import * as ImagePicker from 'expo-image-picker';
import EditProfileScreen from './EditProfileScreen';

const Settings = () => {
    const auth = authenticated;
    const navigation = useNavigation()

    const handleSignOut = () => {
        authenticated.signOut()
        .then(() => {
          navigation.navigate("Login")
        })
        .catch(error => alert(error.message))
      }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleSignOut} style={styles.button}>
                <Text style={styles.buttonText}>Sign Out</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Privacy</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Light/Dark Mode</Text>
            </TouchableOpacity>
        </View>
  )
}

export default Settings;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'top',
        alignItems: 'center',
        padding: 10,
    },
    button: {
        ...authenticationStyles.button,
        width: 250,
        padding: 10,
        borderRadius: 20,
        marginBottom: 10, // Spacing between the buttons
    },
    buttonText: {
        ...authenticationStyles.buttonText,
        fontSize: 14,
    }
})