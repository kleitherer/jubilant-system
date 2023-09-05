import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import welcomePageStyles from '../styles/welcomePageStyles';

function WelcomeScreen({ navigation }) {
    return (
      <View style={welcomePageStyles.container}>
        <TouchableOpacity style = {welcomePageStyles.OpenCamButton} onPress={() => navigation.navigate('Camera')}>
          <Text style = {welcomePageStyles.buttonText}>Open Camera</Text>
        </TouchableOpacity>
      </View>
    );
  }

  export default WelcomeScreen;