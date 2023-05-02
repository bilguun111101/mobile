import { re } from "../variables";
import { useRental } from '../context';
import { Text, View } from 'react-native';
import { useCallback, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { BottomButton, FillDot, Input } from '../components';

// interface TypeOfInput {
//   title: string;
//   value: string;
//   type: InputType;
//   onChange: (text: string) => void;
// }


const Contact = ({ route }: any) => {
  const { rental, setRental } = useRental();
  const [email, setEmail] = useState<string>("")
  const [phone, setPhone] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [confirm, setConfirm] = useState<boolean>(false);

  const navigation = useNavigation<any>();

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
    if(!confirm) {
      return;
    }
    navigation.navigate('RentalDetails', {
      email, 
      phone, 
      lastName,
      firstName,
      ...route.params,
      name: `${firstName} ${lastName}`
    });
  }, [
    email, 
    phone, 
    rental,
    confirm, 
    lastName, 
    firstName,
  ]);
  return (
    <View className='flex-1 bg-white relative'>
      <View className='w-full'>
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
      </View>

      <BottomButton
        text='Submit' 
        onSubmit={onSubmit} 
        color={(
          !email 
            || 
          !phone 
            || 
          !lastName 
            || 
          !firstName 
            || 
          !confirm 
            || 
          isNaN(+phone) 
            || 
          !re.test(email)
        ) ? true : false}
      />
    </View>
  )
}

export default Contact