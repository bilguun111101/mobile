import { Text, View } from 'react-native';

interface Props {
    item: number;
    index: number;
    lastIndex: number;
}

const RateCard = ({ item, index, lastIndex }: Props) => {
  return (
    <View className={`p-[10px] rounded-[10px] w-[100px] ${index !== 0 && 'ml-[10px]'} ${lastIndex === index && 'mr-[50px]'} border-0.5`}>
        <View className='bg-[#FFD600] rounded-[5px] w-[30px] h-[30px]'></View>
        <View className='mt-[6px]'>
            <View className='h-[10px] bg-[#F01A22]'></View>
        </View>
        <View className='mt-[6px]'>
            <Text className='mb-[5px] font-bold text-[8px]'>Car mental</Text>
            <Text className='text-[#A0A0A0] text-[8px] font-bold'>10 offers</Text>
        </View>
    </View>
  )
}

export default RateCard