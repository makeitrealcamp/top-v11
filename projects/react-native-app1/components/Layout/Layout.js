import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, Platform, View } from "react-native";

import styles from "./style";

const { container, box1, box2, borderColor } = styles;

const Layout = ({ children }) => {
  const [isAndroid, setIsAndroid] = useState(false);

  useEffect(() => {
    if (Platform.OS === "android") {
      setIsAndroid(true);
    }
  }, []);

  const renderChilds = () => (
    <>
      <View style={box1} />
      <View style={box2} />
    </>
  );

  return isAndroid ? (
    <View style={container}>{children}</View>
  ) : (
    <SafeAreaView>{children}</SafeAreaView>
  );
};

export default Layout;
