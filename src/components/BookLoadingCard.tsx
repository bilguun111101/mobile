import { View, Text, Pressable } from "react-native";
import React from "react";

interface BookLoadingCardProps {
  index: number;
  lastIndex: number;
}

const BookLoadingCard = ({ index, lastIndex }: BookLoadingCardProps) => {
  return (
    <View
      className={`w-[200px] h-[234px] rounded-2xl relative pt-[12px] ${
        index !== 0 && "ml-[35px]"
      } ${lastIndex === index && "mr-[45px]"} bg-gray-secondary`}
    />
  );
};

export default BookLoadingCard;
