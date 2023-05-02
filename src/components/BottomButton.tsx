import {Text, Pressable, View} from 'react-native';
import React from 'react';

interface Props {
  text: string;
  color?: boolean;
  disabled?: boolean;
  onSubmit: () => void;
}

const BottomButton = ({text, color, onSubmit, disabled}: Props) => {
  return (
    <View
      className="
        flex 
        z-8
        absolute
        w-full
        bottom-0 
        h-[115px] 
        px-[32px]
        items-center
        justify-center
    ">
      <Pressable
        className={`
            w-full
            py-[15px] 
            ${!color ? 'bg-[#FF3002]' : 'bg-[#D9D9D9]'}
            rounded-[25px] 
        `}
        onPress={onSubmit}
        disabled={disabled}>
        <Text
          className="
                font-bold 
                text-base 
                text-white 
                text-center
            ">
          {text}
        </Text>
      </Pressable>
    </View>
  );
};

export default BottomButton;
