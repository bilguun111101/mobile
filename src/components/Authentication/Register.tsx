import Modal from '../Modal';
import Input from '../Input';
import { useCallback, useEffect, useState } from 'react';
import { useOpenAuth } from '../../context';
import { View, Pressable, Text } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';

const data = ["admin", "user"];
const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Register = () => {
    const { register, closeRegister, toggle } = useOpenAuth();
    const [email, setEmail] = useState<string>('');
    const [selected, setSelected] = useState<string>('');
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("")

    const onSubmit = useCallback(() => {
        if(!password || !confirmPassword || !(password === confirmPassword)) {
            return;
        }
        if(!(email && re.test(email)) || !selected) {
            return;
        }
        console.log(email);
    }, [selected, email, password, confirmPassword])
    const body = (
      <>
        <Text className='mt-[10px] font-normal text-[18px]'>Register</Text>
        <View className='mt-[20px]'>
          <Input onChange={setEmail} value={email} type='email-address' placeholder='Email' />
        </View>
        <View className='mt-[13px]'>
            <SelectList
                setSelected={(val: string) => setSelected(val)}
                data={data}
                save='value'
                searchPlaceholder='role'
                placeholder='role'
            />
        </View>
        <View className='mt-[13px]'>
          <Input onChange={setPassword} value={password} placeholder='Password' secureTextEntry />
        </View>
        <View className='mt-[13px]'>
          <Input onChange={setConfirmPassword} value={confirmPassword} placeholder='Confirm' secureTextEntry />
        </View>
        <View className='mt-[31px]'>
          <Pressable className="bg-[#FF3002] rounded-[3px] py-[14px] active:bg-[#FF0000]" onPressOut={onSubmit}>
            <Text className="text-center text-white font-normal text-[12px]">Register</Text>
          </Pressable>
        </View>
      </>
    )
    const footer = (
      <View className='mt-[40px]'>
        <View className='flex-row justify-around pb-[15px]'>
          <Pressable>
            <Text className='text-[#0232DD] underline font-normal text-[12px]'>Forgot Password</Text>
          </Pressable>
          <Pressable>
            <Text className='text-[#0232DD] underline font-normal text-[12px]'>Forgot member ID</Text>
          </Pressable>
        </View>
        <View className='border-t border-[#CCCCCC] flex-row pt-[15px] justify-around'>
          <Text className='font-normal text-[12px]'>Already have an account?</Text>
          <Pressable onPress={toggle}>
            <Text className='text-[#0232DD] underline font-normal text-[12px]'>Log in</Text>
          </Pressable>
        </View>
      </View>
    )

    useEffect(() => {
        console.log(selected);
    }, [selected])
    return (
      <Modal
        active={register}
        body={body} 
        onClick={closeRegister}
        footer={footer}
      />
    )
}

export default Register