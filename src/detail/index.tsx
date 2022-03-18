import React, { useEffect } from "react";
import { Text, View, Button, Platform, TouchableOpacity } from "react-native";
import { useLinkProps, StackActions } from "@react-navigation/native";


const Detail = ({ navigation }: any) => {

  useEffect(() => {
    console.log('Detail挂载...');  
  }, [])

  return (
    <View>
      <Text>Detail</Text>
      <Button
        title="noTab界面"
        onPress={() =>
          navigation.navigate("noTab", {
            name: "jianjian",
          })
        }
      />
    </View>
  );
};

export default Detail;
