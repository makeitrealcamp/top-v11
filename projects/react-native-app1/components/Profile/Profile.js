import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import * as ImagePicker from "expo-image-picker";

import { Layout } from "../Layout";

import styles from "./style";

const {
  titleContainer,
  imageContainer,
  formContainer,
  borderColor,
  title,
  imageStyle,
  center,
  itemlabel,
  inputStyle,
  formItem,
} = styles;

const Profile = () => {
  const [imageURI, setImageURI] = useState("");

  const uploadImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync();
    const { cancelled, uri } = result;
    if (!cancelled) {
      setImageURI(uri);
    }
  };

  return (
    <Layout>
      <View style={[titleContainer, center]}>
        <Text style={title}>Profile</Text>
      </View>
      <View style={[imageContainer, center]}>
        <TouchableOpacity onPress={uploadImage}>
          <Image
            style={imageStyle}
            source={{
              uri: imageURI ? imageURI : "https://picsum.photos/200/200",
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={[formContainer]}>
        <View style={[formItem, center]}>
          <Text style={itemlabel}>Name: </Text>
          <TextInput style={inputStyle} />
        </View>
        <View style={[formItem, center]}>
          <Text style={itemlabel}>Email: </Text>
          <TextInput style={inputStyle} />
        </View>
        <View style={[formItem, center]}>
          <Text style={itemlabel}>Name: </Text>
          <TextInput style={inputStyle} />
        </View>
      </View>
    </Layout>
  );
};

export default Profile;
