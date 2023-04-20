import { Pressable, SafeAreaView, Text, View } from 'react-native';

interface Props {
  navigation: any;
}

const Book = ({ navigation }: Props) => {
  return (
    <SafeAreaView className='flex-1 bg-black'>
      <Pressable onPress={() => navigation.navigate('When')}>
        <Text>Click</Text>
      </Pressable>
    </SafeAreaView>
  )
}

export default Book;