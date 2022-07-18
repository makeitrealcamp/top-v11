import React, { useEffect, useState } from "react";

import { View } from "react-native";

import {
  registerForPushNotificationsAsync,
  sendPushNotification,
} from "../../services/pushNotificationService";
import { CustomInput } from "../CustomInput";
import { CustomButton } from "../CustomButton";

const PushNotification = () => {
  const [message, setMessage] = useState("");
  const [expoPushToken, setExpoPushToken] = useState();

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );
  }, []);

  const onChangeText = (_, value) => {
    setMessage(value);
  };

  const onClick = () => {
    const messageToSend = {
      to: expoPushToken,
      sound: "default",
      title: "React Native app1",
      body: message,
    };
    sendPushNotification(messageToSend);
  };

  return (
    <View>
      <CustomInput label="Message" name="message" handleChange={onChangeText} />
      <CustomButton label="Send" handleClick={onClick} />
    </View>
  );
};

export default PushNotification;
