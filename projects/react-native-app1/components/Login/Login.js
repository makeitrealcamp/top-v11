import React from "react";
import { ScrollView, View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { CustomInput } from "../CustomInput";
import { CustomButton } from "../CustomButton";

const Login = ({ navigation }) => {
  console.log("Navigation ", navigation);

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem("isAuthenticated", value);
    } catch (e) {
      // saving error
    }
  };

  const goToHome = () => {
    // Validated user
    storeData(true);
    navigation.navigate("Drawer");
  };

  return (
    <ScrollView>
      <Text>Sign in</Text>
      <View>
        <CustomInput label="Email" />
        <CustomInput label="Password" />
        <CustomButton label="Login" handleClick={goToHome} />
      </View>
    </ScrollView>
  );
};

export default Login;
