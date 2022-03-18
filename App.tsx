import React from "react";
import { Text, View, StatusBar, Button, Animated } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Tabs from "./Tab";
import noTab from "./src/noTab";

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <View style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            ...TransitionPresets.SlideFromRightIOS
          }}>
            <Stack.Screen
              name="tabs"
              component={Tabs}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="noTab" component={noTab} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </SafeAreaProvider>
  );
};

export default App;
