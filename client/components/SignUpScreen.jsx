import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { COLORS, FONTS, SIZES } from '../constants';

import { authenticated } from '../../firebase';
const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()

  const auth = authenticated; 

  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            navigation.replace("Welcome")
        }
    })
    return unsubscribe
  }, [])
  

  const handleSignUp = () => {
        createUserWithEmailAndPassword(auth,email,password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Signed Up with: ',user.email);
        })
        .catch(error => alert(error.message))
  }

    return ( 
        <KeyboardAvoidingView
            style = {styles.container}
            behavior = "padding"
        >
        <Text style={styles.boldTitle}>SignUp</Text>

        <View style={styles.inputContainer}>
            <View style = {styles.placeholderContainer}> 
                <Text style={styles.inputTitle}>FIRST NAME</Text>
                <TextInput
                    //placeholder="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                    placeholderTextColor="#D3D3D3"
                />
            </View>

            <View style = {styles.placeholderContainer}> 
                <Text style={styles.inputTitle}>LAST NAME</Text>
                <TextInput
                    //placeholder="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    placeholderTextColor="#D3D3D3"
                    secureTextEntry
                />
            </View>

            <View style = {styles.placeholderContainer}> 
                <Text style={styles.inputTitle}>EMAIL</Text>
                <TextInput
                    //placeholder="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                    placeholderTextColor="#D3D3D3"
                />
            </View>

            <View style = {styles.placeholderContainer}> 
                <Text style={styles.inputTitle}>PASSWORD</Text>
                <TextInput
                    //placeholder="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    placeholderTextColor="#D3D3D3"
                    secureTextEntry
                />
            </View>
        </View>
        
        <View style={styles.buttonContainer}>
            <TouchableOpacity 
                onPress={handleSignUp}
                style={[styles.button, styles.buttonOutline]}
            >
                <Text style={styles.buttonOutlineText}>Register</Text>
            </TouchableOpacity>
        </View>
        </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    boldTitle: {
        ...FONTS.largeTitle,
        textAlign: 'center',
        marginTop: 80,
        fontSize: 70,
        paddingBottom: 30
    },
    inputContainer: {
        width: '75%',  
        marginBottom: 20,
        marginTop: 20,
        marginHorizontal: 30,
    },
    
    placeholderContainer: {
        marginBottom: 20,
    },

    //this is the props of the EMAIL/PASSWORD labels above the form
    inputTitle: {
        fontSize: 12,
        color: 'gray',
        fontFamily: 'GeneralSans-Regular',
    },
    //this is the props of the inner input
    input: {
        borderBottomWidth: 2,
        borderBottomColor: COLORS.dark,
        fontSize: 15,
        height: 40,
        color: COLORS.dark,
        marginBottom: 10,
        fontFamily: 'GeneralSans-Semibold',
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonOutline:{
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineText: {
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16,
    },
});