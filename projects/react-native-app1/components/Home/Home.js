import React from "react";
import { View, Button } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View>
      <Button title="Profile" onPress={() => navigation.navigate("Profile")} />
      <Button
        title="Characters"
        onPress={() => navigation.navigate("Characters")}
      />
    </View>
  );
};

export default Home;
