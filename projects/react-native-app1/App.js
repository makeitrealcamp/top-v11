import "react-native-gesture-handler";
import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { StackNavigation } from "./navigation";
import useAuth from "./hooks/useAuth";

import styles from "./styles";

export default function App() {
  const { isAuthenticated } = useAuth();
  return (
    <NavigationContainer>
      <StackNavigation isAuthenticated={isAuthenticated} />
    </NavigationContainer>
  );
}
