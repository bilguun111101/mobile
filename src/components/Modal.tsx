import CloseBtn from './CloseBtn';
import { View } from 'react-native';

interface Props {
    active: boolean;
    body: JSX.Element;
    footer: JSX.Element;
    onClick: () => void;
}

const Modal = ({ footer, body, active, onClick }: Props) => {
  return (
    <View className={`flex-row flex-1 overflow-hidden fixed inset-0 z-50 outline-none bg-neutral-800 bg-opacity-70 px-[40px] py-[140px] ${!active && 'hidden'}`}>
        <View className='rounded-[10px] bg-white p-[20px]'>
            <View className='relative'>
                <View className='absolute top-0 right-0'>
                    <CloseBtn onClick={onClick} />
                    { body }
                    { footer }
                </View>
            </View>
        </View>
    </View>
  )
}

export default Modal