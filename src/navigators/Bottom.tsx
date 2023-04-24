import { useRef } from "react";
import "react-native-gesture-handler";
import { Book, Profile, RentalDetails , Resources } from '../screens';
import { Animated, Image, Text, View, Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HeaderLeftBtn } from "../components";

// interface TabProps {
//     name: string;
//     source: number;
//     toValue: number;
//     tabOffsetValue: any;
//     headerShown: boolean;
//     component: JSX.Element;
// }

const Tab = createBottomTabNavigator();

const getWidth = () => {
    let width = Dimensions.get("window").width
  
    // Horizontal Padding = 20...
    width = width - 60;
  
    // Total five Tabs...
    return width / 5
}

const Buttons = [
    {
        name: 'Book',
        component: Book,
        toValue: 0,
        source: require('../assets/booking.png'),
    },
    {
        name: 'My Rentals',
        component: RentalDetails,
        toValue: getWidth() * 1.5,
        source: require('../assets/carLogo.png'),
    },
    {
        name: 'Account',
        component: Profile,
        toValue: getWidth() * 2.97,
        source: require('../assets/user.png'),
    },
    {
        name: 'Resources',
        component: Resources,
        toValue: getWidth() * 4.43,
        source: require('../assets/more.png'),
    }
]


// const TabBottom = ({
//     name,
//     source,
//     toValue,
//     component,
//     headerShown,
//     tabOffsetValue,
// }: TabProps) => {
//     return (
//         <Tab.Screen 
//             name={name}
//             component={component}
//             options={{
//                 headerShown,
//                 tabBarIcon: ({ focused, size }) => (
//                     <View 
//                         style={{
//                             gap: 5,
//                             width: 60,
//                             paddingTop: 12,
//                             height: '100%', 
//                             display: 'flex',
//                             alignItems: 'center',
//                             position: 'relative',
//                             flexDirection: 'column',
//                             justifyContent: 'flex-start',
//                         }}
//                     >
//                         <Image source={source} />
//                             <Text style={{ fontSize: 10, position: 'absolute', bottom: 0 }}>{ name }</Text>
//                         </View>
//                     ),
//                     }}
//                     listeners={({ navigation, route }) => ({
//                         // Onpress Update....
//                         tabPress: e => {
//                             Animated.spring(tabOffsetValue, {
//                                 toValue,
//                                 useNativeDriver: true
//                             }).start();
//                         }
//                     })}
//                 />
//         )
// }




const Bottom = (): JSX.Element => {
    const tabOffsetValue = useRef(new Animated.Value(0)).current;
    return (
        <>
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
                            toValue,
                            source,
                            name
                        } = el;
                        if(name === 'My Rentals') {
                            return (
                                <Tab.Screen 
                                    key={idx}
                                    name={name}
                                    component={component}
                                    options={{
                                        headerShown: true,
                                        tabBarIcon: ({ focused, size }) => (
                                            <View 
                                                style={{
                                                    gap: 5,
                                                    width: 60,
                                                    paddingTop: 12,
                                                    height: '100%', 
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    position: 'relative',
                                                    flexDirection: 'column',
                                                    justifyContent: 'flex-start',
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
                                                    toValue,
                                                    useNativeDriver: true
                                                }).start();
                                            }
                                        })}
                                    />
                                )
                        }
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
                                                alignItems: 'center',
                                                position: 'relative',
                                                flexDirection: 'column',
                                                justifyContent: 'flex-start',
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
                                                    toValue,
                                                    useNativeDriver: true
                                                }).start();
                                            }
                                        })}
                                    />
                            )
                    })
                }
            </Tab.Navigator>
            <Animated.View style={{
                width: getWidth() - 20,
                height: 2,
                backgroundColor: 'red',
                position: 'absolute',
                bottom: 90,
                // Horizontal Padding = 25...
                left: 25,
                right: 25,
                borderRadius: 20,
                transform: [
                { translateX: tabOffsetValue }
                ]
            }}>
            </Animated.View>
        </>
    )
}

export default Bottom;