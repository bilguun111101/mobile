import { ImageBackground, View } from 'react-native';
import { Image, ScrollView, Text, Pressable } from 'react-native';

const Booking = () => {
  return (
    <View className='flex-1 bg-white relative'>
      <ScrollView className='relative'>
        <ImageBackground
            source={require('../assets/smart-car.png')}
            resizeMode="cover"
            className='h-[275px] relative overflow-visible px-[30px]'
        >
            <View className='py-[15px] flex-row px-[20px] items-center rounded-[30px] border border-[#CCCCCC] bg-white absolute w-full bottom-[-25px] left-[30px]'>
                <Image
                    source={require('../assets/location-white.png')}
                    className='w-[20px] h-[20px]'
                />
                <Text className='font-normal ml-[20px] text-[12px] text-[#444444]'>Where are you picking up?</Text>
            </View>
        </ImageBackground>
      </ScrollView>
    </View>
  )
}

export default Booking