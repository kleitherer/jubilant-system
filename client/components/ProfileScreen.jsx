import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, {useEffect, useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import welcomePageStyles from '../styles/welcomePageStyles';
import { authenticated } from '../../firebase';
import { COLORS, FONTS, SIZES } from '../constants';
import { setDoc, getDoc, doc } from "firebase/firestore";
import { db, storage } from "../../firebase"; 
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage';

import * as ImagePicker from 'expo-image-picker';


const ProfileScreen = () => {
    const [userData, setUserData] = useState(null);
    const auth = authenticated;
    const navigation = useNavigation()
    
    const handlePickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        });
    
        if (!result.canceled && result.assets && result.assets.length > 0) {
            const uri = result.assets[0].uri;
            const downloadURL = await uploadImageToFirebase(uri);
            updateProfileImage(downloadURL);
        }
    };
    
    

    const uploadImageToFirebase = async (uri) => {
        const response = await fetch(uri);
        const blob = await response.blob();
    
        const storageRef = ref(storage, `profileImages/${auth.currentUser.uid}`);
        await uploadBytes(storageRef, blob); // This uploads the blob to Firebase Storage.
    
        // Return the download URL for the uploaded image
        return getDownloadURL(storageRef);
    }
    
    
    

    const updateProfileImage = async (downloadURL) => {
        const userRef = doc(db, 'users', auth.currentUser.uid);
        await setDoc(userRef, {
            profileImageUrl: downloadURL
        }, { merge: true });
    
        setUserData((prevData) => ({ ...prevData, profileImageUrl: downloadURL }));
    }


    const handleSignOut = () => {
        authenticated.signOut()
        .then(() => {
          navigation.navigate("Login")
        })
        .catch(error => alert(error.message))
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
      <TouchableOpacity onPress={handlePickImage}>
            <Text>Change Profile Picture</Text>
        </TouchableOpacity>
      <TouchableOpacity
        onPress={handleSignOut}
          style = {welcomePageStyles.signOutButton} 
        >
          <Text style={welcomePageStyles.signOutButtonText}>Sign out</Text>
        </TouchableOpacity>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        margin: 20,
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%",
    },
    image: {
        width: 200,  
        aspectRatio: 1,
        borderRadius: 200,
    }
});