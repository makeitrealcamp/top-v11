import { useState } from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

import { StackNavigation } from "./navigation";

import styles from "./styles";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <NavigationContainer>
      <StackNavigation isAuthenticated={isAuthenticated} />
    </NavigationContainer>
  );
}
