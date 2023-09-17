import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, {useEffect, useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import welcomePageStyles from '../styles/welcomePageStyles';
import { authenticated } from '../../firebase';
import { COLORS, FONTS, SIZES } from '../constants';
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase"; // make sure db is properly exported from your firebase setup file


const ProfileScreen = () => {
    const [userData, setUserData] = useState(null);
    const auth = authenticated;
    const navigation = useNavigation()

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
    <View>
      <Text>ProfileScreen</Text>

      <TouchableOpacity
        onPress={handleSignOut}
          style = {welcomePageStyles.signOutButton} 
        >
          <Text style={welcomePageStyles.signOutButtonText}>Sign out</Text>
        </TouchableOpacity>
        {userData && (
        <>
          <Text>{userData.firstName}</Text>
          <Text>{userData.lastName}</Text>
        </>
      )}
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})