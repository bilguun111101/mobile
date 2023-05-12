import { memo, useCallback, useState } from "react";
import { View, Text, Pressable } from "react-native";

const SearchResults = (props: any) => {
  const { places, setLocation, location } = props;
  const [focus, setFocus] = useState<boolean[]>(
    new Array(places + 6).fill(false)
  );
  const onSubmit = useCallback(
    (place: string, index: number) => {
      setFocus((old) => {
        return old.map((el, idx) => (idx === index ? !el : false));
      });
      if (!focus[index]) setLocation(place);
      else setLocation("");
    },
    [location, focus]
  );
  return (
    <View className="px-[30px] gap-y-[20px]">
      {places.map((el: any, idx: number) => {
        const { text, place_name } = el;
        return (
          <Pressable
            key={idx}
            onPress={() => onSubmit(text, idx)}
            className={`rounded-lg ${
              focus[idx] ? "bg-[#FF2F01]" : null
            } px-[10px] py-[5px]`}
          >
            <Text
              className={`font-normal text-[12px] ${
                focus[idx] && "text-white"
              }`}
            >
              {text}
            </Text>
            <Text
              className={`font-normal text-[10px] ${
                focus[idx] ? "text-white" : "text-[#808080]"
              }`}
            >
              {place_name}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

export default memo(SearchResults);
