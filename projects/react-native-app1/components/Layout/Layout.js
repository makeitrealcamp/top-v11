import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, Platform, View } from "react-native";

import styles from "./style";

const { container, box1, box2, borderColor } = styles;

const Layout = () => {
  const [isAndroid, setIsAndroid] = useState(false);

  useEffect(() => {
    if (Platform.OS === "android") {
      setIsAndroid(true);
    }
  }, []);

  return (
    <SafeAreaView style={container}>
      <View style={box1} />
      <View style={box2} />
    </SafeAreaView>
  );
};

export default Layout;
