import moment from 'moment';
import { months } from '../variables';
import { useRental } from '../context';
import { useCallback, useState } from 'react';
import { Calendar } from 'react-native-calendars';
import { useNavigation } from '@react-navigation/native';
import { Image, ScrollView, Text, View } from 'react-native';
import { HeaderContent, InfortantButton, shadow } from '../components';

const date = new Date();
const DateToday = {
  year: date.getFullYear(),
  month: +date.getMonth()
}

const calculateDate = (startDate: Date, endDate: Date) => {
  const stringStartDate = moment(startDate).format().slice(0, 10);
  const stringEndDate = moment(endDate).format().slice(0, 10);
  const date1 = new Date(stringStartDate);
  const date2 = new Date(stringEndDate);
  const timeDifference = date2.getTime() - date1.getTime();
  const totalDays = timeDifference / (1000 * 3600 * 24);
  return { stringStartDate, stringEndDate, totalDays };
};

const When = ({ route }: any) => {
  const { location } = route.params;
  const navigation = useNavigation<any>();
  const { rental, setRental } = useRental();
  const [dateRent, setDateRent] = useState<any>("");
  const [dateReturn, setDateReturn] = useState<any>("");
  const onSubmit = useCallback(() => {
    if(!dateRent || !dateReturn) return;
    const totalDays = +calculateDate(dateRent, dateReturn).totalDays;
    setRental(() => {
      return {
        ...rental, 
        dateRent, 
        totalDays,
        dateReturn, 
      }
    })
    navigation.navigate('Vehicles', {
      dateRent, 
      location,
      totalDays,
      dateReturn, 
    });
  }, [rental, dateRent, dateReturn])

  const header = <Text className='font-bold text-base'>When?</Text>
  return (
    <View className={`flex-1 bg-white relative`}>
      <HeaderContent body={header} />
      <ScrollView className='bg-white flex-1 mt-3 pb-52'>
        <View className='w-full py-5 px-4 bg-white'>
          <Text className='font-bold text-base text-[#555555]'>{ `${months[+DateToday.month].toUpperCase()} ${DateToday.year}` }</Text>
        </View>
        <View className='flex-1 p-2'>
          <Text className='px-3 font-bold text-base'>Date rent</Text>
          <Calendar
            onDayPress={day => {
              setDateRent(day.dateString);
            }}
            markedDates={{
              [dateReturn]: {selected: true, disableTouchEvent: true}
            }}
            style={{
              height: 360,
              borderWidth: 1,
              borderColor: 'white',
            }}
            theme={{
              arrowColor: '#000',
              dayTextColor: '#000',
              monthTextColor: '#000',
              todayTextColor: '#00adf5',
              textDisabledColor: '#d9e',
              backgroundColor: '#F2F3F4',
              selectedDayTextColor: '#fff',
              calendarBackground: '#ffffff',
              textSectionTitleColor: '#b6c1cd',
              selectedDayBackgroundColor: 'red',
            }}
            />
        </View>
        <View className='flex-1 p-2 mb-52'>
          <Text className='px-3 font-bold text-base'>Date return</Text>
          <Calendar
            onDayPress={day => {
              setDateReturn(day.dateString);
            }}
            markedDates={{
              [dateReturn]: {selected: true, disableTouchEvent: true}
            }}
            style={{
              height: 360,
              borderWidth: 1,
              borderColor: 'white',
            }}
            theme={{
              arrowColor: '#000',
              dayTextColor: '#000',
              monthTextColor: '#000',
              todayTextColor: '#00adf5',
              textDisabledColor: '#d9e',
              backgroundColor: '#F2F3F4',
              selectedDayTextColor: '#fff',
              calendarBackground: '#ffffff',
              textSectionTitleColor: '#b6c1cd',
              selectedDayBackgroundColor: 'red',
            }}
            />
        </View>
      </ScrollView>

      <View className='absolute inset-x-0 pb-14 px-8 bottom-0 w-full h-52 bg-white flex-col pt-3' style={shadow.header}>
        <View className='flex-row w-full gap-x-5'>
          { new Array(2).fill(20).map((el, idx) => {
            return (
              <View className='w-1/2 flex-col gap-y-3' key={idx}>
                <View>
                  <Text className='font-bold text-base text-zinc-400'>PICKUP</Text>
                  <Text className='font-normal text-base'>{ `Wed, 19 Apr` }</Text>
                </View>
                <View className='w-full p-2.5 flex-row gap-x-3 border-0.5 items-center rounded border-gray-600'>
                  <Image source={require('../assets/clock.png')} className='w-4' />
                  <Text className='text-base font-medium'>{ `12:00` }</Text>
                </View>
              </View>
            )
          }) }
        </View>
        <View className='mt-[10px]'>
          <InfortantButton text='See Result' onSubmit={onSubmit} disabled={(dateRent && dateReturn) ? false : true} color={location ? '#FF3002' : '#D9D9D9'} />
        </View>
      </View>
    </View>
  )
}

export default When;