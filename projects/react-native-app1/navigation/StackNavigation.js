import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { CharactersScreen, HomeScreen, SignUpScreen } from "../screens";
import DrawerNavigation from "./DrawerNavigation";

const Stack = createNativeStackNavigator();

const StackNavigation = ({ isAuthenticated }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      {isAuthenticated ? (
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome" }}
        />
      ) : (
        <>
          <Stack.Screen name="SignIn" component={SignUpScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="List" component={CharactersScreen} />
          <Stack.Screen name="Drawer" component={DrawerNavigation} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigation;
