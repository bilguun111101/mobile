import { useNavigation } from '@react-navigation/native';
import { Pressable, SafeAreaView, Text, View } from 'react-native';

interface Props {
  navigation: any;
}

const Book = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className='flex-1'>
      <Pressable onPress={() => navigation.navigate("When" as never)}>
        <Text>When</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("Vehicles" as never)}>
        <Text>When</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("Review" as never)}>
        <Text>When</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("Contact" as never)}>
        <Text>When</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("RentalDetails" as never)}>
        <Text>When</Text>
      </Pressable>
    </SafeAreaView>
  )
}

export default Book;