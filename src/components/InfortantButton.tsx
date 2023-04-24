import { Pressable, Text } from "react-native"

interface Props {
    text: string;
    onSubmit?: () => void;
}


const InfortantButton = ({ text, onSubmit }: Props) => {
  return (
    <Pressable className="bg-[#FF3002] rounded-[25px] py-[14px] active:bg-[#FF0000]" onPressOut={onSubmit}>
      <Text className="text-center text-white font-bold text-base">{ text }</Text>
    </Pressable>
  )
}

export default InfortantButton