import { TextInput } from "react-native";
// import { InputType } from "../variables";

interface Props {
  value: string;
  type?: InputType;
  disabled?: boolean;
  placeholder?: string;
  secureTextEntry?: boolean;
  onChange: (event: any) => void;
}

const Input = ({
  type,
  value,
  secureTextEntry,
  disabled,
  onChange,
  placeholder,
}: Props) => {
  return (
    <TextInput
      value={value}
      keyboardType={type}
      onChangeText={onChange}
      secureTextEntry={secureTextEntry}
      editable={disabled}
      placeholder={placeholder}
      className="h-[37px] rounded-[10px] border border-gray-forth mt-[3px] px-[10px]"
    />
  );
};

export default Input;
