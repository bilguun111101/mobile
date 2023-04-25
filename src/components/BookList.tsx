import { useState } from "react";
import LinearGradient from "react-native-linear-gradient";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";



const BookList = ({ item }: ListProps) => {
    const [hovered, setHovered] = useState(false);

  const handleHoverIn = () => {
    setHovered(true);
  };

  const handleHoverOut = () => {
    setHovered(false);
  };

    return (
       <View className="ml-2 mt-3 w-[89px] h-[97px]">
            <Pressable
                onHoverIn={handleHoverIn}
                onHoverOut={handleHoverOut}
                style={({pressed}) => [
                    {
                        backgroundColor: pressed ? '#ff3002': 'white'
                    },
                    styles.button
                ] }
            
                >
                    <View className="bg-[#ff3002] mx-auto mt-2 h-[29px] w-[71px] px-4 items-center justify-center rounded-md">

                <Text className="text-white  font-bold text-[8px]">{item.name}</Text>
                    
                    </View>
                    <View className="mt-3 ml-3 flex flex-row">
                        <Image source={require('../assets/redStar.png')}/>
                        <Image source={require('../assets/redStar.png')}/>
                        <Image source={require('../assets/redStar.png')}/>
                        <Image source={require('../assets/greyStar.png')}/>
                        <Image source={require('../assets/greyStar.png')}/>
                    </View>
                </Pressable>
       </View>
      
      
    );
};

const styles= StyleSheet.create({
    button:{
        width: 87,
        height: 99,
        borderRadius: 10
    }
})

export default BookList;