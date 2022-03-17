import React from "react";
import { Text, View, StatusBar, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/home";
import List from "./src/list";
import Mine from "./src/mine";
import Detail from "./src/detail";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
              console.log('rrrrrr');
              ;
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
        <Stack.Screen name="mine" component={Mine} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
