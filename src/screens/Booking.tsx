import { useCarsData } from "../context";
import { BookCard, RateCard } from "../components";
import { useNavigation } from "@react-navigation/native";
import { Image, ScrollView, Text, Pressable } from "react-native";
import { FlatList, ImageBackground, RefreshControl, View } from "react-native";
import BookLoadingCard from "../components/BookLoadingCard";

const array = new Array(20).fill(0);
const isLoadingData = new Array(5).fill(0);

const Booking = () => {
  const navigation = useNavigation<any>();
  const { secondLoading, controllCarsData, firstFiveCarsData } = useCarsData();

  return (
    <View className="flex-1 bg-white relative">
      <ScrollView
        className="relative"
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={secondLoading}
            onRefresh={controllCarsData}
          />
        }
      >
        <ImageBackground
          source={require("../assets/smart-car.png")}
          resizeMode="cover"
          className="h-[275px] relative overflow-visible px-[30px]"
        >
          <Pressable
            onPress={() =>
              navigation.navigate("Location", { from: "anywhere" })
            }
            className="py-[15px] flex-row px-[20px] items-center rounded-[30px] border border-[#CCCCCC] bg-white absolute w-full bottom-[-25px] z-10 left-[30px]"
          >
            <Image
              source={require("../assets/location-white.png")}
              className="w-[20px] h-[20px]"
            />
            <View>
              <Text className="font-normal ml-[20px] text-[12px] text-[#444444] w-full border-none">
                Where are you picking up?
              </Text>
            </View>
          </Pressable>
        </ImageBackground>
        <View className="pt-[50px]">
          <View className="flex-row justify-between items-center mb-[12px] px-[36px]">
            <Text className="font-normal text-[15px]">Hot deals</Text>
            <Pressable>
              <Text className="text-[#0232DD] font-normal">view all</Text>
            </Pressable>
          </View>

          {firstFiveCarsData?.length === 0 ? (
            <FlatList
              data={isLoadingData}
              horizontal
              className="pl-[30px]"
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => (
                <BookLoadingCard
                  index={index}
                  lastIndex={isLoadingData.length - 1}
                />
              )}
              keyExtractor={(item, index) => `index-${index}`}
            />
          ) : (
            <FlatList
              data={firstFiveCarsData}
              horizontal
              className="pl-[30px]"
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => (
                <BookCard
                  index={index}
                  item={item}
                  lastIndex={firstFiveCarsData.length - 1}
                />
              )}
              keyExtractor={(item, index) => `index-${index}`}
            />
          )}
        </View>

        <View className="mt-[20px]">
          <View className="flex-row justify-between items-center mb-[20px] px-[36px]">
            <Text className="font-normal text-[15px]">Top dealers</Text>
            <Pressable>
              <Text className="text-[#0232DD] font-normal">view all</Text>
            </Pressable>
          </View>

          <FlatList
            data={array}
            horizontal
            className="pl-[30px] pb-bottom"
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <RateCard
                index={index}
                item={item}
                lastIndex={array.length - 1}
              />
            )}
            keyExtractor={(item, index) => `index-${index}`}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Booking;
