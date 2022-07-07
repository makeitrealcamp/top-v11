import React from "react";
import { View, Text, TextInput } from "react-native";
import PropTypes from "prop-types";

import styles from "./style";

const { formItem, center, itemlabel, inputStyle } = styles;

const noop = () => {};

const CustomInput = ({ name, label, handleChange }) => {
  const handleChangeText = (value) => {
    handleChange(name, value);
  };

  return (
    <View style={[formItem, center]}>
      <Text style={itemlabel}>{label}</Text>
      <TextInput style={inputStyle} onChangeText={handleChangeText} />
    </View>
  );
};

CustomInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  handleChange: PropTypes.func,
};

CustomInput.defaultProps = {
  name: "defaultName",
  label: "default text",
  handleChange: noop,
};

export default CustomInput;
