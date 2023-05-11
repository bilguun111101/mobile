import { memo, useCallback, useState } from "react";
import { View, Text, Pressable } from "react-native";

// const Place = (props: any) => {
//   return (
//     <Pressable
//       key={idx}
//       onPress={() => onSubmit(`${district}`, idx)}
//       className={`rounded-lg ${
//         focus[idx] ? "bg-[#FF2F01]" : null
//       } px-[10px] py-[5px]`}
//     >
//       <Text className={`font-normal text-[12px] ${focus[idx] && "text-white"}`}>
//         {district}
//       </Text>
//       <Text
//         className={`font-normal text-[10px] ${
//           focus[idx] ? "text-white" : "text-[#808080]"
//         }`}
//       >
//         {/* {capital} */}
//         hello
//       </Text>
//     </Pressable>
//   );
// };

const SearchResults = (props: any) => {
  const [location, setLocation] = useState<string>("");
  const [focus, setFocus] = useState<boolean[]>(new Array(5).fill(false));
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
      {focus.map((el, idx) => {
        return (
          <Pressable
            key={idx}
            onPress={() => onSubmit(`{district}`, idx)}
            className={`rounded-lg ${
              focus[idx] ? "bg-[#FF2F01]" : null
            } px-[10px] py-[5px]`}
          >
            <Text
              className={`font-normal text-[12px] ${
                focus[idx] && "text-white"
              }`}
            >
              {/* {district} */}
              bayngol
            </Text>
            <Text
              className={`font-normal text-[10px] ${
                focus[idx] ? "text-white" : "text-[#808080]"
              }`}
            >
              {/* {capital} */}
              hello
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

export default memo(SearchResults);
