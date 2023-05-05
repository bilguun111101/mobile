import {Image, Pressable, View} from 'react-native';

interface Props {
  onClick: () => void;
}

const CloseBtn = ({onClick}: Props) => {
  return (
    <Pressable
      onPressOut={onClick}
      className="w-[28px] h-[28px] rounded-full bg-[#ECECEC] p-[10px]">
      <Image
        source={require('../assets/close.png')}
        className="w-full h-full"
      />
    </Pressable>
  );
};

export default CloseBtn;
