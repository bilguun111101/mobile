import { useCallback, useState } from "react";
import DatePicker from "react-native-date-picker";
import { shadow, HeaderContent } from "../components";
import { useNavigation } from "@react-navigation/native";
import InfortantButton from "../components/InfortantButton";
import { months, calculateDate, DateToday } from "../variables";
import { Alert, Image, Pressable, ScrollView, Text, View } from "react-native";

const When = ({ route }: any) => {
  const { from, location } = route.params;
  const navigation = useNavigation<any>();
  const [openRentModal, setOpenRentModal] = useState<boolean>(false);
  const [openReturnModal, setOpenReturnModal] = useState<boolean>(false);
  const [dateRentSection, setDateRentSection] = useState<any>();
  const [dateReturnSection, setDateReturnSection] = useState<any>();

  const onSubmit = useCallback(() => {
    if (!dateRentSection || !dateReturnSection) return;
    const totalDays = +calculateDate(dateRentSection.day, dateReturnSection.day)
      .totalDays;
    if (from === "booking") {
      navigation.navigate("Review", {
        totalDays,
        dateRent: dateRentSection?.day,
        dateReturn: dateReturnSection?.day,
        ...route.params,
      });
      return;
    }
    if (!totalDays) {
      Alert.alert("1-ээс дээш хоногоор түрээслүүлнэ!");
      return;
    }
    navigation.navigate("Vehicles", {
      location,
      totalDays,
      dateRent: dateRentSection?.day,
      dateReturn: dateReturnSection?.day,
    });
  }, [dateRentSection, dateReturnSection]);

  const RentOnConfirm = useCallback(
    (date: any) => {
      setDateRentSection({
        time: `${date.getHours()}:${date.getMinutes()}`,
        day: `${date.getFullYear()}-${
          date.getMonth() > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`
        }-${date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`}`,
      });
      setOpenRentModal(false);
    },
    [openRentModal, dateRentSection]
  );

  const ReturnOnConfirm = useCallback(
    (date: any) => {
      setDateReturnSection({
        time: `${date.getHours()}:${date.getMinutes()}`,
        day: `${date.getFullYear()}-${
          date.getMonth() > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`
        }-${date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`}`,
      });
      setOpenReturnModal(false);
    },
    [openReturnModal, dateReturnSection]
  );

  const bottom = [
    {
      title: "PICKUP",
      date: dateRentSection?.day,
      time: dateRentSection?.time,
    },
    {
      title: "DROP-OFF",
      date: dateReturnSection?.day,
      time: dateReturnSection?.time,
    },
  ];

  return (
    <>
      <View className={`flex-1 bg-white relative`}>
        <HeaderContent
          body={<Text className="font-bold text-base">When?</Text>}
        />
        <ScrollView className="bg-white flex-1 mt-3 pb-52">
          <View className="w-full py-5 px-4 bg-white">
            <Text className="font-bold text-base text-[#555555]">{`${months[
              +DateToday.month
            ].toUpperCase()} ${DateToday.year}`}</Text>
          </View>
          <View className="flex-1 p-2 flex-col items-center">
            <Pressable
              className="px-[15px] py-[10px] rounded-[10px] bg-red-primary"
              onPress={() => {
                setOpenRentModal(true);
              }}
            >
              <Text className="text-white font-medium">
                Choose your date of rent
              </Text>
            </Pressable>
            <DatePicker
              date={new Date()}
              modal
              open={openRentModal}
              onConfirm={RentOnConfirm}
              onCancel={() => setOpenRentModal(false)}
            />
          </View>
          <View className="flex-1 p-2 mb-52 flex-col items-center">
            <Pressable
              className="px-[15px] py-[10px] rounded-[10px] bg-red-primary"
              onPress={() => {
                setOpenReturnModal(!openReturnModal);
              }}
            >
              <Text className="text-white font-medium">
                Choose your date of return
              </Text>
            </Pressable>
            <DatePicker
              date={new Date()}
              modal
              open={openReturnModal}
              onConfirm={ReturnOnConfirm}
              onCancel={() => setOpenReturnModal(false)}
            />
          </View>
        </ScrollView>

        <View
          className="absolute inset-x-0 pb-14 px-8 bottom-0 w-full h-[218px] bg-white flex-col pt-3"
          style={shadow.header}
        >
          <View className="flex-row w-full gap-x-5">
            {bottom.map((el, idx) => {
              const { title, date, time } = el;
              return (
                <View className="w-1/2 flex-col gap-y-3" key={idx}>
                  <View>
                    <Text className="font-bold text-base text-zinc-400">
                      {title}
                    </Text>
                    <Text className="font-normal text-base">
                      {date || "0000-0-0"}
                    </Text>
                  </View>
                  <View className="w-full p-2.5 flex-row gap-x-3 border-0.5 items-center rounded border-gray-600">
                    <Image
                      source={require("../assets/clock.png")}
                      className="w-4"
                    />
                    <Text className="text-base font-medium">
                      {time || "00:00"}
                    </Text>
                  </View>
                </View>
              );
            })}
          </View>
          <View className="mt-[20px]">
            <InfortantButton
              text="See Result"
              onSubmit={onSubmit}
              color={
                dateRentSection && dateReturnSection
                  ? "bg-red-primary"
                  : "bg-gray-primary"
              }
              disabled={dateRentSection && dateReturnSection ? false : true}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default When;
