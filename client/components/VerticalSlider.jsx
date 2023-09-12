import React from 'react';
import Slider from '@react-native-community/slider';
import { View } from 'react-native';

import cameraScreenStyles from "../styles/cameraScreenStyles";

const VerticalSlider = (props) => {
    return (
      <View style={cameraScreenStyles.zoomSliderContainer}>
        <Slider {...props} style={cameraScreenStyles.zoomSlider} />
      </View>
    );
  };
  
export default VerticalSlider;