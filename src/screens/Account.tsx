import { View, Text, Dimensions } from "react-native";
import React from "react";

const { width, height } = Dimensions.get("window");

const Account = () => {
  return (
    <View className="flex-1">
      <Text>Account</Text>
    </View>
  );
};

export default Account;
