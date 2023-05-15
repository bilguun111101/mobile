import * as React from "react";
import { View, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TabView, SceneMap } from "react-native-tab-view";
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
    <SafeAreaView className="flex-1">
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    </SafeAreaView>
  );
};

export default React.memo(Account);
