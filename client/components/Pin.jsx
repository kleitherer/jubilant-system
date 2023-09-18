import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet, Pressable } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; 

const Pin = (props) => {
    const {image, title} = props.pin;

    const [ratio, setRatio] = useState(1);

    const onLike = () => {};

    useEffect(() => {
        if (image) {
            Image.getSize(image, (width, height) => setRatio(width/height));
        }
    }, [image])

    //when you pass an empty braces, then the function will only be called once
    //the first time that the component mounds

    return (
        <View style={styles.pin}>
          <View>
            <Image 
                source={{ 
                    uri: image,
                }}
                style={[styles.image, {aspectRatio: ratio}]}
                ></Image>

            <Pressable onPress={onLike} style={styles.storeBtn}>
                <MaterialIcons name="storefront" size={25} color="black" />
            </Pressable>
          </View>
          
           
          <Text style={styles.title} numberOfLines={2}>{title}</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    pin: {
        width: '100%',
        padding: 4,
    },
    title: {
        fontSize: 16,
        lineHeight: 22,
        fontWeight: "600",
        margin: 5,
        color: "#181818",
    },
    image: {
        width: '100%',
        borderRadius: 15,
    },
    storeBtn: {
        backgroundColor: '#D3CFD4',
        position: 'absolute',
        top: 10,
        left: 10,
        padding: 4,
        borderRadius: 50,
    }
});

export default Pin;