import React from "react";
import { ScrollView, View, Text } from "react-native";

import { CustomInput } from "../CustomInput";
import { CustomButton } from "../CustomButton";

const Login = ({ navigation }) => {
  const goToHome = () => {
    navigation.navigate("Home");
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
