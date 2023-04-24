import { HeaderLeftBtn, InfortantButton } from '../components';
import LinearGradient from 'react-native-linear-gradient';
import { Image, Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native';


const Location = () => {
  const districts = [
    { district: "Khan-Uul district", capital: "Ulaanbaatar" },
    { district: "Sukhbaatar district", capital: "Ulaanbaatar" },
    { district: "Bayangol district", capital: "Ulaanbaatar" },
    { district: "Darkhan", capital: "Darkhan-Uul Aimag" },
  ]
  return (
    <View className='flex-1 bg-white relative'>
      <ScrollView className='relative'>
        <LinearGradient colors={["#FF2F01", "#FF7601"]} className='h-[140px] px-[30px] pt-[55px] flex-col relative w-full overflow-visible'>
          <View>
            <HeaderLeftBtn />
          </View>
          <View className='py-[15px] flex-row px-[20px] items-center rounded-[30px] border border-[#CCCCCC] bg-white absolute w-full bottom-[-25px] left-[30px]'>
            <Image
              source={require('../assets/location-white.png')}
              className='w-[20px] h-[20px]'
            />
            <Text className='font-normal ml-[20px] text-[12px] text-[#444444]'>Where are you picking up?</Text>
          </View>
        </LinearGradient>


        <View className='py-[45px] px-[40px]'>
          <View className='flex-row items-center mb-[20px]'>
            <Image
              source={require('../assets/locationBlack.png')}
              className='w-[15px] h-[15px]'
            />
            <Text className='font-bold text-base ml-[10px]'>Places</Text>
          </View>
          <View className='px-[30px] gap-y-[30px]'>
            {districts.map((el, idx) => {
              const { district, capital } = el;
              return (
                <View key={idx}>
                  <Text className='font-normal text-[12px]'>{ district }</Text>
                  <Text className='font-normal text-[10px] text-[#808080]'>{ capital }</Text>
                </View>
              )
            })}
          </View>
        </View>
      </ScrollView>
      <View className='px-[30px] pb-[40px]'>
        <Text className='text-center font-bold text-base mb-[20px]'>Choose active change button color</Text>
        <InfortantButton text='Add Dates & Times' />
      </View>
    </View>
  )
}

export default Location