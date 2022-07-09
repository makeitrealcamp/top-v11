import React from "react";
import { View, Image, Text } from "react-native";

import styles from "./style";

const { container, imgStyle, text, textContainer } = styles;

const Character = ({ image, name }) => {
  return (
    <View style={container}>
      <Image source={{ uri: image }} style={imgStyle} />
      <View style={textContainer}>
        <Text style={text}>{name}</Text>
      </View>
    </View>
  );
};

export default Character;
