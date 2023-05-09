import { BookCard, RateCard } from "../components";
import { useNavigation } from "@react-navigation/native";
import { ChangeEvent, useEffect, useState } from "react";
import { FlatList, ImageBackground, RefreshControl, View } from "react-native";
import { Image, ScrollView, Text, Pressable } from "react-native";
import useGraphql from "../hooks/useGraphql";
// import { useGraphql from "../hooks/useGraphql";

const array = new Array(20).fill(0);
const take = 5;
const perPage = 5;

const FakeCar: Car[] = [
  {
    id: "1",
    image: require("../assets/toyato.png"),
    type: "car",
    typeDefinition: "",
    model: "",
    transmission: "",
    kml: 3,
    passengers: 5,
    price: 10,
    name: "TOYATO",
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
    name: "TOYATO",
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
    name: "TOYATO",
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
    name: "TOYATO",
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
    name: "TOYATO",
  },
];

const Booking = () => {
  const navigation = useNavigation<any>();
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const { getAllCarsByPage, getCarsByPageLoading: loading } = useGraphql();
  const [carsData, setCarsData] = useState<Car[] | []>([]);
  const [active, setActive] = useState(1);

  // Get data at every click on the PAGINATION number
  const paginationHandler = async (page: number) => {
    const skip = page === 1 ? 0 : perPage * page - perPage;

    const data = await getAllCarsByPage(skip, take, "desc");

    if (data) {
      setCarsData([...data]);
    } else {
      setCarsData([]);
    }
  };

  // Get data at every click on the Price Sort select option
  const onSelectHandler = async (e: ChangeEvent<HTMLSelectElement>) => {
    const priceValue = e.target.value;
    if (priceValue === "Price: High to Low") {
      const data = await getAllCarsByPage(0, take, "desc");

      if (data) {
        setCarsData([...data]);
      } else {
        setCarsData([]);
      }
    }
    if (priceValue === "Price: Low to High") {
      const data = await getAllCarsByPage(0, take, "asc");

      if (data) {
        setCarsData([...data]);
      } else {
        setCarsData([]);
      }
    }
  };

  useEffect(() => {
    (async () => {
      const data = await getAllCarsByPage(0, take, "desc");

      if (data) setCarsData(data.getAllCarsWithPagination);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   const totalDays = rentals.totalDays;
  //   if (totalDays === 0) toast.error('Та байршил, өдрөө сонгоно уу');
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <View className="flex-1 bg-white relative">
      <ScrollView
        className="relative"
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={() => {}} />
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

          <FlatList
            data={FakeCar}
            horizontal
            className="pl-[30px]"
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <BookCard
                index={index}
                item={item}
                lastIndex={array.length - 1}
              />
            )}
            keyExtractor={(item, index) => `index-${index}`}
          />
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
