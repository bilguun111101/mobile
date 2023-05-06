import React, { useEffect } from "react";
import { Pressable, View } from "react-native";

interface Props {
  active: boolean;
  onSubmit?: () => void;
}

const FillDot = ({ active, onSubmit }: Props) => {
  return (
    <Pressable
      className={`w-[15px] h-[15px] rounded-full border-0.5 border-[#848484] bg-${
        active ? "black" : "[#D9D9D9]"
      } p-1`}
      onPress={onSubmit}
    >
      <View
        className={`w-full h-full bg-${
          active ? "gray-primary" : "transparent"
        } rounded-full`}
      />
    </Pressable>
  );
};

export default FillDot;
