import Bottom from './Bottom';
import { HeaderLeftBtn } from '../components';
import { Contact, Location, RentalDetails, Review, Start, Vehicles, When } from '../screens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stck = createNativeStackNavigator();

const Stack = () => {
  return (
    <NavigationContainer>
        <Stck.Navigator>
            {/* <Stck.Screen
                name='Start'
                component={Start}
                options={{
                    headerShown: false,
                }}
            /> */}
            <Stck.Screen
                name='Location'
                component={Location}
                options={{
                    headerShown: false,
                }}
            />
            <Stck.Screen
                name='Bottom_tab_container'
                component={Bottom}
                options={{
                    headerShown: false,
                }}
            />
            <Stck.Screen
                name='When'
                component={When}
                options={{
                    headerTitle: "", 
                    headerStyle: {
                        backgroundColor: 'white',
                    },
                    headerBackTitle: "",
                    headerShadowVisible: false,
                    headerLeft: () => <HeaderLeftBtn />
                }}
            />
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
                    headerLeft: () => <HeaderLeftBtn />,
                    headerShadowVisible: false,
                }}
            />
            <Stck.Screen
                name='Review'
                component={Review}
                options={{
                    title: 'Review details',
                    headerBackTitleVisible: false,
                    headerTitleStyle: { color: 'black' },
                    headerStyle: {
                        backgroundColor: 'white',
                    },
                    headerLeft: () => <HeaderLeftBtn />,
                    headerShadowVisible: false,
                }}
            />
            <Stck.Screen
                name='Contact'
                component={Contact}
                options={{
                    title: 'Contact',
                    headerBackTitleVisible: false,
                    headerTitleStyle: { color: 'black' },
                    headerStyle: {
                        backgroundColor: 'white',
                    },
                    headerLeft: () => <HeaderLeftBtn />,
                    headerShadowVisible: false,
                }}
            />
            <Stck.Screen
                name='RentalDetails'
                component={RentalDetails}
                options={{
                    title: 'Rental Details',
                    headerBackTitleVisible: false,
                    headerTitleStyle: { color: 'black' },
                    headerStyle: {
                        backgroundColor: 'white',
                    },
                    headerLeft: () => <HeaderLeftBtn />,
                    headerShadowVisible: false,
                }}
            />
        </Stck.Navigator>
    </NavigationContainer>
  );
};

export default Stack;