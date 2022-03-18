import React from "react";
import { Text, View, Button } from "react-native";
const Mine = (props: any) => {
  return (
    <View>
      <Text>这个界面是没有底部tab的</Text>
      <Button title="返回" onPress={() => props.navigation.goBack()} />
    </View>
  );
};

export default Mine;
