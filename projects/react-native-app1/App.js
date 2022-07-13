import { useState } from "react";
import { Text, View, Button, Alert, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { CharacterList } from "./components/CharacterList";

import styles from "./styles";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
        }}
      >
        {isAuthenticated ? (
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "Welcome" }}
          />
        ) : (
          <>
            <Stack.Screen name="Sign in" component={Login} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="List" component={CharacterList} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
