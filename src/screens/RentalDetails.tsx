import React, { useCallback, useEffect } from 'react';
import { Image, Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { FillDot } from '../components';

const RentalDetails = () => {
    const json = {
        phone: 'askdfjk',
        email: 'sdafasdf',
        firstName: 'sdafasdf',
        lastName: 'aslfkd.sadjfnl',
        confirm: false
    }
    const onSubmit = useCallback(() => {
    }, [])
  return (
    <SafeAreaView>
        <ScrollView className='bg-white'>
            <View className='bg-[#F1F1F1]'>
                <View className='py-[20px] px-[30px]'>
                    <Text className='font-medium text-base text-[#777777] mb-[7px]'>Contact info</Text>
                    <View className='gap-y-[3px]'>
                        <View className='flex-row items-center justify-between'>
                            <Text className='text-base font-medium'>First name</Text>
                            <Text className='text-base font-medium'>{ json.firstName }</Text>
                        </View>
                        <View className='flex-row items-center justify-between'>
                            <Text className='text-base font-medium'>Last name</Text>
                            <Text className='text-base font-medium'>{ json.lastName }</Text>
                        </View>
                        <View className='flex-row items-center justify-between'>
                            <Text className='text-base font-medium'>Email</Text>
                            <Text className='text-base font-medium'>{ json.email }</Text>
                        </View>
                        <View className='flex-row items-center justify-between'>
                            <Text className='text-base font-medium'>Phone</Text>
                            <Text className='text-base font-medium'>{ json.phone }</Text>
                        </View>
                    </View>
                </View>
                <View className='mx-[10px] border-t-0.5 border-[#A7A7A7] px-[20px] py-[20px] gap-y-[10px]'>
                    <Text className='font-medium text-base text-[#777777] mb-[7px]'>Pick-up & Return Location</Text>
                    <View className='flex-row gap-y-[8px] items-center mb-[7px]'>
                        <Image
                            source={require('../assets/locationBlack.png')}
                            className='w-[15px] h-[15px]'
                        />
                        <Text className='text-[13px] font-medium text-[#444444]'>Khan-Uul district</Text>
                    </View>
                    <View>
                        <Text className='font-medium text-base text-[#777777] mb-[7px]'>Dates & Times</Text>
                        <Text className='font-normal text-[13px] text-[#898989]'> * Thu, Apr 20 2023 @ 12:00PM</Text>
                        <Text className='font-normal text-[13px] text-[#898989]'> * Fri, Apr 21 2023 @ 12:00PM</Text>
                    </View>
                </View>
            </View>
            <View>
                <View className='pt-[30px] pl-[20px]'>
                    <Text className='font-medium text-base'>Small Sedan</Text>
                    <View className="w-full pb-6 flex-row justify-end scroll-hidden relative h-[140px] mt-[10px]">
                        <Image
                            source={require('../assets/testCar.png')}
                            className='w-52 mr-[-30px]'
                        />
                    </View>
                </View>

                <View className="mt-[30px] mx-[10px] px-[20px] py-[30px] border-t-0.5 border-[#A7A7A7] px-[3px]">
                    <View className="flex-row items-center justify-between px-[20px]">
                        <View className="flex-row items-center gap-x-[11px]">
                            <FillDot active={json.confirm}/>
                            <Text className="font-normal text-[#515151] text-[13px]">Pay Now</Text>
                        </View>
                        <Pressable className={`bg-[#444444] rounded-[20px] w-[80px] p-[4px]`}>
                            <Text className="font-bold text-[13px] text-white text-center">Add card</Text>
                        </Pressable>
                    </View>

                    <View className="flex-row items-center justify-between mt-[20px] px-[20px]">
                            <View className="flex-row items-center gap-x-[11px]">
                                <FillDot active={!json.confirm} />
                                <Text className="font-normal text-[#515151] text-[13px]">Pay at Pickup</Text>
                            </View>
                            <Text className="font-[600] text-[16px] text-black text-center">550.00$</Text>
                    </View>
                </View>
            </View>
            {/* -------------------------------- */}
            <View className="pt-[50px] px-[30px] pb-[30px] bg-white" style={{
                shadowColor: "",
                shadowOffset: {
                    width: 0,
                    height: -3,
                },
                shadowOpacity: 0.05,
                shadowRadius: 2.22,
                elevation: 3,
            }}>
                <Pressable className="bg-[#FF3002] rounded-[25px] py-[14px] active:bg-[#FF0000]" onPressOut={onSubmit}>
                    <Text className="text-center text-white font-bold text-base">Rent with</Text>
                </Pressable>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default RentalDetails