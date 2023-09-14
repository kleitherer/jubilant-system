//copy code from Login Screen

import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from '../constants';

const authenticationStyles = StyleSheet.create({
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
        //width: '100%',
        //justifyContent: 'center',
        //alignItems: 'center',
        marginTop: 50,
    },
    button: {
        backgroundColor: COLORS.dark,
        width: 300,
        padding: 15,
        borderRadius: 40,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
        fontFamily: 'GeneralSans-Semibold',
    },
    signUpContainer: {
        flexDirection: 'row', 
        alignItems: 'center',
    },
    minorText: {
        fontSize: 12,
        color: 'gray',
        fontFamily: 'GeneralSans-Regular',
    },
    minorButton: {
        padding: 15,
        borderRadius: 40,
        //alignItems: 'center',
    },
    minorButtonText: {
        color: COLORS.dark,
        fontWeight: '700',
        fontSize: 12,
        fontFamily: 'GeneralSans-Regular',
    }
});

export default authenticationStyles;