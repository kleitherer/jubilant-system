import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { COLORS, FONTS, SIZES } from '../constants';
import authenticationStyles from '../styles/authenticationStyles';

import { authenticated } from '../../firebase';
const SignUpScreen = () => {
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
            style = {authenticationStyles.container}
            behavior = "padding"
        >
        <Text style={authenticationStyles.boldTitle}>SignUp</Text>

        <View style={authenticationStyles.inputContainer}>
            <View style = {authenticationStyles.placeholderContainer}> 
                <Text style={authenticationStyles.inputTitle}>FIRST NAME</Text>
                <TextInput
                    //placeholder="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={authenticationStyles.input}
                    placeholderTextColor="#D3D3D3"
                />
            </View>

            <View style = {authenticationStyles.placeholderContainer}> 
                <Text style={authenticationStyles.inputTitle}>LAST NAME</Text>
                <TextInput
                    //placeholder="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={authenticationStyles.input}
                    placeholderTextColor="#D3D3D3"
                    secureTextEntry
                />
            </View>

            <View style = {authenticationStyles.placeholderContainer}> 
                <Text style={authenticationStyles.inputTitle}>EMAIL</Text>
                <TextInput
                    //placeholder="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={authenticationStyles.input}
                    placeholderTextColor="#D3D3D3"
                />
            </View>

            <View style = {authenticationStyles.placeholderContainer}> 
                <Text style={authenticationStyles.inputTitle}>PASSWORD</Text>
                <TextInput
                    //placeholder="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={authenticationStyles.input}
                    placeholderTextColor="#D3D3D3"
                    secureTextEntry
                />
            </View>
        </View>
        
        <View style={authenticationStyles.buttonContainer}>
            <TouchableOpacity 
                onPress={handleSignUp}
                style={[authenticationStyles.button]}
            >
                <Text style={authenticationStyles.buttonText}>Register</Text>
            </TouchableOpacity>
        </View>

        <View style={authenticationStyles.signUpContainer}>
            <Text style={authenticationStyles.minorText}>Already have an account?</Text>
            <TouchableOpacity onPress={ () => navigation.navigate('Login')} style={authenticationStyles.minorButton}> 
                <Text style={authenticationStyles.minorButtonText}>Log in</Text>
            </TouchableOpacity>
        </View>

        </KeyboardAvoidingView>
  )
}

export default SignUpScreen;