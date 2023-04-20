import { Image, Pressable, View } from 'react-native';

// interface Props {
//   navigation: any;
// }

const HeaderLeftBtn = () => {
  return (
    <Pressable 
      style={{ backgroundColor: '#ECECEC', width: 28, height: 28, }} 
      className='flex justify-center items-center rounded-full'
      // onPress={() => {
        // navigation.navigate('Bottom_tab_container')
      // }}
    >
      <Image source={require('../assets/arrowLeft.png')} className='w-full h-auto' />
    </Pressable>
  )
}

export default HeaderLeftBtn;