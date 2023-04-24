import { FlatList, Image, Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { HeaderContent, VehiclesCard } from '../components';

// const array = new Array(20).fill(false);
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Vehicles = () => {
  const body = (
    <View className='w-full flex-row justify-between items-center'>
      <Text className='text-lg font-normal '>Khan-Uul district</Text>
      <Pressable>
        <Image
          source={require('../assets/downArrow.png')}
          className='w-4'
        />
      </Pressable>
    </View>
  )
  return (
    <SafeAreaView className='flex-1 relative bg-white'>
      <HeaderContent body={body} />
      <ScrollView className='w-full p-5 flex-col gap-y-5'>
        <View className='w-full flex-row justify-between items-center'>
          <Text className='text-lg font-medium'>Driver's DOB</Text>
          <Pressable>
            <Text className='text-base font-bold'>+ Add</Text>
          </Pressable>
        </View>
        <VehiclesCard />
        <View className='mb-[50px]'>
          <FlatList
            data={array}
            renderItem={({ item }) => <VehiclesCard />}
            keyExtractor={(item, idx) => `key-index${idx}`}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Vehicles