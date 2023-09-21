import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import welcomePageStyles from '../styles/welcomePageStyles';
import { authenticated } from '../../firebase';
import {COLORS, FONTS, SIZES, icons } from "../constants";
import Pin from './Pin';
import pins from '../assets/dummyData/pins';
import { Feather } from '@expo/vector-icons';

const SearchScreen = () => {
    const [searchText, setSearchText] = useState("");
    return (
        <View style={styles.container}> 
            <View style={styles.searchContainer}> 
                <TouchableOpacity>
                    <Feather name="search" size={24} style={styles.searchIcon}/>
                </TouchableOpacity>
                <View style={styles.searchWrapper}>
                    <TextInput
                        style={styles.searchInput}
                        value={searchText}
                        onChangeText={text => setSearchText(text)}
                        placeholder="What are you looking for?"
                        placeholderTextColor='grey'
                        
                    />
                </View>
            </View>
        </View>
    )
}

export default SearchScreen;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: 'white',
        flex: 1
    },
    searchContainer: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 50,
        marginHorizontal: 10,
        height: 40
    },
    searchIcon: {
        marginHorizontal:10,
        marginTop: 6,
        color: COLORS.dark
    },
    searchWrapper: {
        flex: 1,
        backgroundColor: '#e3e3e3',
        marginRight: 10,
        borderRadius: 10,
    },
    searchInput: {
        width: "100%",
        height: "100%",
        paddingHorizontal: 10,
        fontFamily: 'GeneralSans-Medium'
    }
  });