import React, { useEffect, useRef, useState } from "react";
import { Text, View, Button, TextInput, ScrollView } from "react-native";
import { Link, useScrollToTop, useIsFocused } from "@react-navigation/native";

const Home = ({ navigation, route }: any) => {
  const focuse = useIsFocused();
  const scrollRef = useRef<any>();
  const foucseRef = useRef();
  const [isFirst, setIsFirst] = useState<boolean>(true);
  const isFirstRef = useRef();

  useEffect(() => {
    console.log(focuse, "focuse/////");
    (foucseRef.current as unknown as boolean) = focuse;
  }, [focuse]);

  useEffect(() => {
    (isFirstRef.current as unknown as boolean) = isFirst;
  }, [isFirst]);

  useEffect(() => {
    // const unsubscribe = navigation.addListener("tabPress", (e: any) => {
    //   e.preventDefault();

    //   console.log(isFirstRef.current, "isFirstRef.current");
    //   console.log(foucseRef.current, "foucseRef.current");

    //   navigation.navigate("home");
    //   if (isFirstRef.current) {
    //     return;
    //   }
    //   if (foucseRef.current) {
    //     scrollRef.current.scrollTo({ x: 0, y: 0 });
    //   }
    // });
    // return unsubscribe;
    const unsubscribe = navigation.addListener("tabLongPress", (e: any) => {
      scrollRef.current.scrollTo({ x: 0, y: 0 });
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    console.log(1111);

    setIsFirst(false);
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#ccc" }}>
      <ScrollView ref={scrollRef} showsVerticalScrollIndicator={false}>
        <Text>home</Text>
        <TextInput
          style={{
            borderColor: "red",
            borderWidth: 1,
            height: 49,
            margin: 10,
          }}
        />
        <Button
          title="进入列表11"
          onPress={() =>
            navigation.navigate("list", {
              name: "jianjian",
            })
          }
        />
        <Link
          style={{
            height: 400,
          }}
          to={{
            screen: "list",
            params: { name: "jianjian" },
          }}
        >
          跳转
        </Link>
        <Link
          style={{
            height: 400,
          }}
          to={{
            screen: "list",
            params: { name: "jianjian" },
          }}
        >
          跳转
        </Link>
        <Link
          style={{
            height: 400,
          }}
          to={{
            screen: "list",
            params: { name: "jianjian" },
          }}
        >
          跳转
        </Link>
        <Link
          style={{
            height: 400,
          }}
          to={{
            screen: "list",
            params: { name: "jianjian" },
          }}
        >
          跳转
        </Link>
        <Link
          style={{
            height: 400,
          }}
          to={{
            screen: "list",
            params: { name: "jianjian" },
          }}
        >
          跳转
        </Link>
      </ScrollView>
    </View>
  );
};

export default Home;
