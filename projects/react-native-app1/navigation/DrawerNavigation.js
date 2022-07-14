import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, Text } from "react-native";

const Drawer = createDrawerNavigator();

const Test = () => (
  <View>
    <Text>Test page</Text>
  </View>
);

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Test" component={Test} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
