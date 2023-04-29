import { HeaderLeftBtn, InfortantButton } from '../components';
import LinearGradient from 'react-native-linear-gradient';
import { Image, Pressable, SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';
import { useRental } from '../context';

interface Props {
  route: {
    params: {
      id: string;
    }
  }
}

interface Params {
  carId: string;
  location: string;
}

const Location = ({ route }: any) => {
  const { id } = route.params;
  const navigation = useNavigation<any>();
  const { setRental, rental } = useRental();
  const [search, setSearch] = useState<string>('');
  const [params, setParams] = useState<Params>({ carId: id, location: '' });

  const districts = [
    { district: "Khan-Uul district", capital: "Ulaanbaatar" },
    { district: "Sukhbaatar district", capital: "Ulaanbaatar" },
    { district: "Bayangol district", capital: "Ulaanbaatar" },
    { district: "Darkhan", capital: "Darkhan-Uul Aimag" },
  ]

  const [focus, setFocus] = useState<boolean[]>(new Array(districts.length).fill(false));
  const onSubmit = useCallback((location: string, index: number) => {
    setFocus(old => {
      return old.map((el, idx) => idx === index ? !el : false);
    })
    if(!focus[index]) 
      setParams(() => {
        return { ...params, location }
      })
    else
      setParams(() => {
        return { ...params, location: '' }
      })
    setRental(() => {
      return { ...rental, location }
    })
  }, [rental, params, focus])

  const onJumpToDatePicker = useCallback(() => {
    if(!params.location) return;
    navigation.navigate('When', { ...params });
  }, [params])

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
            <TextInput
              onChangeText={(text) => setSearch(text)}
              className='font-normal ml-[20px] text-[12px] text-[#444444] w-full border-none'
              placeholder='Where are you picking up?'
              value={search}
            />
          </View>
        </LinearGradient>


        <View className='py-[45px] px-[40px]'>
          <View className='flex-row items-center mb-[20px] h-[30px]'>
            <Image
              source={require('../assets/locationBlack.png')}
              className='w-[15px] h-[15px]'
            />
            <Text className='font-bold text-base ml-[10px]'>Places</Text>
          </View>
          <View className='px-[30px] gap-y-[20px]'>
            {
              districts.filter((el, idx) => {
                if(search === "") return el;
                else if(
                  el.capital.toLowerCase().includes(search) 
                    || 
                  el.capital.toLowerCase().includes(search.toLowerCase())
                    ||
                  el.district.toLowerCase().includes(search) 
                    || 
                  el.district.toLowerCase().includes(search.toLowerCase())
                  ) return el;
              }).map((element, idx) => {
                const { district, capital } = element;
                return (
                  <Pressable 
                    key={idx} 
                    onPress={() => onSubmit(`${district}`, idx)} 
                    className={`rounded-lg ${focus[idx] ? 'bg-[#FF2F01]' : null} px-[10px] py-[5px]`}
                  >
                    <Text className={`font-normal text-[12px] ${focus[idx] && 'text-white'}`}>{ district }</Text>
                    <Text className={`font-normal text-[10px] ${focus[idx] ? 'text-white' : 'text-[#808080]'}`}>{ capital }</Text>
                  </Pressable>
                )
              })
            }
          </View>
        </View>
      </ScrollView>
      <View className='px-[30px] pb-[40px]'>
        <Text className='text-center font-bold text-base mb-[20px]'>Choose active change button color</Text>
        <InfortantButton text='Add Dates & Times' onSubmit={onJumpToDatePicker} />
      </View>
    </View>
  )
}

export default Location