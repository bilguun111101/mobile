import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import { HeaderContent, VehiclesCard } from "../components";

const FakeCar: Car[] = [
  {
    id: "1",
    image: require("../assets/testCar.png"),
    type: "car",
    typeDefinition: "",
    model: "",
    transmission: "",
    kml: 3,
    passengers: 5,
    price: 10,
  },
  {
    id: "2",
    image: require("../assets/testCar.png"),
    type: "car",
    typeDefinition: "",
    model: "",
    transmission: "",
    kml: 3,
    passengers: 5,
    price: 10,
  },
  {
    id: "1",
    image: require("../assets/testCar.png"),
    type: "car",
    typeDefinition: "",
    model: "",
    transmission: "",
    kml: 3,
    passengers: 5,
    price: 10,
  },
  {
    id: "3",
    image: require("../assets/testCar.png"),
    type: "car",
    typeDefinition: "",
    model: "",
    transmission: "",
    kml: 3,
    passengers: 5,
    price: 10,
  },
  {
    id: "4",
    image: require("../assets/testCar.png"),
    type: "car",
    typeDefinition: "",
    model: "",
    transmission: "",
    kml: 3,
    passengers: 5,
    price: 10,
  },
];

const Vehicles = ({ route }: any) => {
  const body = (
    <View className="w-full flex-row justify-between items-center">
      <Text className="text-lg font-normal ">Khan-Uul district</Text>
      <Pressable>
        <Image source={require("../assets/downArrow.png")} className="w-4" />
      </Pressable>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 relative bg-white">
      <HeaderContent body={body} />
      <ScrollView className="w-full p-5 flex-col gap-y-5">
        <View className="w-full flex-row justify-between items-center">
          <Text className="text-lg font-medium">Driver's DOB</Text>
          <Pressable>
            <Text className="text-base font-bold">+ Add</Text>
          </Pressable>
        </View>
        <View className="mb-[50px]">
          <FlatList
            data={FakeCar}
            renderItem={({ item }) => (
              <VehiclesCard item={item} params={route.params} />
            )}
            keyExtractor={(item, idx) => `key-index${idx}`}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Vehicles;
