import CloseBtn from './CloseBtn';
import {View} from 'react-native';

interface Props {
  active: boolean;
  body: JSX.Element;
  footer: JSX.Element;
  onClick: () => void;
}

const Modal = ({footer, body, active, onClick}: Props) => {
  return (
    <View
      className={`w-full h-full overflow-hidden absolute inset-0 z-50 outline-none bg-neutral-800 bg-opacity-70 px-[40px] py-[140px] ${
        !active && 'hidden'
      } bg-black/30`}>
      <View className="rounded-[10px] bg-white p-[20px]">
        <View className="relative flex-col gap-y-[20px]">
          <View className="top-0 right-0 w-full">
            <View className="absolute right-0 top-0 z-10">
              <CloseBtn onClick={onClick} />
            </View>
            {body}
            {footer}
          </View>
        </View>
      </View>
    </View>
  );
};

export default Modal;
