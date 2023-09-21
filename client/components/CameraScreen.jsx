import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';

import Icon from 'react-native-vector-icons/FontAwesome';

import constStyles from '../styles/constStyles'; 
import VerticalSlider from './VerticalSlider';

import cameraScreenStyles from '../styles/cameraScreenStyles';

function CameraScreen({ navigation }) {
    const [cameraPermission, setCameraPermission] = useState(null);
    const [camera, setCamera] = useState(null);
    const [zoom, setZoom] = useState(0);
  
    useEffect(() => {
      (async () => {
        const { status } = await Camera.requestCameraPermission();
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

  export default CameraScreen;