import React, { useEffect, useState } from "react";
import { Button } from "react-native";

import { Layout } from "../Layout";

const Home = ({ navigation }) => {
  return (
    <Layout>
      <Button
        title="Go to profile"
        onPress={() => navigation.navigate("Profile")}
      />
    </Layout>
  );
};

export default Home;
