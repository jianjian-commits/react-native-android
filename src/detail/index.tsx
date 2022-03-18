import React, { useState } from "react";
import { Text, View, Button, Platform, TouchableOpacity } from "react-native";
import { useLinkProps, StackActions } from "@react-navigation/native";

const LinkButton = ({ to, action, children, ...rest }: any) => {
  const { onPress, ...props } = useLinkProps({ to, action });
  const [isHovered, setIsHovered] = useState(false);
  if (Platform.OS === "web") {
    return (
      <View
        onClick={onPress}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ transitionDuration: "150ms", opacity: isHovered ? 0.5 : 1 }}
        {...props}
        {...rest}
      >
        <Text>{children}</Text>
      </View>
    );
  }
  return (
    <TouchableOpacity
      onPress={onPress}
      {...props}
      {...rest}
      style={{
        width: 50,
        height: 40,
        backgroundColor: "red",
      }}
    >
      <Text>{children}</Text>
    </TouchableOpacity>
  );
};

const Detail = ({ navigation }: any) => {
  return (
    <View>
      <Text>Detail</Text>
      <Button
        title="进入我的"
        onPress={() =>
          navigation.replace("mine", {
            name: "jianjian",
          })
        }
      />
      <LinkButton
        to={{ screen: "mine", params: { id: "jane" } }}
        action={StackActions.replace("mine")}
      >
        <Text>Go to Jane's mine</Text>
      </LinkButton>
    </View>
  );
};

export default Detail;
