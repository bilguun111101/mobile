import axios from "axios";
import SearchResults from "../components/SearchResults";
import { useCallback, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";
import { BottomButton, HeaderLeftBtn } from "../components";
import { NEXT_PUBLIC_MAPBOX_KEY_SEARCK_ACCESS_TOKEN } from "@env";
import { Alert, Image, ScrollView, Text, TextInput, View } from "react-native";

const Location = ({ route }: any) => {
  const navigation = useNavigation<any>();
  const [places, setPlaces] = useState([]);
  const [search, setSearch] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  const onJumpToDatePicker = useCallback(() => {
    if (!location) {
      Alert.alert("Choose your location!!!");
      return;
    }
    if (!route.params.from) return;

    if (route.params.from === "booking") {
      navigation.navigate("When", {
        location,
        ...route.params,
      });
      return;
    }
    navigation.navigate("When", { location, from: route.params.from });
  }, [location, navigation]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${search}.json?access_token=${NEXT_PUBLIC_MAPBOX_KEY_SEARCK_ACCESS_TOKEN}`
      );
      setPlaces(response.data.features);
    })();
  }, [search]);

  return (
    <View className="flex-1 bg-white relative pb-bottom">
      <ScrollView className="relative">
        <LinearGradient
          colors={["#FF2F01", "#FF7601"]}
          className="h-[140px] px-[30px] pt-[55px] flex-col relative w-full overflow-visible"
        >
          <View>
            <HeaderLeftBtn />
          </View>
          <View className="py-[15px] flex-row px-[20px] items-center rounded-[30px] border border-[#CCCCCC] bg-white absolute w-full bottom-[-25px] left-[30px]">
            <Image
              source={require("../assets/location-white.png")}
              className="w-[20px] h-[20px]"
            />
            <TextInput
              onChangeText={(text) => setSearch(text)}
              className="font-normal ml-[20px] text-[12px] text-[#444444] w-full border-none"
              placeholder="Where are you picking up ..."
              value={search}
            />
          </View>
        </LinearGradient>

        <View className="py-[45px] px-[40px]">
          <View className="flex-row items-center mb-[20px] h-[30px]">
            <Image
              source={require("../assets/locationBlack.png")}
              className="w-[15px] h-[15px]"
            />
            <Text className="font-bold text-base ml-[10px]">Places</Text>
          </View>
          <View className="px-[30px] gap-y-[20px]">
            <SearchResults
              places={places}
              setLocation={setLocation}
              location={location}
            />
          </View>
        </View>
      </ScrollView>
      <BottomButton
        text="Add Dates & Times"
        onSubmit={onJumpToDatePicker}
        disabled={!location ? true : false}
        color={location ? false : true}
      />
    </View>
  );
};

export default Location;
