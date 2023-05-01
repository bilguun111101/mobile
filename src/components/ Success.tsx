import { useCallback } from 'react';
import { View, Text, Image, Pressable } from 'react-native'
import { useOpenAuth } from '../context';
import Modal from "./Modal";

export default function Success() {
    const { success, setSuccess } = useOpenAuth();
    const onClick = useCallback(() => {
        setSuccess(false);
    }, [success])
    const onSubmit = useCallback(() => {}, []);
    const body = (
        <View className='w-full h-[325px] py-[15px] px-[35px] flex-col items-center'>
            <Image
                source={require('../assets/success.png')}
                className="w-[150px] h-[140px] mb-[15px]"
            />
            <Text className='font-bold text-base'>Your rental successfull</Text>
            <Pressable className='w-full py-[10px] rounded-[25px] bg-[#FF3002]'>
                <Text className='font-bold text-base text-center text-white'>OK</Text>
            </Pressable>
        </View>
    )
    return (
        <Modal 
            body={body} 
            active={success}
            onClick={onClick} 
            onSubmit={onSubmit}
        />
    )
}