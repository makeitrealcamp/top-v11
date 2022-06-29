import { Text, View } from "react-native";

import styles from "./styles";

export default function App() {
  const { Container: containerStyle, Text: textStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={textStyle}>
        Open up App.js to start working on your app!
      </Text>
    </View>
  );
}
