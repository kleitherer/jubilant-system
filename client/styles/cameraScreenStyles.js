import { StyleSheet } from "react-native";

const cameraScreenStyles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row', // Change to 'row'
      alignItems: 'center'
    },
    zoomSliderContainer: {
      //transform: [{ rotate: '270deg' }],
      position: 'absolute', 
      right: 10,
      top: 0,
      bottom: 0,
      justifyContent: 'center', 
      alignItems: 'center',
    },
    zoomSlider: {
      width: '80%', // Adjust this to fit your needs
      height: 40, // Adjust this to fit your needs
      transform: [{ rotate: '270deg' }],
    },
    buttonContainer: { 
      position: 'absolute', 
      bottom: 0,
      width: '100%',
      backgroundColor: 'transparent', 
      alignItems: 'center', 
      padding: 35
    },
  });
  
  export default cameraScreenStyles;