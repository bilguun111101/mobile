import React, { useCallback } from "react";
import { useOpenAuth, useUser } from "../context";
import { BottomButton, FillDot } from "../components";
import { useNavigation } from "@react-navigation/native";
import { Text, View, Image, ScrollView } from "react-native";
import useGraphql from "../hooks/useGraphql";

const RentalDetails = ({ route }: any) => {
  const {
    id,
    kml,
    type,
    phone,
    email,
    model,
    image,
    price,
    extras,
    confirm,
    dateRent,
    location,
    lastName,
    totalDays,
    firstName,
    passengers,
    dateReturn,
    paymentType,
    transmission,
    typeDefinition,
    userId: carRenterUserId,
  } = route.params;
  const { userStorage } = useUser();
  const { openLogin } = useOpenAuth();
  const { createRentals } = useGraphql();
  const navigation = useNavigation<any>();
  const onSubmit = useCallback(async () => {
    if (!userStorage.token || !userStorage.userId) {
      openLogin();
      return;
    }
    const car = {
      kml,
      type,
      price,
      image,
      model,
      passengers,
      transmission,
      typeDefinition,
    };
    const response = await createRentals({
      car,
      extras,
      location,
      dateRent,
      totalDays,
      dateReturn,
      userId: userStorage.userId,
    });
    if (!response) {
      console.log("rental is failed!!!");
      return;
    }
    navigation.navigate("Bottom_tab_container");
  }, []);
  return (
    <View className="flex-1 relative bg-white pb-bottom">
      <ScrollView>
        <View className="bg-[#F1F1F1]">
          <View className="pt-[10px] pb-[20px] px-[30px]">
            <Text className="font-medium text-base text-[#777777] mb-[5px]">
              Contact info
            </Text>
            <View>
              <View className="flex-row items-center justify-between">
                <Text className="text-base font-normal">First name</Text>
                <Text className="text-[12px] font-medium">{firstName}</Text>
              </View>
              <View className="flex-row items-center justify-between">
                <Text className="text-base font-normal">Last name</Text>
                <Text className="text-[12px] font-medium">{lastName}</Text>
              </View>
              <View className="flex-row items-center justify-between">
                <Text className="text-base font-normal">Email</Text>
                <Text className="text-[12px] font-medium">{email}</Text>
              </View>
              <View className="flex-row items-center justify-between">
                <Text className="text-base font-normal">Phone</Text>
                <Text className="text-[12px] font-medium">{phone}</Text>
              </View>
            </View>
          </View>
          <View className="mx-[10px] border-t-0.5 border-[#A7A7A7] p-[20px]">
            <Text className="font-medium text-base text-[#777777] mb-[7px]">
              Pick-up & Return Location
            </Text>
            <View className="flex-row gap-y-[8px] items-center mb-[7px]">
              <Image
                source={require("../assets/locationBlack.png")}
                className="w-[15px] h-[15px] mr-[8px]"
              />
              <Text className="text-[13px] font-medium text-[#444444]">
                Khan-Uul district
              </Text>
            </View>
            <View>
              <Text className="font-medium text-base text-[#777777] mb-[7px]">
                Dates & Times
              </Text>
              <Text className="font-normal text-[13px] text-[#898989]">
                {" "}
                * Thu, Apr 20, 2023 @ 12:00 PM
              </Text>
              <Text className="font-normal text-[13px] text-[#898989]">
                {" "}
                * Fri, Apr 21, 2023 @ 12:00 PM
              </Text>
            </View>
          </View>
        </View>
        <View>
          <View className="pt-[30px] pl-[20px]">
            <Text className="font-medium text-base">Small Sedan</Text>
            <View className="w-full pb-[18px] flex-row justify-end scroll-hidden relative h-[140px]">
              <Image source={{ uri: image }} className="w-[200px] mr-[-30px]" />
            </View>
          </View>

          <View className="mx-[10px] py-[30px] border-t-0.5 border-[#A7A7A7] px-[3px]">
            <View className="flex-row items-center justify-between mt-[20px] px-[20px]">
              <View className="flex-row items-center gap-x-[11px]">
                <FillDot active={!confirm} />
                <Text className="font-normal text-[#515151] text-[13px]">
                  Pay at Pickup
                </Text>
              </View>
              <Text className="font-[600] text-[16px] text-black text-center">
                550.00$
              </Text>
            </View>
          </View>
        </View>
        {/* -------------------------------- */}
      </ScrollView>
      <BottomButton text="Confirm Rentals" onSubmit={onSubmit} color={false} />
    </View>
  );
};

export default RentalDetails;
