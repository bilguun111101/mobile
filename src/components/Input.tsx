import { TextInput } from "react-native";
import { InputType } from "../variables";

interface Props {
    type: InputType;
    value: string;
    onChange: (event: any) => void; 
}

const Input = ({ type, value, onChange }: Props) => {
    return (
      <TextInput
        value={value}
        keyboardType={type}
        onChangeText={onChange}
        className='h-[37px] rounded-[10px] border border-[#CBCBCB] mt-[3px] px-[10px]'
      />
    )
}

export default Input;