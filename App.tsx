import React from "react";
import { Text, View, StatusBar, Button, Animated } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  HeaderStyleInterpolators,
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  Header,
  HeaderBackButton,
  HeaderBackground,
  HeaderTitle,
} from "@react-navigation/elements";
import Home from "./src/home";
import List from "./src/list";
import Mine from "./src/drawer/com";
import Detail from "./src/detail";

// const Stack = createNativeStackNavigator();
const Stack = createStackNavigator();


const App = () => {
  return (
    <SafeAreaProvider>
      <View style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              // ...TransitionPresets.SlideFromRightIOS,
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
          >
            <Stack.Screen
              name="home"
              component={Home}
              options={{
                title: "首页",
              }}
            />
            <Stack.Screen
              name="list"
              component={(props) => {
                console.log(props);
                return <List {...props} />;
              }}
              listeners={({ navigation, route }) => ({
                focus: (e) => {
                  console.log("rrrrrr");
                },
              })}
              options={({ navigation }: any) => {
                return {
                  headerLeft: () => (
                    <Button
                      title="返回"
                      onPress={() => {
                        console.log("返回...");
                        navigation.goBack();
                      }}
                    />
                  ),
                };
              }}
            />
            <Stack.Screen name="detail" component={Detail} />
            <Stack.Screen name="mine" component={Mine} options={{
              headerShown: true
            }} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </SafeAreaProvider>
  );
};

export default App;
