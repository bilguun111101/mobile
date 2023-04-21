import { FlatList, Image, Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { HeaderContent, VehiclesCard } from '../components';

const array = new Array(20).fill(false);

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
    <SafeAreaView className='flex-1 relative bg-white pb-5'>
      <HeaderContent body={body} />
      <ScrollView className='w-full p-5 flex-col gap-y-5'>
        <View className='w-full flex-row justify-between items-center'>
          <Text className='text-lg font-medium'>Driver's DOB</Text>
          <Pressable>
            <Text className='text-base font-bold'>+ Add</Text>
          </Pressable>
        </View>
        <VehiclesCard />
        <FlatList
          data={array}
          renderItem={({ item }) => <VehiclesCard />}
          keyExtractor={item => item}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Vehicles