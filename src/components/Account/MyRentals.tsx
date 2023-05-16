import { View, Text, ScrollView } from "react-native";
import React, { memo } from "react";
import MyRentalsCard from "./MyRentalsCard";

const array = new Array(7).fill(0);

const MyRentals = () => {
  return (
    <ScrollView className="bg-white">
      <View className="flex-1 relative pb-bottom px-[20px] pt-[20px]">
        <View className="border-b border-[#848484] py-[15px]">
          <Text className="font-semibold text-[15px]">
            Current & Upcoming Reservations (1)
          </Text>
        </View>

        <Text className="text-[12px] py-[15px]">
          Reservations made with an Car Rent account are listed below.
        </Text>

        <View>
          {array.map((el, idx) => {
            return <MyRentalsCard key={idx} />;
          })}
        </View>
      </View>
    </ScrollView>
  );
};

export default memo(MyRentals);
