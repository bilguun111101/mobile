import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";

const Review = () => {
  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <ScrollView className="">
        <View className="w-full bg-[#F1F1F1] relative">
          <View className="w-full pt-3 pb-6 flex-row justify-end ">
            <Image
              source={require('../assets/testCar.png')}
              className="w-52"
            />
          </View>

          <View className="w-full p-3">
            <View className="w-full px-3 pb-3 flex-col items-start border-t-0.5 border-gray-600 gap-y-8">

              <View className="flex-row items-center gap-x-2">
                <Image source={require('../assets/locationBlack.png')} />
                <View className="gap-y-1">
                  <Text className="text-base text-gray-600 font-medium">PICKUP</Text>
                  <Text className="text-[13px]">Khan-Uul district</Text>
                  <Text className="text-gray-500 text-base">{ `19 April | 12:00` }</Text>
                </View>
              </View>

              <View className="flex-row items-center gap-x-2">
                <Image source={require('../assets/locationBlack.png')} />
                <View className="gap-y-1">
                  <Text className="text-base text-gray-600 font-medium">DROP-OFF</Text>
                  <Text className="text-[13px]">Khan-Uul district</Text>
                  <Text className="text-gray-500 text-base">{ `19 April | 12:00` }</Text>
                </View>
              </View>

            </View>
          </View>
        </View>
        
      </ScrollView>
    </SafeAreaView>
  )
}

export default Review;