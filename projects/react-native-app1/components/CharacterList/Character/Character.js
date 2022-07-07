import React from "react";
import { View, Image, Text } from "react-native";

import styles from "./style";

const { imgStyle } = styles;

const Character = ({ image, name }) => {
  return (
    <View>
      <Image source={{ uri: image }} style={imgStyle} />
      <Text>{name}</Text>
    </View>
  );
};

export default Character;
