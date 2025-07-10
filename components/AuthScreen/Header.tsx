import React from "react";
import { Text, View } from "react-native";
import { Avatar, AvatarFallbackText } from "../ui/avatar";

const Header = () => {
  return (
    <View className="h-[8rem] bg-orange-950/60 flex justify-center items-center">
      <View className="flex-row items-center gap-3">
        <Avatar size="md">
          <AvatarFallbackText>User</AvatarFallbackText>
        </Avatar>
        <Text className="text-white font-bold text-lg">User</Text>
      </View>
    </View>
  );
};

export default Header;
