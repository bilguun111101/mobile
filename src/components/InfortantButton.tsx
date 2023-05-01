import { Pressable, Text } from "react-native"

interface Props {
    text: string;
    color: string;
    disabled: boolean;
    onSubmit?: () => void;
}


const InfortantButton = ({ text, onSubmit, color, disabled }: Props) => {
  return (
    <Pressable className={`bg-[${color}] rounded-[25px] py-[14px] active:bg-[#FF0000]`} onPressOut={onSubmit} disabled={disabled}>
      <Text className="text-center text-white font-bold text-base">{ text }</Text>
    </Pressable>
  )
}

export default InfortantButton