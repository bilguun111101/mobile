import { useNavigation } from "@react-navigation/native";
import { FillDot, InfortantButton } from "../components";
import { useCallback, useState } from "react";
import { Image, Pressable, SafeAreaView, ScrollView, Text, View } from "react-native";
import { useRental } from "../context";

const Review = () => {
  const navigation = useNavigation();
  const { rental, setRental } = useRental();
  const [gps, setGps] = useState<boolean>(false);
  const [confirm, setConfirm] = useState<boolean>(false);
  const [carSeats, setCarSeats] = useState<boolean>(false);
  const [insurance, setInsurance] = useState<boolean>(false);

  const extras = [
    { source: require('../assets/insurance.png'), text: 'Insurance', active: insurance, onClick: setInsurance },
    { source: require('../assets/baby-car-seat.png'), text: "Car seats", active: carSeats, onClick: setCarSeats },
    { source: require("../assets/gps.png"), text: 'GPS', active: gps, onClick: setGps }
  ]

  const onSubmit = useCallback(() => {
    setRental(() => {
      return {
        ...rental,
        extras: {
          GPS: gps,
          coverage: insurance,
          child_safety: carSeats
        },
        paymentType: confirm ? 'Pay Now': 'Pay at Pickup',
      }
    })
    navigation.navigate('Contact' as never);
  }, [confirm]);
  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <ScrollView>

        {/* introduction section */}
        <View className="w-full bg-[#F1F1F1] relative">
          <View className="w-full pt-3 pb-6 flex-row justify-end">
            <Image
              source={require('../assets/testCar.png')}
              className="w-52"
            />
          </View>

          <View className="w-full p-3">
            <View className="w-full px-3 pb-3 flex-col items-start border-t-0.5 border-gray-600 gap-y-8">

              <View className="flex-row items-center gap-x-2">
                <Image source={require('../assets/locationBlack.png')} className="w-[15px] h-[15px]" />
                <View className="gap-y-1">
                  <Text className="text-base text-gray-600 font-medium">PICKUP</Text>
                  <Text className="text-[13px]">Khan-Uul district</Text>
                  <Text className="text-gray-500 text-base">{ `19 April | 12:00` }</Text>
                </View>
              </View>

              <View className="flex-row items-center gap-x-2">
                <Image source={require('../assets/locationBlack.png')} className="w-[15px] h-[15px]" />
                <View className="gap-y-1">
                  <Text className="text-base text-gray-600 font-medium">DROP-OFF</Text>
                  <Text className="text-[13px]">Khan-Uul district</Text>
                  <Text className="text-gray-500 text-base">{ `19 April | 12:00` }</Text>
                </View>
              </View>

            </View>
          </View>
        </View>
        {/* -------------------------------- */}

        <View className="w-full p-[25px]">
          <View className="w-full p-[3px] flex-column gap-y-[14px]">
            <Text className="font-medium text-base">Coverage & extras</Text>
            {extras.map((el, idx) => {
              const { source, text, active, onClick } = el;
              return (
                <View className="flex-row items-center justify-between" key={idx}>
                  <View className="flex-row items-center gap-x-[11px]">
                    <Image
                      source={source}
                      className='w-[20px] h-[20px]'
                    />
                    <Text className="font-medium text-base">{ text }</Text>
                  </View>
                  <Pressable className={`bg-[#444444] rounded-[20px] w-[70px] p-[4px]`} onPress={() => onClick(!active)}>
                    <Text className="font-bold text-[13px] text-white text-center">{ active ? 'Added' : 'Add' }</Text>
                  </Pressable>
                </View>
              )
            })}
          </View>

        {/* Payment section */}
          <View className="mt-[30px] py-[30px] border-t-0.5 border-[#A7A7A7] px-[3px]">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center gap-x-[11px] pl-[10px]">
                <FillDot active={confirm} onSubmit={() => setConfirm(!confirm)} />
                <Text className="font-normal text-[#515151] text-[13px]">Pay Now</Text>
              </View>
              <Pressable className={`bg-[#444444] rounded-[20px] w-[80px] p-[4px]`}>
                <Text className="font-bold text-[13px] text-white text-center">Add card</Text>
              </Pressable>
            </View>

            <View className="flex-row items-center justify-between mt-[20px] pl-[10px]">
              <View className="flex-row items-center gap-x-[11px]">
                <FillDot active={!confirm} onSubmit={() => setConfirm(!confirm)} />
                <Text className="font-normal text-[#515151] text-[13px]">Pay at Pickup</Text>
              </View>
              <Text className="font-[600] text-[16px] text-black text-center">550.00$</Text>
            </View>
          </View>
          {/* -------------------------------- */}
        </View>

        <View className="pt-[50px] px-[30px] pb-[30px] bg-white" style={{
          shadowColor: "",
          shadowOffset: {
            width: 0,
            height: -3,
          },
          shadowOpacity: 0.05,
          shadowRadius: 2.22,
          elevation: 3,
        }}>
          <InfortantButton text="Rent with" onSubmit={onSubmit} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Review;