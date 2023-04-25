// import { BookingCard } from '../components';
// import { useNavigation } from '@react-navigation/native';
// import { Pressable, SafeAreaView, Text, View, FlatList, ScrollView, Image } from 'react-native';

const DATA = [
  {
    id: '1',
    type: 'Standard',
    typeDefinition: 'Full Size Luxury Sedan',
    model: 'Lexus 570',
    kml: '15',
    transmission: 'auto',
    passengers: '5',
    doors: '4',
    price: 124,
    details: {
      make: 'Lexus',
      model: 'LX',
      year: '2021',
      exterior: 'Atomic Silver',
      interior: 'White',
    },
    mileage: '26900km',
    image: require('../assets/testCard.png')
  },
  {
    id: '2',
    type: 'Standard',
    typeDefinition: 'Full Size Luxury Sedan',
    model: 'Lexus 570',
    kml: '15',
    transmission: 'auto',
    passengers: '5',
    doors: '4',
    price: 124,
    details: {
      make: 'Lexus',
      model: 'LX',
      year: '2021',
      exterior: 'Atomic Silver',
      interior: 'White',
    },
    mileage: '26900km',
    image: require('../assets/testCard.png')
  },
  {
    id: '3',
    type: 'Standard',
    typeDefinition: 'Full Size Luxury Sedan',
    model: 'Lexus 570',
    kml: '15',
    transmission: 'auto',
    passengers: '5',
    doors: '4',
    price: 124,
    details: {
      make: 'Lexus',
      model: 'LX',
      year: '2021',
      exterior: 'Atomic Silver',
      interior: 'White',
    },
    mileage: '26900km',
    image: require('../assets/testCard.png')
  },
];

// const Book = () => {
//   const navigation = useNavigation();
//   return (
//     <SafeAreaView className='flex-1 relative '>
//       <Image source={require("../assets/smart-car.png")} className="w-full h-64 rounded-t-xl" resizeMode="cover" />
//       <Pressable className='absolute top-[284px] left-5 flex flex-row bg-white w-[350px] h-[49px] rounded-2xl justify-center '>
//           <Image source={require("../assets/locationBlack.png")} className="my-auto"/>
//           <Text className='my-auto ml-2.5'>Where are you picking up?</Text>
//       </Pressable>
//       <ScrollView>
//       <View className='flex flex-row ml-5 mt-[60px] justify-between'>
//         <Text className=' text-[15px] font-normal'>Hot deals</Text>
//         <Text className='text-blue-600 mr-2'> View all</Text>
//       </View>
//       <FlatList
//         data={DATA}
//         keyExtractor={item => item.id}
//         horizontal={true}
//         showsHorizontalScrollIndicator={false}
//         renderItem={({ item }) => {
//           return <BookingCard item={item} />
//         }}
//       />
//       <Text> Top dealers</Text>
//       <View className='flex flex-row'>
//         <Pressable className='w-[89px] h-[97px] bg-blue-400 rounded-xl'>
//           <Text className='text-white font-medium'> car </Text>
//         </Pressable>
//       </View>
//       <Pressable onPress={() => navigation.navigate('When' as never)}>
//         <Text>Click</Text>
//       </Pressable>
//       </ScrollView>
//     </SafeAreaView>
//   )
// }

// export default Book;


import { Image, Pressable, SafeAreaView, Text, View } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import BookList from '../components/BookList';
import { BookingCard } from '../components';

interface Props {
  navigation: any;
}


const dataList = [
  { id: "0", name: 'SUV'},
  { id: "1", name: 'Standard'},
  { id: "2", name: 'Economy'},
  { id: "3", name: 'Pickup'},
  { id: "4", name: 'Bus'},
]

const Book = ({ navigation }: Props) => {
  return (
    <SafeAreaView className='flex-1 relative '>
      <Image source={require("../assets/smart-car.png")} className="w-full h-[220px] rounded-t-xl" resizeMode="cover" />
      <Pressable className='absolute top-[248px] left-5 flex flex-row bg-white w-[350px] h-[49px] rounded-2xl '>
          <Image source={require("../assets/location-white.png")} className="my-auto w-[20px] h-[20px] ml-8"/>
          <Text className='my-auto ml-2.5'>Where are you picking up?</Text>
      </Pressable>
      <ScrollView>

      <View className='flex flex-row ml-5 mt-[50px] justify-between'>
      <Text className=' text-[15px] font-normal'>Hot deals</Text>
      <Text className='text-blue-600 mr-2'> View all</Text>

      </View>
    

      <FlatList
        data={DATA}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        // contentContainerStyle={{ marginRight: 20 }}
        renderItem={({ item }) => {
          return <BookingCard item={item} />
        }}
      />

    
      <Text className='mt-3'> View All Vehicles </Text>

      <FlatList
        data={dataList}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        // contentContainerStyle={{ marginRight: 20 }}
        renderItem={({ item }) => {
          return <BookList item={item}/>
      
        }}
      />
     

      <Pressable onPress={() => navigation.navigate('When')}>
        <Text>Click</Text>
      </Pressable>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Book;