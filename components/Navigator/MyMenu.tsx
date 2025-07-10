import { Menu, MenuItem, MenuItemLabel } from "@/components/ui/menu";
import { RootStackParamList } from "@/types/navigation";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Button } from "../ui/button";

const MyMenu = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <Menu
      placement="top"
      offset={9}
      disabledKeys={["Settings"]}
      trigger={({ ...triggerProps }) => {
        return (
          <Button
            style={{ backgroundColor: "transparent" }}
            {...triggerProps}
          >
            <FontAwesome name="bars" size={24} color="white" />
          </Button>
        );
      }}
      style={{ width: 100 }}
    >
      <MenuItem
        onPress={() => navigation.navigate("filtered", { mediaType: "movie" })}
        key="movie"
        textValue="movie"
        className="w-10"
      >
        <MenuItemLabel size="sm">Movies</MenuItemLabel>
      </MenuItem>
      <MenuItem
        onPress={() => navigation.navigate("filtered", { mediaType: "tv" })}
        key="tv"
        textValue="tv"
      >
        <MenuItemLabel size="sm">TV shows</MenuItemLabel>
      </MenuItem>
    </Menu>
  );
};

export default MyMenu;
