import { StyleSheet } from 'react-native';

const welcomePageStyles = StyleSheet.create({
    container: { 
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    OpenCamButton: { 
      backgroundColor: '#e03476', 
      padding: 10, 
      borderRadius: 5, 
      width: 200, 
      alignItems: 'center'
    },
    buttonText: {
      color: '#FFFFFF', 
      fontSize: 20,
    }
  });

  export default welcomePageStyles;