import React from "react";
import { Text, View, Button } from "react-native";
import { Link } from "@react-navigation/native";

const Home = ({ navigation }: any) => {
  return (
    <View>
      <Text>home</Text>
      <Button
        title="进入列表"
        onPress={() =>
          navigation.navigate("list", {
            name: "jianjian",
          })
        }
      />
      <Link
        to={{
          screen: "list",
          params: { name: "jianjian" },
        }}
      >
        跳转
      </Link>
    </View>
  );
};

export default Home;
