import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { COLORS, FONTS, SIZES } from '../constants';
import authenticationStyles from '../styles/authenticationStyles';
import { authenticated } from '../../firebase';


const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()

  const auth = authenticated; 

  /*
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            navigation.navigate("Welcome")
        }
    })
    return unsubscribe
  }, [])
*/
  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with: ', user.email);
        navigation.navigate('BottomTabBar', { screen: 'Welcome' });;
    })
    .catch(error => alert(error.message))
  }

    return ( 
        <KeyboardAvoidingView
            style = {authenticationStyles.container}
            behavior = "padding"
        >
        <Text style={authenticationStyles.boldTitle}>Log In</Text>

        <View style={authenticationStyles.inputContainer}>
            <View style = {authenticationStyles.placeholderContainer}> 
                <Text style={authenticationStyles.inputTitle}>EMAIL</Text>
                <TextInput
                    //placeholder="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    keyboardType="email-address"
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
        
        <View>
            <TouchableOpacity 
                onPress={handleLogin}
                style={authenticationStyles.button}
            >
                <Text style={authenticationStyles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>

        <View style={authenticationStyles.signUpContainer}>
            <Text style={authenticationStyles.minorText}>Don't have an account yet?</Text>
            <TouchableOpacity onPress={ () => navigation.navigate('SignUp')} style={authenticationStyles.minorButton}> 
                <Text style={authenticationStyles.minorButtonText}>Sign Up</Text>
            </TouchableOpacity>
        </View>
        </KeyboardAvoidingView>
  )
}

export default LoginScreen;