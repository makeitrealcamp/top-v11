import { Text, View, Button, Alert, TouchableOpacity } from "react-native";

import { CustomButton } from "./components/CustomButton";
import { Layout } from "./components/Layout";
import { Profile } from "./components/Profile";
import { CharacterList } from "./components/CharacterList";

import styles from "./styles";

export default function App() {
  const { Container: containerStyle, Text: textStyle } = styles;

  return <CharacterList />;
}
