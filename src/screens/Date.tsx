import {useRental} from '../context';
import {useCallback, useState} from 'react';
import {Calendar} from 'react-native-calendars';
import DatePicker from 'react-native-date-picker';
import {useNavigation} from '@react-navigation/native';
import {Image, ScrollView, Text, View} from 'react-native';
import {months, calculateDate, DateToday, theme, week} from '../variables';
import {
  BottomButton,
  HeaderContent,
  InfortantButton,
  shadow,
} from '../components';

const Date = ({route}: any) => {
  const {from, location} = route.params;
  const navigation = useNavigation<any>(),
    {rental, setRental} = useRental(),
    [rentTime, serRentTime] = useState<string>(''),
    [dateRent, setDateRent] = useState<string>(''),
    [returnTime, serReturnTime] = useState<string>(''),
    [dateReturn, setDateReturn] = useState<string>(''),
    [openRentModal, setOpenRentModal] = useState<boolean>(true),
    [openReturnModal, setOpenReturnModal] = useState<boolean>(false),
    [dateRentSection, setDateRentSection] = useState<ChooseDate | undefined>(),
    [dateReturnSection, setDateReturnSection] = useState<
      ChooseDate | undefined
    >();

  const onSubmit = useCallback(() => {
    if (!dateRentSection || !dateReturnSection) return;
    const totalDays = +calculateDate(dateRent, dateReturn).totalDays;
    if (from === 'booking') {
      navigation.navigate('Review', {
        totalDays,
        dateRent: dateRentSection?.dateString,
        dateReturn: dateReturnSection?.dateString,
        ...route.params,
      });
      return;
    }
    navigation.navigate('Vehicles', {
      location,
      totalDays,
      dateRent: dateRentSection?.dateString,
      dateReturn: dateReturnSection?.dateString,
    });
  }, [rental, dateRentSection, dateReturnSection]);

  const RentOnConfirm = useCallback(
    (date: any) => {
      console.log(date);
      setOpenRentModal(false);
    },
    [openRentModal, rentTime],
  );

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
          <View className="flex-1 p-2">
            <Text className="px-3 font-bold text-base">Date rent</Text>
            <Calendar
              onDayPress={day => {
                setDateRentSection(day);
                setDateRent(day.dateString);
              }}
              markedDates={{
                [dateReturn]: {selected: true, disableTouchEvent: true},
              }}
              style={{
                height: 360,
                borderWidth: 1,
                borderColor: 'white',
              }}
              theme={theme}
            />
          </View>
          <View className="flex-1 p-2 mb-52">
            <Text className="px-3 font-bold text-base">Date return</Text>
            <Calendar
              onDayPress={day => {
                setDateReturnSection(day);
                setDateReturn(day.dateString);
              }}
              markedDates={{
                [dateReturn]: {selected: true, disableTouchEvent: true},
              }}
              style={{
                height: 360,
                borderWidth: 1,
                borderColor: 'white',
              }}
              theme={theme}
            />
          </View>
        </ScrollView>

        <View
          className="absolute inset-x-0 pb-14 px-8 bottom-0 w-full h-52 bg-white flex-col pt-3"
          style={shadow.header}>
          <View className="flex-row w-full gap-x-5">
            {new Array(2).fill(20).map((el, idx) => {
              return (
                <View className="w-1/2 flex-col gap-y-3" key={idx}>
                  <View>
                    <Text className="font-bold text-base text-zinc-400">
                      PICKUP
                    </Text>
                    <Text className="font-normal text-base">{`Wed, 19 Apr`}</Text>
                  </View>
                  <View className="w-full p-2.5 flex-row gap-x-3 border-0.5 items-center rounded border-gray-600">
                    <Image
                      source={require('../assets/clock.png')}
                      className="w-4"
                    />
                    <Text className="text-base font-medium">{`12:00`}</Text>
                  </View>
                </View>
              );
            })}
          </View>
          <View className="mt-[10px]">
            <InfortantButton
              text="See Result"
              onSubmit={onSubmit}
              disabled={dateRent && dateReturn ? false : true}
              color={location ? '#FF3002' : '#D9D9D9'}
            />
          </View>
        </View>
        {/* <DatePicker
          modal
          open={openRentModal}
          date={}
          mode="time"
          onConfirm={RentOnConfirm}
          onCancel={() => setOpenRentModal(false)}
        /> */}
      </View>
    </>
  );
};

export default Date;
