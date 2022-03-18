import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import Index from "./index";
import { Text, View } from "react-native";

const Drawer = createDrawerNavigator();
const Com = () => (
  <Drawer.Navigator
    screenOptions={{
      headerShown: true,
    }}
    // useLegacyImplementation={false}
  >
    <Drawer.Screen component={Index} name="drawer" />
    <Drawer.Screen component={Index} name="drawer1" />
  </Drawer.Navigator>
);

export default Com;
