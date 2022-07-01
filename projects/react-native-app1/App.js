import { Text, View, Button, Alert, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import { CustomButton } from "./components/CustomButton";
import { Layout } from "./components/Layout";
import { Profile } from "./components/Profile";
import { Home } from "./components/Home";

import styles from "./styles";

export default function App() {
  const { Container: containerStyle, Text: textStyle } = styles;

  const onClick = () => {
    console.warn("click");
    Alert.alert("Click");
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="Profile" component={Profile}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

{
  /*<View style={containerStyle}>
      <Text style={textStyle}>
        Open up App.js to start working on your app!
      </Text>
      <Button
        onPress={onClick}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <CustomButton handleClick={onClick} label="Click me!" />
  </View>*/
}
