import { useNavigation } from "@react-navigation/native";
import { memo, useCallback } from "react";
import { Image, Pressable, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";

interface Props {
  item: Car;
  params: Rental;
}

const VehiclesCard = (props: Props) => {
  const {
    id,
    kml,
    type,
    price,
    model,
    image,
    passengers,
    transmission,
    typeDefinition,
  } = props.item;
  const indicator = [
    { source: require("../assets/speed.png"), text: "15 KML" },
    { source: require("../assets/gearbox.png"), text: "AUTO" },
    { source: require("../assets/seatAmount.png"), text: 4 },
    { source: require("../assets/car-door.png"), text: 2 },
  ];
  const navigation = useNavigation<any>();
  const onSubmit = useCallback(() => {
    navigation.navigate("Review", {
      ...props.item,
      ...props.params,
    });
  }, [props.item, props.params]);
  return (
    <LinearGradient
      className="w-full border-0.5 pl-5 py-5 rounded-lg flex-col mt-5"
      colors={["#D9D9D9", "#F2F3F4"]}
    >
      <Text className="font-bold text-base">Small Sedan</Text>
      <View className="w-full flex-row gap-5 items-center justify-between">
        <View>
          <Text>
            <Text className="text-base font-medium">$50</Text>
            <Text className="text-[10px]">.00/day</Text>
          </Text>
          <Text className="text-[10px]">$550.00 est total</Text>
        </View>
        <View>
          <Image source={require("../assets/testCard.png")} className="w-52" />
        </View>
      </View>
      <View className="w-full flex-row justify-center gap-x-5">
        {indicator.map((el, idx) => {
          const { source, text } = el;
          return (
            <View className="flex-row gap-1 items-center" key={idx}>
              <Image source={source} className="w-4 h-4" />
              <Text className="font-medium text-base">{text}</Text>
            </View>
          );
        })}
      </View>
      <View className="w-full pr-5 mt-5">
        <Pressable className="py-1 bg-[#444444] rounded-2xl" onPress={onSubmit}>
          <Text className="text-white text-base font-medium text-center">
            Select Vehicle
          </Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
};

export default memo(VehiclesCard);
