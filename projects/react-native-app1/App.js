import { Text, View, Button, Alert, TouchableOpacity } from "react-native";

import { CustomButton } from "./components/CustomButton";
import { Layout } from "./components/Layout";

import styles from "./styles";

export default function App() {
  const { Container: containerStyle, Text: textStyle } = styles;

  const onClick = () => {
    console.warn("click");
    Alert.alert("Click");
  };

  return <Layout />;
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
