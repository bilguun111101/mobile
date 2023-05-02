import Modal from '../Modal';
import Input from '../Input';
import {useCallback, useState} from 'react';
import {useOpenAuth} from '../../context';
import {Text, View, Pressable} from 'react-native';

const re =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Login = () => {
  const {login, closeLogin, toggle} = useOpenAuth();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onSubmit = useCallback(() => {
    if (!(email && re.test(email)) || !password) {
      return;
    }
    console.log(email);
  }, [email, password]);
  const body = (
    <>
      <Text className="mt-[10px] font-normal text-[18px]">Log in</Text>
      <View className="mt-[20px]">
        <Input
          onChange={setEmail}
          value={email}
          type="email-address"
          placeholder="Email"
        />
      </View>
      <View className="mt-[13px]">
        <Input
          onChange={setPassword}
          value={password}
          placeholder="Password"
          secureTextEntry
        />
      </View>
      <View className="mt-[31px]">
        <Pressable
          className="bg-[#FF3002] rounded-[3px] py-[14px] active:bg-[#FF0000]"
          onPressOut={onSubmit}>
          <Text className="text-center text-white font-normal text-[12px]">
            Log in
          </Text>
        </Pressable>
      </View>
    </>
  );
  const footer = (
    <View className="mt-[40px]">
      <View className="flex-row justify-center pb-[15px]">
        <Pressable>
          <Text className="text-[#0232DD] underline font-normal text-[12px]">
            Forgot Password
          </Text>
        </Pressable>
      </View>
      <View className="border-t border-[#CCCCCC] flex-row pt-[15px] justify-around">
        <Text className="font-normal text-[12px]">Not a user?</Text>
        <Pressable onPress={toggle}>
          <Text className="text-[#0232DD] underline font-normal text-[12px]">
            Create an accound
          </Text>
        </Pressable>
      </View>
    </View>
  );
  return (
    <Modal active={login} body={body} onClick={closeLogin} footer={footer} />
  );
};

export default Login;
