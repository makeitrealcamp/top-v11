import { Text, View, Button, Alert, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { CustomButton } from "./components/CustomButton";
import { Layout } from "./components/Layout";
import { Profile } from "./components/Profile";
import { CharacterList } from "./components/CharacterList";
import { Home } from "./components/Home";

import styles from "./styles";

const Stack = createNativeStackNavigator();

export default function App() {
  const { Container: containerStyle, Text: textStyle } = styles;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Characters" component={CharacterList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
