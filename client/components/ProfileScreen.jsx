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
import Settings from './Settings';


const ProfileScreen = () => {
    const [userData, setUserData] = useState(null);
    const auth = authenticated;
    const navigation = useNavigation()

    const handleEditProfile = () => {
        navigation.navigate("EditProfileScreen")
    }

    const handleNavigateSettings = () => {
        navigation.navigate("Settings")
    }

      useEffect(() => {
        if (auth.currentUser) {
          const fetchData = async () => {
            try {
              const userRef = doc(db, 'users', auth.currentUser.uid);
              const userSnap = await getDoc(userRef);
    
              if (userSnap.exists()) {
                setUserData(userSnap.data());
              } else {
                console.error('No such user document!');
              }
            } catch (error) {
              console.error("Error fetching user data: ", error);
            }
          };
    
          fetchData();
        }
      }, [auth.currentUser]);

    return (
    <View style={styles.container}>
       <View style={styles.topBarContainer}> 
            <TouchableOpacity onPress={handleNavigateSettings}>
                <Ionicons name="settings-outline" size={24} color="black" />
            </TouchableOpacity>
       </View>
        <View style={styles.personalInfoContainer}>
        <Image
            source={{
                uri: userData?.profileImageUrl || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            }}
            style={styles.image}
            />
        {userData && (
        <>
          <Text style={styles.title}>{userData.firstName} {userData.lastName} </Text>
        </>
      )}
      </View>
      <View style={styles.changeScreensContainer}>
        <TouchableOpacity onPress={handleEditProfile} style={styles.button}>
            <Text style={styles.buttonText}>edit profile</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleEditProfile} style={styles.button}>
            <Text style={styles.buttonText}>your style</Text>
        </TouchableOpacity>
        </View>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",  
        justifyContent: "flex-start",
    },
    topBarContainer: {
        width: '100%',          
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 50,
        marginRight: 30,  
    },
    personalInfoContainer: {
        alignItems: 'center',
    },
    changeScreensContainer: {
        flexDirection: 'row',  // This ensures the children are aligned horizontally
        justifyContent: 'space-between', // This provides space between the two buttons
        alignItems: 'center',  // This ensures the buttons are vertically aligned in the center
        padding: 10, // Optional: Provides some spacing around the container
    },
    title: {
        fontSize: 20,
        //fontWeight: "bold",
        marginTop: 15,
        fontFamily: 'GeneralSans-Semibold',
    },
    image: {
        width: 100,  
        aspectRatio: 1,
        borderRadius: 200,
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%",
    },
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
});