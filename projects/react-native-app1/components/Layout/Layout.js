import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, Platform, View } from "react-native";

import styles from "./style";

const { container, box1, box2, borderColor, box3 } = styles;

const Layout = ({ children }) => {
  const [isAndroid, setIsAndroid] = useState(false);

  useEffect(() => {
    if (Platform.OS === "android") {
      setIsAndroid(true);
    }
  }, []);

  const renderChildren = () => (
    <>
      <View style={box1} />
      <View style={box2} />
      <View style={[box3, borderColor]}>
        <Text>item 1</Text>
        <Text>item 2</Text>
        <Text>item 3</Text>
      </View>
    </>
  );

  return isAndroid ? (
    <View style={container}>{children}</View>
  ) : (
    <SafeAreaView>{children}</SafeAreaView>
  );
};

export default Layout;
