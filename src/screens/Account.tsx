import * as React from "react";
import { View, useWindowDimensions, Text, SafeAreaView } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

import { MyProfile, MyRentals } from "../components";

const renderScene = SceneMap({
  myRentals: MyRentals,
  myProfile: MyProfile,
});

const Account = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "myRentals", title: "My Rentals" },
    { key: "myProfile", title: "My Profile" },
  ]);

  return (
    <View className="flex-1 relative pt-[50px] bg-white">
      <TabView
        onIndexChange={setIndex}
        renderScene={renderScene}
        navigationState={{ index, routes }}
        initialLayout={{ width: layout.width }}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            style={{
              backgroundColor: "#fff",
              borderBottomWidth: 0.5,
              borderColor: "silver",
            }}
            indicatorStyle={{ backgroundColor: "#FF2F01" }}
            renderLabel={({ focused, route }) => {
              return (
                <View
                  className={`${
                    focused ? "bg-red-primary" : null
                  } py-[10px] px-[35px] rounded-[8px]`}
                >
                  <Text
                    className={`${
                      focused ? "text-white" : "text-black"
                    } text-[12px] font-semibold`}
                  >
                    {route.title}
                  </Text>
                </View>
              );
            }}
          />
        )}
      />
    </View>
  );
};

export default Account;
