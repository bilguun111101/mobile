import { Text, View } from 'react-native';
import { Rating } from 'react-native-ratings';

interface Props {
    item: number;
    index: number;
    lastIndex: number;
}

const RateCard = ({ item, index, lastIndex }: Props) => {
  return (
    <View className={`p-[10px] rounded-[10px] w-[100px] ${index !== 0 && 'ml-[10px]'} ${lastIndex === index && 'mr-[50px]'} border-0.5`}>
        <View className='bg-[#FFD600] rounded-[5px] w-[30px] h-[30px]'></View>
        <View className='w-[50px]'>
          <Rating
            type='star' 
            imageSize={10} 
            ratingCount={5} 
            ratingColor='red'
            style={{ marginTop: 6 }} 
          />
        </View>
        <View className='mt-[5px]'>
            <Text className='mb-[5px] font-bold text-[8px]'>Car mental</Text>
            <Text className='text-[#A0A0A0] text-[8px] font-bold'>10 offers</Text>
        </View>
    </View>
  )
}

export default RateCard