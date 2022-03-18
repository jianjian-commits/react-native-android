import React, { useEffect, useContext, useCallback, useState } from "react";
import { Text, View, Button, Alert } from "react-native";
import {
  useIsFocused,
  useNavigationState,
  NavigationContext,
  useFocusEffect,
} from "@react-navigation/native";

const List = ({ navigation, route }: any) => {
  const [val, setVal] = useState<number>(1);

  const focuse = useIsFocused();
  const state = useNavigationState((state) => state);

  useEffect(() => {
    if (!focuse) return;
    console.log("请求数据...");
  }, [focuse]);

  useFocusEffect(
    useCallback(() => {
      console.log("useFocusEffect...");
    }, [val])
  );

  useEffect(() => {
    console.log('List挂载...');  
  }, [])

  useEffect(() => {
    
    const focus = navigation.addListener("focus", () => {
      console.log("focus...");
    });
    const blur = navigation.addListener("blur", () => {
      console.log("blur...");
    });
    const beforeRemove = navigation.addListener("beforeRemove", (e: any) => {
      // e.preventDefault()
      console.log("beforeRemove...", e);
      // Alert.alert(
      //   'Discard changes?',
      //   'You have unsaved changes. Are you sure to discard them and leave the screen?',
      //   [
      //     { text: "Don't leave", style: 'cancel', onPress: () => {} },
      //     {
      //       text: 'Discard',
      //       style: 'destructive',
      //       // If the user confirmed, then we dispatch the action we blocked earlier
      //       // This will continue the action that had triggered the removal of the screen
      //       onPress: () => {
      //         beforeRemove()
      //         console.log(beforeRemove);
              
      //       },
      //     },
      //   ]
      // );
    });
  }, []);

  return (
    <View>
      <Text>List</Text>
      <Text>{focuse ? "focus" : "unFocus"}</Text>
      <Button title="进入详情" onPress={() => navigation.navigate("detail")} />
    </View>
  );
};

export default List;
