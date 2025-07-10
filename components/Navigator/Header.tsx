import type { RootStackParamList } from "@/types/navigation";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useRef } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Account from "./Account";
import MyMenu from "./MyMenu";

export default function Header() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const triggerRef = useRef(null);

  return (
    <View
      ref={triggerRef}
      className="h-[6rem] flex-row justify-between items-center bg-orange-950 px-[2%] pt-[7%]"
    >
      <MyMenu />

      <View className="flex-row items-center">
        <TouchableOpacity onPress={() => navigation.navigate("home")}>
          <Text className="text-white text-xl font-bold">NativeMDB</Text>
        </TouchableOpacity>
      </View>

      <Account />
    </View>
  );
}
