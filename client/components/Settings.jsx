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
    <View>
        <TouchableOpacity onPress={handleSignOut} style = {styles.button}>
          <Text style={styles.buttonText}>sign out</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Settings;

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#e3e3e3',
        //width: 130,
        padding: 10,
        margin: 3,
        borderRadius: 9,
        alignItems: 'center',
    },
    buttonText: {
        color: COLORS.dark,
        fontSize: 13,
        fontFamily: 'GeneralSans-Medium',
    },
})