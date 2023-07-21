import React, { useState, useEffect } from 'react';
import { ScrollView, Button, Image, View, Platform, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import Slider from '@react-native-community/slider';

const Stack = createStackNavigator();

const VerticalSlider = (props) => {
  return (
    <View style={cameraScreenStyles.zoomSliderContainer}>
      <Slider {...props} style={cameraScreenStyles.zoomSlider} />
    </View>
  );
};

function WelcomeScreen({ navigation }) {
  return (
    <View style={welcomePageStyles.container}>
      <TouchableOpacity style = {welcomePageStyles.OpenCamButton} onPress={() => navigation.navigate('Camera')}>
        <Text style = {welcomePageStyles.buttonText}>Open Camera</Text>
      </TouchableOpacity>
    </View>
  );
}
function PreviewScreen({ route, navigation }) {
  const { image } = route.params;

  const searchImage = async () => {
    navigation.navigate('SearchResults', { image });
  };

  return (
    <View style={constStyles.container}>
      <Image source={{ uri: image }} style={constStyles.fullscreenImage} />
      <TouchableOpacity style={constStyles.button} onPress={searchImage}>
        <Text style={constStyles.text}>Search Image</Text>
      </TouchableOpacity>
    </View>
  );
}


function CameraScreen({ navigation }) {
  const [cameraPermission, setCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [zoom, setZoom] = useState(0);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setCameraPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (camera) {
      const data = await camera.takePictureAsync(null);
      navigation.navigate('Preview', { image: data.uri });
    }
  };

  const searchImage = async () => {
    navigation.navigate('SearchResults', { image });
  };

  return (
    <View style={constStyles.container}>
      <Camera 
        style={constStyles.camera}
        zoom={zoom}
        ref={(r) => setCamera(r)}
        type={Camera.Constants.Type.back}
      >
        <View style={cameraScreenStyles.buttonContainer}>
          <TouchableOpacity onPress={takePicture}>
            <Icon name="circle-thin"  size={100} style={{color: "#ffffff",}} />
          </TouchableOpacity>
        </View>
      </Camera>
        <VerticalSlider
            minimumValue={0}
            maximumValue={1}
            step={0.1}
            value={zoom}
            onValueChange={(value) => setZoom(value)}
          />
    </View>
  );
}

//SEARCH RESULTS SCREEN
function SearchResults({ route }) {
  const { image } = route.params;

  return (
    <View style={constStyles.container}>
      <ScrollView>
        <Image source={{ uri: image }} style ={constStyles.image} />
        <View style={constStyles.imagesContainer}>
          
          {Array(20)
            .fill(0)
            .map((_, i) => (
              <Image key={i} style={constStyles.placeholderImage} />
            ))}
        </View>
      </ScrollView>
    </View>
  );
}

export default function App() {
  return (
    //we're wrapping our app in the Nav Container
    //name = name of route
    //component = specifies the component to render for the route
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen} 
          options={{ title: 'Home' }}/>
        <Stack.Screen 
          name="Camera" 
          component={CameraScreen} />
        <Stack.Screen 
          name="Preview" 
          component={PreviewScreen} />
        <Stack.Screen 
          name="SearchResults" 
          component={SearchResults} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

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
