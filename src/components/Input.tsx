import {TextInput} from 'react-native';
import {InputType} from '../variables';

interface Props {
  value: string;
  type?: InputType;
  placeholder?: string;
  secureTextEntry?: boolean;
  onChange: (event: any) => void;
}

const Input = ({
  type,
  value,
  secureTextEntry,
  onChange,
  placeholder,
}: Props) => {
  return (
    <TextInput
      value={value}
      keyboardType={type}
      onChangeText={onChange}
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
      className="h-[37px] rounded-[10px] border border-[#CBCBCB] mt-[3px] px-[10px]"
    />
  );
};

export default Input;
