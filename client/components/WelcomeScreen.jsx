import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import welcomePageStyles from '../styles/welcomePageStyles';
import { authenticated } from '../../firebase';
import { COLORS, FONTS, SIZES } from '../constants';

const WelcomeScreen = () => {
  const navigation = useNavigation()

  const handleSignOut = () => {
    authenticated.signOut()
    .then(() => {
      navigation.replace("Login")
    })
    .catch(error => alert(error.message))
  }
  return (
      <View style={welcomePageStyles.container}>
        
        <Text style = {{color: COLORS.dark, ...FONTS.largeTitle}}> Email: {authenticated.currentUser?.email} </Text>
        <TouchableOpacity
        onPress={handleSignOut}
          style = {welcomePageStyles.signOutButton} 
        >
          <Text style={welcomePageStyles.signOutButtonText}>Sign out</Text>
        </TouchableOpacity>

        <TouchableOpacity style = {welcomePageStyles.OpenCamButton} onPress={() => navigation.navigate('Camera')}>
          <Text style = {welcomePageStyles.buttonText}>Open Camera</Text>
        </TouchableOpacity>
      </View>
    );
  }

  export default WelcomeScreen;