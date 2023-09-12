import React from 'react';
import {Image, View, Text, TouchableOpacity } from 'react-native';

import constStyles from '../styles/constStyles';

function PreviewScreen({ route, navigation }) {
    console.log(route.params);
    const { image } = route.params;
  
    const searchImage = async () => {
      navigation.navigate('SearchResults', { image });
    };
  
    return (
      <View style={constStyles.container}>
        <Image source={{ uri: image }} style={constStyles.fullscreenImage} />
        <TouchableOpacity style={constStyles.button} onPress={searchImage}>
          <Text style={constStyles.text}>Search Image</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
export default PreviewScreen;