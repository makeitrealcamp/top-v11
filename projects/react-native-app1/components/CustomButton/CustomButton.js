import React from "react";
import { TouchableOpacity, Text } from "react-native";

import styles from "./style";

const { buttonStyle } = styles;

const CustomButton = ({ handleClick, label }) => {
  return (
    <TouchableOpacity onPress={handleClick} style={buttonStyle}>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
