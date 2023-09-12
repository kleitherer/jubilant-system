import React from 'react';
import { View, ScrollView, Image } from 'react-native';

import constStyles from '../styles/constStyles';

function SearchResults({ route }) {
    const { image } = route.params;
  
    return (
      <View style={constStyles.container}>
        <ScrollView>
          <Image source={{ uri: image }} style ={constStyles.image} />
          <View style={constStyles.imagesContainer}>
            
            {Array(20)
              .fill(0)
              .map((_, i) => (
                <Image key={i} style={constStyles.placeholderImage} />
              ))}
          </View>
        </ScrollView>
      </View>
    );
  }

export default SearchResults;