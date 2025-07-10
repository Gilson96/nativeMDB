import { Button } from "@/components/ui/button";
import {
    Menu,
    MenuItem,
    MenuItemLabel,
    MenuSeparator,
} from "@/components/ui/menu";
import { RootStackParamList } from "@/types/navigation";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";

const Account = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <Menu
      placement="top"
      offset={5}
      disabledKeys={["Settings"]}
      trigger={({ ...triggerProps }) => {
        return (
          <Button style={{backgroundColor: 'transparent'}} {...triggerProps}>
            <FontAwesome name="user-circle-o" size={24} color="white" />
          </Button>
        );
      }}
      style={{ width: 100 }}
    >
      <MenuItem
        onPress={() => navigation.navigate("profile")}
        key="profile"
        textValue="profile"
        className="flex-row items-center gap-1"
      >
        <AntDesign name="user" size={15} color="black" />
        <MenuItemLabel size="sm">Profile</MenuItemLabel>
      </MenuItem>
      <MenuSeparator />
      <MenuItem
        onPress={() => navigation.navigate("login")}
        key="logout"
        textValue="logout"
        className="flex-row items-center gap-1"
      >
        <MaterialIcons name="exit-to-app" size={15} color="black" />
        <MenuItemLabel size="sm">Logout</MenuItemLabel>
      </MenuItem>
    </Menu>
  );
};

export default Account;
