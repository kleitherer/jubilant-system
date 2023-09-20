import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import welcomePageStyles from '../styles/welcomePageStyles';
import { authenticated } from '../../firebase';
import { COLORS, FONTS, SIZES } from '../constants';
import Pin from './Pin';
import pins from '../assets/dummyData/pins';

const SearchScreen = () => {
    return (
        <View style={styles.container}> 
            <Text>Search Screen</Text>
        </View>
    )
}

export default SearchScreen;

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