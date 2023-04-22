import { Pressable, SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native';

const Input = () => {
  return (
    <TextInput
      className='h-[37px] rounded-[10px] border border-[#CBCBCB] mt-[3px] px-[10px]'
    />
  )
}

const Contact = () => {
  const inputs = [
    { title: "First name" },
    { title: 'Last name' },
    { title: 'Email' },
    { title: 'Phone' }
  ]
  return (
    <SafeAreaView className='flex-1 bg-white'>
      <ScrollView>
        <View className='py-[45px] px-[25px] flex-col gap-y-[20px]'>
          {inputs.map((el, idx) => {
            const { title } = el;
            return (
              <View>
                <Text className='font-medium text-base'>{ title }</Text>
                <Input />
              </View>
            )
          })}
        </View>
        <View className='mx-[15px] border-t-0.5 border-[#A7A7A7] px-[10px] py-[20px]'>
          <View className='flex-row items-center gap-x-[13px]'>
            <Pressable
              className="w-[15px] h-[15px] rounded-full border-0.5 border-[#848484] bg-[#D9D9D9]"
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
          <Pressable className="bg-[#FF3002] rounded-[25px] py-[14px] active:bg-[#FF0000]">
            <Text className="text-center text-white font-bold text-base">Submit</Text>
          </Pressable>
        </View>
    </SafeAreaView>
  )
}

export default Contact