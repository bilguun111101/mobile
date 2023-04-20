import { useRef } from "react";
import "react-native-gesture-handler";
import { Animated, Image, Text, View } from 'react-native';
import { Book, Profile, Rentals, Resources } from '../screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Buttons = [
    {
        name: 'Book',
        component: Book,
        source: require('../assets/booking.png'),
    },
    {
        name: 'My Rentals',
        component: Rentals,
        source: require('../assets/carLogo.png'),
    },
    {
        name: 'Account',
        component: Profile,
        source: require('../assets/user.png'),
    },
    {
        name: 'Resources',
        component: Resources,
        source: require('../assets/more.png'),
    }
]

const Bottom = (): JSX.Element => {
    const tabOffsetValue = useRef(new Animated.Value(0)).current;
    return (
        <Tab.Navigator 
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    left: 0,
                    height: 90,
                    elevation: 10,
                    backgroundColor: '#fff',
                },
            }}
        >
            {
                Buttons.map((el, idx) => {
                    const {
                        component,
                        source,
                        name
                    } = el;
                    return (
                        <Tab.Screen 
                            key={idx}
                            name={name}
                            component={component}
                            options={{
                                headerShown: false,
                                tabBarIcon: ({ focused, size }) => (
                                    <View 
                                        style={{
                                            gap: 5,
                                            width: 60,
                                            paddingTop: 12,
                                            height: '100%', 
                                            display: 'flex',
                                            borderTopWidth: 2,
                                            alignItems: 'center',
                                            position: 'relative',
                                            flexDirection: 'column',
                                            justifyContent: 'flex-start',
                                            borderTopColor: focused ? 'red' : 'white', 
                                        }}
                                    >
                                        <Image source={source} />
                                        <Text style={{ fontSize: 10, position: 'absolute', bottom: 0 }}>{ name }</Text>
                                    </View>
                                ),
                            }}
                            listeners={({ navigation, route }) => ({
                                // Onpress Update....
                                tabPress: e => {
                                    Animated.spring(tabOffsetValue, {
                                        toValue: 0,
                                        useNativeDriver: true
                                    }).start();
                                }
                            })}
                        />
                    )
                })
            }
        </Tab.Navigator>
    )
}

export default Bottom;