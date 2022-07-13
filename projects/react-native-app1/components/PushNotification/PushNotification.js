import React from "react";

import { CustomInput } from "../CustomInput";
import { CustomButton } from "../CustomButton";

const PushNotification = () => {
  return (
    <View>
      <CustomInput label="Message" />
      <CustomButton label="Send" />
    </View>
  );
};

export default PushNotification;
