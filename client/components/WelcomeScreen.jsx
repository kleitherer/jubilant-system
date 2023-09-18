import React from 'react';
import { View, StyleSheet, ScrollView, Flatlist, Image, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import welcomePageStyles from '../styles/welcomePageStyles';
import { authenticated } from '../../firebase';
import { COLORS, FONTS, SIZES } from '../constants';
import Pin from './Pin';
import pins from '../assets/dummyData/pins';
import { FlatList } from 'react-native-gesture-handler';

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
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.column}>
          {pins
            .filter((_,index) => index % 2 == 0)
            .map((pin) => (
            <Pin pin={pin} key={pin.id}/>
          ))}
        </View>
        <View style={styles.column}>
          {pins
            .filter((_,index) => index % 2 == 1)
            .map((pin) => (
            <Pin pin={pin} key={pin.id}/>
          ))}
          </View>
        {/*
        <Pin 
          pin={{
            title: "Title0",
            image: "https://i.pinimg.com/564x/c3/91/16/c39116953793d2d5bf0f4d43f88d3887.jpg"
          }}
        />
        <Pin 
          pin={{
            title: "Title1",
            image: "https://i.pinimg.com/564x/e3/7e/d7/e37ed7c42ec8f7102ed33fdb34e7d316.jpg"
          }}
        />
        <Pin 
          pin={{
            title: "Title2",
            image:  "https://i.pinimg.com/736x/e0/b7/89/e0b789b2ccf97a54b6925caa2cd737cb.jpg"
          }}
        />
        */}

      </View>
     </ScrollView>
    )
  }
  export default WelcomeScreen;

  const styles = StyleSheet.create({
    container: {
      //flex:1,
      //alignItems: "center",
      //justifyContent: "center",
      padding: 10,
      flexDirection: 'row',
    },
    column: {
      flex: 1,
    },
  });