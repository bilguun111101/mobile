import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
    item: number;
    index: number;
    lastIndex: number;
}

const BookCard = ({ index, item, lastIndex }: Props) => {
    const {  } = item;
  return (
    <LinearGradient 
        className={`w-[200px] rounded-2xl relative pt-[12px] ${index !== 0 && 'ml-[35px]'} ${lastIndex === index && 'mr-[45px]'}`}
        colors={['#FF2F01', '#FF7702']}
    >
        <View className='px-[16px]'>
            <View className='flex-row items-center justify-between mb-[5px]'>
                <Text className='font-bold text-[12px] text-white'>TOYATO</Text>
                <Text className='font-medium text-[12px] text-white'>$100</Text>
            </View>
            <View className='flex-row items-center justify-between'>
                <Text className='font-medium text-[10px] text-white text-[white]'>LC 200</Text>
                <Text className='font-light text-[10px] text-white'>/day</Text>
            </View>
        </View>

        <View className='ml-[25px] w-[200px] h-[160px] flex-row items-end overflow-visible'>
            <Image
                source={require("../assets/testCard.png")}
                className='h-full w-full'
                resizeMode='contain'
            />
        </View>

        <View className='flex-row'>
            <Pressable className='w-1/2 py-[10px]'>
                <Text className='text-center font-bold text-[7px] text-white'>Details</Text>
            </Pressable>
            <Pressable className='w-1/2 py-[10px] rounded-tl-[15px] bg-[#292929]'>
                <Text className='text-center font-bold text-[7px] text-white'>Rent now</Text>
            </Pressable>
        </View>
    </LinearGradient>
  )
}

export default BookCard