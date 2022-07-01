import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";

import { Layout } from "../Layout";

import styles from "./style";

const {
  formContainer,
  container: profileContainer,
  imageContainer,
  imageStyle,
  center,
  title,
  inputStyle,
  textStyle,
  formItem,
} = styles;

const Profile = () => {
  const [image, setImage] = useState("");

  const changeImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync();

    const { uri } = result;
    setImage(uri);
    console.warn(result);
  };

  return (
    <Layout>
      <View style={[profileContainer, center]}>
        <Text style={title}>Profile</Text>
      </View>
      <View style={[imageContainer, center]}>
        <TouchableOpacity onPress={changeImage}>
          <Image
            style={imageStyle}
            source={{ uri: image ? image : "https://picsum.photos/200/200" }}
          ></Image>
        </TouchableOpacity>
      </View>
      <View style={formContainer}>
        <View style={formItem}>
          <Text style={textStyle}>Name:</Text>
          <TextInput style={inputStyle} />
        </View>
        <View style={formItem}>
          <Text style={textStyle}>Email:</Text>
          <TextInput style={inputStyle} />
        </View>
      </View>
    </Layout>
  );
};

export default Profile;
