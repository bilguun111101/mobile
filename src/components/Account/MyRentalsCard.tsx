import { View, Text, Image } from "react-native";
import React from "react";

const MyRentalsCard = () => {
  const lists = ["Standard SUV", "BMW X6 or similiar", "Automatic"];
  return (
    <View className="border-[0.5px] border-[#6D6D6D] rounded-[5px] mb-[20px]">
      <View className="flex-row bg-[#DDDDDD] p-[10px] rounded-t-[5px] border-b-[0.5px] border-[#6D6D6D]">
        <View>
          <Text className="font-medium text-base">Apr 20 - Apr 27</Text>
          <Text className="text-[9px] font-normal">
            Confirmation Number: 123456789 |{" "}
            <Text className="text-red-primary">
              View Details, Modify or Cancel
            </Text>
          </Text>
          <View className="flex-row justify-end pt-[10px] w-full">
            <Image
              source={require("../../assets/toyato.png")}
              className="w-[100px] h-[50px]"
            />
          </View>
        </View>
      </View>

      <View className="flex-row">
        <View className="p-[7px] border-r-[0.5px] w-1/3 relative h-auto">
          <View className="absolute w-[20px] h-[20px] top-[50%] translate-x-[-50%] right-[-10px] bg-white p-[2px] rounded-full">
            <Image
              source={require("../../assets/right-arrow.png")}
              className="w-full h-full"
            />
          </View>

          <Text className="text-[12px] font-medium mb-[5px]">PICK-UP</Text>
          <Text className="text-[7px] font-normal">
            Khan-Uul district 17 Ulaanbaatar, Mongolia
          </Text>

          <Text className="text-[9px] font-medium text-[#777777] mt-[5px]">
            Sat, Apr 22, 2023 12:00 PM
          </Text>
        </View>

        <View className="p-[7px] pl-[13px] border-r-[0.5px] w-1/3 relative h-auto">
          <View className="absolute w-[20px] h-[20px] top-[50%] translate-x-[-50%] right-[-10px] bg-white p-[2px] rounded-full">
            <Image
              source={require("../../assets/right-arrow.png")}
              className="w-full h-full"
            />
          </View>

          <Text className="text-[12px] font-medium mb-[5px]">RERTURN</Text>
          <Text className="text-[7px] font-normal">
            Khan-Uul district 17 Ulaanbaatar, Mongolia
          </Text>

          <Text className="text-[9px] font-medium text-[#777777] mt-[5px]">
            Sat, Apr 22, 2023 12:00 PM
          </Text>
        </View>

        <View className="p-[7px] pl-[13px] w-1/3 relative h-auto">
          <Text className="text-[12px] font-medium mb-[5px]">VEHICLE</Text>

          <View className="ml-[4px]">
            {lists.map((el, idx) => {
              return (
                <View className="flex-row items-center w-full" key={idx}>
                  <View className="w-[4px] h-[4px] rounded-full bg-black mr-[3px]" />
                  <Text className="text-[9px] font-medium text-[#777777] mt-[5px]">
                    {el}
                  </Text>
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </View>
  );
};

export default MyRentalsCard;
