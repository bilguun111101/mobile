import {
    Text, 
    View,
    Image, 
    Pressable, 
    ScrollView, 
    SafeAreaView, 
} from 'react-native';
import React, { useCallback } from 'react';
import { useOpenAuth, useUser } from '../context';
import { FillDot, InfortantButton } from '../components';
import { useNavigation } from '@react-navigation/native';

const RentalDetails = ({ route }: any) => {
    const {
        phone,
        email,
        confirm,
        dateRent,
        location,
        lastName,
        firstName,
        dateReturn,
    } = route.params;
    const { user } = useUser();
    const { openLogin } = useOpenAuth();
    const navigation = useNavigation<any>();
    const onSubmit = useCallback(() => {
        if(!user.email) {
            openLogin();
            return;
        }
        // setRental(undefined);
        // navigation.navigate('Bottom_tab_container', {
            // ...route.params,
        // });
    }, [])
  return (
    <SafeAreaView className='flex-1 relative pb-[300px]'>
        <ScrollView className='bg-white'>
            <View className='bg-[#F1F1F1]'>
                <View className='py-[20px] px-[30px]'>
                    <Text className='font-medium text-base text-[#777777] mb-[7px]'>Contact info</Text>
                    <View className='gap-y-[3px]'>
                        <View className='flex-row items-center justify-between'>
                            <Text className='text-base font-medium'>First name</Text>
                            <Text className='text-base font-medium'>{ firstName }</Text>
                        </View>
                        <View className='flex-row items-center justify-between'>
                            <Text className='text-base font-medium'>Last name</Text>
                            <Text className='text-base font-medium'>{ lastName }</Text>
                        </View>
                        <View className='flex-row items-center justify-between'>
                            <Text className='text-base font-medium'>Email</Text>
                            <Text className='text-base font-medium'>{ email }</Text>
                        </View>
                        <View className='flex-row items-center justify-between'>
                            <Text className='text-base font-medium'>Phone</Text>
                            <Text className='text-base font-medium'>{ phone }</Text>
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
                        <Text className='text-[13px] font-medium text-[#444444]'>{ location }</Text>
                    </View>
                    <View>
                        <Text className='font-medium text-base text-[#777777] mb-[7px]'>Dates & Times</Text>
                        <Text className='font-normal text-[13px] text-[#898989]'> * { dateRent }</Text>
                        <Text className='font-normal text-[13px] text-[#898989]'> * { dateReturn }</Text>
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
                            <FillDot active={confirm}/>
                            <Text className="font-normal text-[#515151] text-[13px]">Pay Now</Text>
                        </View>
                        <Pressable className={`bg-[#444444] rounded-[20px] w-[80px] p-[4px]`}>
                            <Text className="font-bold text-[13px] text-white text-center">Add card</Text>
                        </Pressable>
                    </View>

                    <View className="flex-row items-center justify-between mt-[20px] px-[20px]">
                            <View className="flex-row items-center gap-x-[11px]">
                                <FillDot active={!confirm} />
                                <Text className="font-normal text-[#515151] text-[13px]">Pay at Pickup</Text>
                            </View>
                            <Text className="font-[600] text-[16px] text-black text-center">550.00$</Text>
                    </View>
                </View>
            </View>
            {/* -------------------------------- */}
            <View className="pt-[50px] w-full px-[30px] bg-white pb-[30px] absolute bottom-0" style={{
                shadowColor: "",
                shadowOffset: {
                    width: 0,
                    height: -3,
                },
                shadowOpacity: 0.05,
                shadowRadius: 2.22,
                elevation: 3,
            }}>
                <InfortantButton text='Rent with' onSubmit={onSubmit} />
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default RentalDetails