import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import welcomePageStyles from '../styles/welcomePageStyles';
import { authenticated } from '../../firebase';
import { COLORS, FONTS, SIZES } from '../constants';

const ProfileScreen = () => {
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
      <Text>ProfileScreen</Text>

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

const styles = StyleSheet.create({})