import React from 'react';
import { View } from 'react-native';
import NavigationItem from '../Movie/Navigation/NavigationItem';
import { MenuItem, MenuItemLabel } from '../ui/menu';
type NavigationProps = {
  setNavigatorLink: React.Dispatch<React.SetStateAction<string>>;
};

const Navigation = ({ setNavigatorLink }: NavigationProps) => {

  return (
   <View className="h-[3rem] flex-row items-center justify-around border border-neutral-200">
      <NavigationItem title="Watchlist">
        <MenuItem
          key="movies"
          textValue="movies"
          onPress={() => setNavigatorLink("Movies")}
          style={{ backgroundColor: "transparent" }}
        >
          <MenuItemLabel size="sm">Movies</MenuItemLabel>
        </MenuItem>
        <MenuItem
          key="tv"
          textValue="tv"
          onPress={() => setNavigatorLink("Tv")}
          style={{ backgroundColor: "transparent" }}
        >
          <MenuItemLabel size="sm">TV shows</MenuItemLabel>
        </MenuItem>
      </NavigationItem>

      <NavigationItem title="Favorites">
        <MenuItem
          key="movies"
          textValue="movies"
          onPress={() => setNavigatorLink("Movies")}
          style={{ backgroundColor: "transparent" }}
        >
          <MenuItemLabel size="sm">Movies</MenuItemLabel>
        </MenuItem>
        <MenuItem
          key="tv"
          textValue="tv"
          onPress={() => setNavigatorLink("Tv")}
          style={{ backgroundColor: "transparent" }}
        >
          <MenuItemLabel size="sm">TV shows</MenuItemLabel>
        </MenuItem>
      </NavigationItem>
    </View>
  )
}

export default Navigation