import React from "react";
import { Text, View, Button } from "react-native";

type Iprops = {};

const Drawer = (props: any) => {
  console.log(props);

  return (
    <View>
      <Text>Drawer</Text>
      <Button
        title="返回首页"
        onPress={() => props.navigation.navigate('home')}
      />
      <Button
        title="修改标题"
        onPress={() => props.navigation.setOptions({
            title: '你的不是我的'
        })}
      />
    </View>
  );
};

export default Drawer;
