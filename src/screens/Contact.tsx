import { useCallback, useState } from 'react';
import { FillDot, Input } from '../components';
import { Pressable, SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native';


const Contact = () => {
  const [email, setEmail] = useState<string>("")
  const [phone, setPhone] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [confirm, setConfirm] = useState<boolean>(false);

  const inputs = [
    { title: "First name", value: firstName, onChange: (text: string) => setFirstName(text), type: 'default' },
    { title: 'Last name', value: lastName, onChange: (text: string) => setLastName(text), type: 'default' },
    { title: 'Email', value: email, onChange: (text: string) => setEmail(text), type: 'email-address' },
    { title: 'Phone', value: phone, onChange: (text: string) => setPhone(text), type: 'numeric' },
  ];

  const onSubmit = useCallback(() => {
    if(!email || !phone || !lastName || !firstName || !confirm) {
      return;
    }
    const json = { email, phone, lastName, firstName, confirm }
    console.log(json);
  }, [email, phone, lastName, firstName, confirm]);
  return (
    <SafeAreaView className='flex-1 bg-white'>
      <ScrollView>
        <View className='py-[45px] px-[25px] flex-col gap-y-[20px]'>
          {inputs.map((el, idx) => {
            const {
              type,
              title,
              value,
              onChange
            } = el;
            return (
              <View key={idx}>
                <Text className='font-medium text-base'>{ title }</Text>
                <Input type={type} value={value} onChange={onChange} />
              </View>
            )
          })}
        </View>
        <View className='mx-[15px] border-t-0.5 border-[#A7A7A7] px-[25px] py-[20px]'>
          <View className='flex-row items-center gap-x-[13px]'>
            <FillDot 
              active={confirm} 
              onSubmit={() => setConfirm(!confirm)}
            />
            <Text className='text-[#515151] font-normal text-[13px]'>Үйлчилгээний нөхцөлийг хүлээн зөвшөөрөх</Text>
          </View>
        </View>
      </ScrollView>

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
            <Text className="text-center text-white font-bold text-base">Submit</Text>
          </Pressable>
        </View>
    </SafeAreaView>
  )
}

export default Contact