import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/home";
import List from "./src/list";
import Mine from "./src/mine";
import Detail from "./src/detail";
import {
  TouchableOpacity,
  TouchableHighlight,
  Image,
  Button,
} from "react-native";
import { getHeaderTitle } from "@react-navigation/elements";
import AntDesign from "react-native-vector-icons/AntDesign";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarButton: (props) => <TouchableHighlight {...props} />,
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "#ccc",
        tabBarInactiveBackgroundColor: "#333",
        tabBarActiveBackgroundColor: "pink",
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: 100,
          backgroundColor: "red",
          paddingBottom: 40,
        },
        tabBarBackground: () => (
          <Image
            style={{
              width: "100%",
              height: "100%",
            }}
            source={require("./src/img/bg.jpg")}
          />
        ),
        // 是否每次离开时都要卸载该组建
        // unmountOnBlur: true,
        header: ({ navigation, route, options }) => {
          const title = getHeaderTitle(options, route.name);
          return <Button title={title} />;
        },
      }}
    >
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: "首页",
          tabBarBadge: 10,
          tabBarBadgeStyle: {
            color: "orange",
            backgroundColor: "green",
          },
          tabBarIcon: ({ focused, size, color }) => (
            <AntDesign name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="list"
        component={List}
        options={{
          tabBarLabel: "列表",
          tabBarIcon: ({ focused, size, color }) => (
            <AntDesign name="menufold" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="detail"
        component={Detail}
        options={{
          tabBarLabel: "详情",
          tabBarIcon: ({ focused, size, color }) => (
            <AntDesign name="windowso" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="mine"
        component={Mine}
        options={{
          tabBarLabel: "我的",
          tabBarIcon: ({ focused, size, color }) => (
            <AntDesign name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
