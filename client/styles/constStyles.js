import { StyleSheet } from "react-native";


const constStyles = StyleSheet.create({
    container: { 
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    camera: {
      flex: 1,
      aspectRatio: 1,
    },
    cameraContainer: {
      flex: 1,
      flexDirection: 'row'
    },
    buttonContainer: { 
      position: 'absolute', 
      bottom: 0,
      width: '100%',
      backgroundColor: 'transparent', 
      alignItems: 'center', 
      padding: 35
    },
    TakePhotoButton: { 
      flex: 0.1,
      alignSelf: 'flex-end',
      justifyContent: 'center',
      alignItems: 'center'
    },
    button: { 
      backgroundColor: '#e03476', 
      padding: 10, 
      borderRadius: 5, 
      marginVertical: 5,
      width: '90%',
      alignItems: 'center',
    },
    buttonText: {
      color: '#FFFFFF', 
      fontSize: 20,
    },
    text: { 
      fontSize: 18, 
      marginBottom: 10, 
      color: 'white' 
    },
    image: { 
      width: 200, 
      height: 200,
      justifyContent: 'center',
      alignItems: 'center'
    },
    imagesContainer: { 
      flexDirection: 'row', 
      flexWrap: 'wrap', 
      justifyContent: 'space-around'
    },
    placeholderImage: { 
      width: 150, 
      height: 150, 
      borderRadius: 10, 
      margin: 10, 
      backgroundColor: '#ccc',
    },
    fullscreenImage: {
      flex: 1,
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
  });
  
export default constStyles;  