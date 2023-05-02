import {Image, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Start = () => {
  return (
    <LinearGradient
      className="flex-1 justify-center items-center flex-col gap-5"
      colors={['#FF2F01', '#FF7801']}>
      <Image source={require('../assets/logo.png')} />
      <Text className="text-white font-weight text-4xl">CAR RENTAL</Text>
    </LinearGradient>
  );
};

export default Start;
