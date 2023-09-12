import { StyleSheet } from 'react-native';

const welcomePageStyles = StyleSheet.create({
    container: { 
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    signOutButton: {
      backgroundColor: '#0782F9',
      width: '60%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      marginTop: 40,
    },
    signOutButtonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 16,
    },
    OpenCamButton: { 
      backgroundColor: '#e03476', 
      padding: 15, 
      borderRadius: 10, 
      width: '60%', 
      alignItems: 'center',
      marginTop: 40,
    },
    buttonText: {
      color: '#FFFFFF', 
      fontWeight: '700',
      fontSize: 20,
    }
  });

  export default welcomePageStyles;