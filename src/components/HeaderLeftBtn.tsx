import {useNavigation} from '@react-navigation/native';
import {Image, Pressable, View} from 'react-native';

// interface Props {
//   navigation: any;
// }

const HeaderLeftBtn = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      className="flex justify-center items-center rounded-full p-[8px] w-[28px] h-[28px] bg-[#ECECEC]"
      onPress={() => {
        navigation.goBack();
      }}>
      <Image
        source={require('../assets/left-arrow.png')}
        className="w-full h-full"
      />
    </Pressable>
  );
};

export default HeaderLeftBtn;
