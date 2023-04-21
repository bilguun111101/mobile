import { useState } from 'react';
import { months } from '../variables';
import { Calendar } from 'react-native-calendars';
import { HeaderContent, shadow } from '../components';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

const date = new Date();
const DateToday = {
  year: date.getFullYear(),
  month: +date.getMonth()
}

const When = () => {
  const [selected, setSelected] = useState<string>('');
  const pickup = [
    {},
    {}
  ]
  const header = <Text className='font-bold text-base'>When?</Text>
  return (
    <View className={`flex-1 bg-white relative`}>
      <HeaderContent body={header} />
      <ScrollView className='bg-white flex-1 mt-3 pb-52'>
        <View className='w-full py-5 px-4 bg-white'>
          <Text className='font-bold text-base text-[#555555]'>{ `${months[+DateToday.month].toUpperCase()} ${DateToday.year}` }</Text>
        </View>
        <View className='flex-1 p-2'>
          <Calendar
            onDayPress={day => {
              setSelected(day.dateString)
            }}
            markedDates={{
              [selected]: {selected: true, disableTouchEvent: true}
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
          { pickup.map((el, idx) => {
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

        <Pressable className='w-full py-3 bg-red-500 mt-4 rounded-lg active:bg-red-600'>
          <Text className='text-white text-center'>See Result</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default When;