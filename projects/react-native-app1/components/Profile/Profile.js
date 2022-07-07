import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import * as ImagePicker from "expo-image-picker";

import { Layout } from "../Layout";
import { CustomInput } from "../CustomInput";
import { CustomButton } from "../CustomButton";

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
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const uploadImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync();
    const { cancelled, uri } = result;
    if (!cancelled) {
      setImageURI(uri);
    }
  };

  const handleChangeText = (field, value) => {
    setForm((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const sendForm = () => {
    console.warn(form);
    // async
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
        <CustomInput
          name="name"
          label="Name:"
          handleChange={handleChangeText}
        />
        <CustomInput
          name="email"
          label="Email:"
          handleChange={handleChangeText}
        />
        <CustomInput
          name="phone"
          label="Phone:"
          handleChange={handleChangeText}
        />
        <CustomButton label="send" handleClick={sendForm} />
      </View>
    </Layout>
  );
};

export default Profile;
