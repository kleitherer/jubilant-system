import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import welcomePageStyles from '../styles/welcomePageStyles';
import { authenticated } from '../../firebase';
import { COLORS, FONTS, SIZES } from '../constants';
import Pin from './Pin';
import pins from '../assets/dummyData/pins';

const SavedLikesScreen = () => {
    return (
        <View style={styles.container}> 
            <Text>Saved Likes</Text>
        </View>
    )
}

export default SavedLikesScreen;

const styles = StyleSheet.create({
    container: {
      flex:1,
      alignItems: "center",
      justifyContent: "center",
    },
    column: {
      flex: 1,
    },
  });