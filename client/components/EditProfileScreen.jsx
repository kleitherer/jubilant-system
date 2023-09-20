import { StyleSheet, Text, TextInput, Button, Alert, View, Image, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants';
import { setDoc, getDoc, doc, updateDoc } from "firebase/firestore";
import { db, storage } from "../../firebase"; 
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import { authenticated } from '../../firebase';
import authenticationStyles from '../styles/authenticationStyles';

const EditProfileScreen = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const [userData, setUserData] = useState(null);
    const auth = authenticated;

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
const handleSave = async () => {
    try {
      const userRef = doc(db, 'users', auth.currentUser.uid);
      await updateDoc(userRef, {
        firstName: firstName,
        lastName: lastName,
        email: email,
      });
  
      Alert.alert("Success", "Profile updated successfully.");
    } catch (error) {
      console.error("Error updating profile: ", error);
      Alert.alert("Error", "There was an error updating your profile.");
    }
  };

useEffect(() => {
    if (auth.currentUser) {
        const fetchData = async () => {
        try {
            const userRef = doc(db, 'users', auth.currentUser.uid);
            const userSnap = await getDoc(userRef);

            if (userSnap.exists()) {
                const fetchedData = userSnap.data();
                setFirstName(fetchedData.firstName);
                setLastName(fetchedData.lastName);
                setEmail(fetchedData.email);
                setUserData(fetchedData);
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
    <View style={editProfileStyles.container}>
    <View style={editProfileStyles.imageContainer}>
        <Image
            source={{
                uri: userData?.profileImageUrl || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            }}
            style={editProfileStyles.image}
            />
    </View>
    <TouchableOpacity onPress={handlePickImage} style={editProfileStyles.button}>
            <Text style={editProfileStyles.buttonText}>Edit Image</Text>
        </TouchableOpacity>

    <View style={editProfileStyles.inputContainer}>
        <Text style={editProfileStyles.inputTitle}>First Name</Text>
        <TextInput
            value={firstName}
            onChangeText={text => setFirstName(text)}
            style={editProfileStyles.input}
        />
        
        <Text style={editProfileStyles.inputTitle}>Last Name</Text>
        <TextInput
            value={lastName}
            onChangeText={text => setLastName(text)}
            style={editProfileStyles.input}
        />
        
        <Text style={editProfileStyles.inputTitle}>Email</Text>
        <TextInput
            value={email}
            onChangeText={text => setEmail(text)}
            keyboardType="email-address"
            style={editProfileStyles.input}
        />

        <View style={editProfileStyles.saveButtonContainer}>
            <TouchableOpacity onPress={handleSave} style={editProfileStyles.saveButton}>
                <Text style={editProfileStyles.buttonText}>Save</Text>
            </TouchableOpacity>
        </View>
    </View>
</View>
  )
}

export default EditProfileScreen;
const editProfileStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "#FFFFFF",
    },
    imageContainer: {
        alignItems: 'center',
    },
    image: {
        width: 125,
        aspectRatio: 1,
        borderRadius: 125 / 2,
        marginBottom: 15,
    },
    button: {
        ...authenticationStyles.button,
        width: 200,
        padding: 10,
        borderRadius: 20,
    },
    buttonText: {
        ...authenticationStyles.buttonText,
        fontSize: 14,
    },
    inputContainer: {
        ...authenticationStyles.inputContainer,
    },
    inputTitle: {
        ...authenticationStyles.inputTitle,
    },
    input: {
        ...authenticationStyles.input,
        borderBottomWidth: 1,  // Thinner border for a cleaner look
    },
    saveButtonContainer: {
        marginTop: 20,
    },
    saveButton: {
        ...authenticationStyles.button,
        width: 250,
    }
});

