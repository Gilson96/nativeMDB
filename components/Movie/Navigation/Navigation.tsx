import { MenuItem, MenuItemLabel } from "@/components/ui/menu";
import React from "react";
import { View } from "react-native";
import NavigationItem from "./NavigationItem";

type NavigationProps = {
  setNavigatorLink: React.Dispatch<React.SetStateAction<string>>;
};

const Navigation = ({ setNavigatorLink }: NavigationProps) => {
  return (
    <View className="h-[3rem] flex-row items-center justify-around">
      {/* Overview */}
      <NavigationItem title="Overview">
        <MenuItem
          key="Main"
          textValue="Main"
          onPress={() => setNavigatorLink("main")}
          style={{ backgroundColor: "transparent" }}
        >
          <MenuItemLabel size="sm">Main</MenuItemLabel>
        </MenuItem>
        <MenuItem
          key="Cast_Crew"
          textValue="Cast_Crew"
          onPress={() => setNavigatorLink("cast")}
          style={{ backgroundColor: "transparent" }}
        >
          <MenuItemLabel size="sm">Cast & Crew</MenuItemLabel>
        </MenuItem>
        <MenuItem
          key="Add_to_fav"
          textValue="Add_to_fav"
          onPress={() => setNavigatorLink("cast")}
          style={{ backgroundColor: "transparent" }}
        >
          <MenuItemLabel size="sm">Add to favorites</MenuItemLabel>
        </MenuItem>
        <MenuItem
          key="Add_to_watch"
          textValue="Add_to_watch"
          onPress={() => setNavigatorLink("cast")}
          style={{ backgroundColor: "transparent" }}
        >
          <MenuItemLabel size="sm">Add to watchlist</MenuItemLabel>
        </MenuItem>
      </NavigationItem>

      {/* Media */}
      <NavigationItem title="Media">
        <MenuItem
          key="Backdrops"
          textValue="Backdrops"
          onPress={() => setNavigatorLink("media")}
          style={{ backgroundColor: "transparent" }}
        >
          <MenuItemLabel size="sm">Media</MenuItemLabel>
        </MenuItem>
      </NavigationItem>

      {/* Fandom */}
      <NavigationItem title="Fandom">
        <MenuItem
          key="Reviews"
          textValue="Reviews"
          onPress={() => setNavigatorLink("review")}
          style={{ backgroundColor: "transparent" }}
        >
          <MenuItemLabel size="sm">Reviews</MenuItemLabel>
        </MenuItem>
      </NavigationItem>
    </View>
  );
};

export default Navigation;
