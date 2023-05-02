import {useNavigation} from '@react-navigation/native';
import {useCallback} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useRental} from '../context';

interface CardProps {
  item: {
    id: string;
    type: string;
    model: string;
    kml: string;
    transmission: string;
    passengers: string;
    doors: string;
    price: number;
    details: {
      make: string;
      model: string;
      year: string;
      exterior: string;
      interior: string;
    };
    mileage: string;
    image: number;
  };
}

const BookingCard = ({item}: CardProps) => {
  const navigation = useNavigation<any>();
  const {rental, setRental} = useRental();
  const onSubmit = useCallback(() => {
    setRental(() => {
      return {carId: item.id};
    });
    navigation.navigate('Location', {id: item.id});
  }, [rental]);
  return (
    <LinearGradient
      className=" relative w-[200px] h-[235px] ml-5 my-3 rounded-xl"
      colors={['#FF2F01', '#FF7801']}>
      {/* <View className='absolute w-[238.96px] h-[159px] top-10 -right-[100px] flex-row justify-end'> */}
      <View className="sm:w-[300px] md:w-[400px] lg:w-[600px] object-contain z-20 absolute top-10 left-8">
        <Image
          source={item.image}
          className=" object-fill w- full mr-[-5px]"
          resizeMode="cover"
        />
      </View>
      <Text className="absolute top-2 left-3 text-white text-tx font-bold">
        {item.details.make}
      </Text>
      <Text className="absolute top-6 left-3 text-white text-[10px] font-medium">
        {item.details.model}
      </Text>
      <Text className="absolute top-2 right-3 text-white text-tx font-bold">
        {' '}
        $ {item.price}
      </Text>
      <Text className="absolute top-6 right-3 text-white text-[10px] font-medium ">
        /day
      </Text>
      <Text className="absolute bottom-2 left-4 text-white text-[7px]">
        Details
      </Text>
      <Pressable
        className="absolute bottom-0 right-0 w-[109px] h-[28px] bg-black flex flex-row justify-center rounded-l-lg"
        onPress={onSubmit}>
        <Text className="text-[7px] text-white text-center my-auto">
          Rent now{' '}
        </Text>
        <Image
          source={require('../assets/arrow-right.png')}
          className="w-2 h-2 my-auto mx-1"
        />
        {/* <BeakerIcon className="h-6 w-6 text-blue-500" /> */}
      </Pressable>
    </LinearGradient>
  );
};
export default BookingCard;
