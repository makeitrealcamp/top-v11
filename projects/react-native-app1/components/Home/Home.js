import React from "react";
import { View, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { Profile } from "../Profile";
import { CharacterList } from "../CharacterList";
import { PushNotification } from "../PushNotification";

const Tab = createBottomTabNavigator();

const CONFIG_ICONS = {
  profile: {
    icon: "home",
    iconOutline: "home-outline",
  },
  character: {
    icon: "view-list",
    iconOutline: "view-list-outline",
  },
  pushNotification: {
    icon: "bell",
    iconOutline: "",
  },
};

const Home = ({ navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        // tabBarActiveTintColor: "red",
        //tabBarInactiveTintColor: "blue",
        //tabBarLabelStyle: { color: "blue" },
        tabBarIcon: ({ focused, color, size }) => {
          const { name: nameRoute } = route;
          const config = CONFIG_ICONS[nameRoute] ? CONFIG_ICONS[nameRoute] : {};
          const { icon: activeIcon, iconOutline: inactiveIcon } = config || {};

          return (
            <MaterialCommunityIcons
              name={focused ? activeIcon : inactiveIcon}
              color={color}
              size={size}
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: "green",
        inactiveTintColor: "gray",
        labelStyle: { fontSize: 20 },
        labelPosition: "below-icon",
      }}
    >
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
        }}
      />
      <Tab.Screen
        name="character"
        component={CharacterList}
        options={{
          tabBarLabel: "Character",
        }}
      />
      <Tab.Screen
        name="pushNotification"
        component={PushNotification}
        options={{
          tabBarLabel: "Push Notification",
        }}
      />
    </Tab.Navigator>
  );
};

export default Home;
