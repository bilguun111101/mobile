import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    Image,
  Text, View,
} from 'react-native';
import Bottom from './Bottom';
import { NavigationContainer } from '@react-navigation/native';
import { Start, Vehicles, When } from '../screens';
import { HeaderLeftBtn } from '../components';

const Stck = createNativeStackNavigator();

const Stack = () => {
  return (
    <NavigationContainer>
        <Stck.Navigator>
            {/* <Stck.Screen
                name='Bottom_tab_container'
                component={Booking}
                options={({ navigation }) => ({
                    headerLeft: () => {
                        return (
                            <TouchableOpacity>
                            <Image
                            source={require("../assets/Arrow 2.png")}
                            />
                            </TouchableOpacity>
                            )
                        }
                    })}
                /> */}
            {/* <Stck.Screen
                name='Start'
                component={Start}
                options={{
                    headerShown: false,
                }}
            /> */}
            {/* <Stck.Screen
                name='Bottom_tab_container'
                component={Bottom}
                options={{
                    headerShown: false,
                }}
            /> */}
            {/* <Stck.Screen
                name='When'
                component={When}

                // options={{
                //     headerLeft: () => (
                //         <HeaderLeftBtn />
                //     ),
                //     headerTitle: 'When',
                //     headerBackTitleVisible: false
                // }}
                options={{
                    headerTitle: "", 
                    headerBackTitleVisible: false, 
                    headerTitleStyle: { color: 'black' },
                    headerStyle: {
                        backgroundColor: 'white',
                    },
                    headerShadowVisible: false,
                }}
            /> */}
            <Stck.Screen
                name='Vehicles'
                component={Vehicles}
                options={{
                    title: 'Vehicles',
                    headerBackTitleVisible: false, 
                    headerTitleStyle: { color: 'black' },
                    headerStyle: {
                        backgroundColor: 'white',
                    },
                    headerShadowVisible: false,
                }}
            />
        </Stck.Navigator>
    </NavigationContainer>
  );
};

export default Stack;