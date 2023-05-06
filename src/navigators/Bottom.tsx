import { useRef } from "react";
import "react-native-gesture-handler";
import { Account, Booking, Resources } from "../screens";
import { Animated, Image, Text, View, Dimensions } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const getWidth = () => {
  let width = Dimensions.get("window").width;

  // Horizontal Padding = 20...
  width = width - 60;

  // Total five Tabs...
  return width / 5;
};

const Buttons = [
  {
    name: "Book",
    component: Booking,
    toValue: 0,
    source: require("../assets/booking.png"),
  },
  {
    name: "Account",
    component: Account,
    toValue: getWidth() * 1.75,
    source: require("../assets/user.png"),
  },
  {
    name: "Resources",
    component: Resources,
    toValue: getWidth() * 3.5,
    source: require("../assets/more.png"),
  },
];

const Bottom = (): JSX.Element => {
  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  const windowHeight = Dimensions.get("window").height;
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            position: "absolute",
            bottom: windowHeight < 700 ? 10 : 25,
            height: 60,
            borderRadius: 10,
            shadowColor: "#000",
            shadowOpacity: 0.4,
            marginHorizontal: 20,
            backgroundColor: "#fff",
            shadowOffset: {
              width: 1,
              height: 1,
            },
            flexDirection: "row",
            justifyContent: "space-around",
          },
        }}
      >
        {Buttons.map((el, idx) => {
          const { component, toValue, source, name } = el;
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
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      position: "relative",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Image source={source} />
                    {/* <Text
                      style={{fontSize: 10, position: 'absolute', bottom: 0}}>
                      {name}
                    </Text> */}
                  </View>
                ),
              }}
              listeners={({ navigation, route }) => ({
                // Onpress Update....
                tabPress: (e) => {
                  Animated.spring(tabOffsetValue, {
                    toValue,
                    useNativeDriver: true,
                  }).start();
                },
              })}
            />
          );
        })}
      </Tab.Navigator>
      <Animated.View
        style={{
          width: getWidth() - 20,
          height: 2,
          backgroundColor: "red",
          position: "absolute",
          bottom: windowHeight < 700 ? 70 : 85,
          // Horizontal Padding = 25...
          left: 55,
          right: 55,
          borderRadius: 20,
          transform: [{ translateX: tabOffsetValue }],
        }}
      ></Animated.View>
    </>
  );
};

export default Bottom;
