import {
    Text, 
    View,
    Image, 
    ScrollView, 
} from 'react-native';
import React, { useCallback } from 'react';
import { useOpenAuth, useUser } from '../context';
import { BottomButton, FillDot, Login } from '../components';
import { useNavigation } from '@react-navigation/native';

const RentalDetails = ({ route }: any) => {
    const {
        phone,
        email,
        image,
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
    <View className='flex-1 relative bg-white pb-[120px]'>
        <ScrollView>
            <View className='bg-[#F1F1F1]'>
                <View className='pt-[10px] pb-[20px] px-[30px]'>
                    <Text className='font-medium text-base text-[#777777] mb-[5px]'>Contact info</Text>
                    <View>
                        <View className='flex-row items-center justify-between'>
                            <Text className='text-base font-normal'>First name</Text>
                            <Text className='text-[12px] font-medium'>{ firstName }</Text>
                        </View>
                        <View className='flex-row items-center justify-between'>
                            <Text className='text-base font-normal'>Last name</Text>
                            <Text className='text-[12px] font-medium'>{ lastName }</Text>
                        </View>
                        <View className='flex-row items-center justify-between'>
                            <Text className='text-base font-normal'>Email</Text>
                            <Text className='text-[12px] font-medium'>{ email }</Text>
                        </View>
                        <View className='flex-row items-center justify-between'>
                            <Text className='text-base font-normal'>Phone</Text>
                            <Text className='text-[12px] font-medium'>{ phone }</Text>
                        </View>
                    </View>
                </View>
                <View className='mx-[10px] border-t-0.5 border-[#A7A7A7] p-[20px]'>
                    <Text className='font-medium text-base text-[#777777] mb-[7px]'>Pick-up & Return Location</Text>
                    <View className='flex-row gap-y-[8px] items-center mb-[7px]'>
                        <Image
                            source={require('../assets/locationBlack.png')}
                            className='w-[15px] h-[15px] mr-[8px]'
                            />
                        <Text className='text-[13px] font-medium text-[#444444]'>Khan-Uul district</Text>
                    </View>
                    <View>
                        <Text className='font-medium text-base text-[#777777] mb-[7px]'>Dates & Times</Text>
                        <Text className='font-normal text-[13px] text-[#898989]'> * Thu, Apr 20, 2023 @ 12:00 PM</Text>
                        <Text className='font-normal text-[13px] text-[#898989]'> * Fri, Apr 21, 2023 @ 12:00 PM</Text>
                    </View>
                </View>
            </View>
            <View>
                <View className='pt-[30px] pl-[20px]'>
                    <Text className='font-medium text-base'>Small Sedan</Text>
                    <View className="w-full pb-[18px] flex-row justify-end scroll-hidden relative h-[140px]">
                        <Image
                            source={image}
                            className='w-[200px] mr-[-30px]'
                            />
                    </View>
                </View>

                <View className="mx-[10px] px-[20px] py-[30px] border-t-0.5 border-[#A7A7A7] px-[3px]">
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
        </ScrollView>
        <BottomButton
            text='Confirm Rentals'
            onSubmit={onSubmit}
            />
    </View>
  )
}

export default RentalDetails