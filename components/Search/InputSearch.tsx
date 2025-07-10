import { useGetTrendingListQuery } from "@/lib/moviesEndpoints";
import { useGetSearchQuery } from "@/lib/peopleEndpoints";
import { RootStackParamList } from "@/types/navigation";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { LayoutChangeEvent, Pressable, TextInput, View } from "react-native";
import { Menu, MenuItem, MenuItemLabel } from "../ui/menu";

type InputSearchProps = {
  externalClasses: string | null;
};

export default function InputSearch({ externalClasses }: InputSearchProps) {
  const [textInput, setTextInput] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuWidth, setMenuWidth] = useState<number>(0);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const goToMovie = (id: number, type: string) => {
    navigation.navigate("movie", { id, type });
  };

  // Measure the width of the input container
  const onLayout = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;
    setMenuWidth(width);
  };

  const {
    data: search,
    isLoading: isSearchLoading,
    isFetching: isSearchFetching,
  } = useGetSearchQuery({ title: textInput, type: "multi" });

  const {
    data: searchSuggestion,
    isLoading: isSuggestionLoading,
    isFetching: isSuggestionFetching,
  } = useGetTrendingListQuery({ type: "all", time_window: "day" });

  const loading =
    isSearchLoading ||
    isSearchFetching ||
    isSuggestionLoading ||
    isSuggestionFetching;

  return (
    <View
      className={`w-full ${externalClasses}`}
      onLayout={onLayout} // Measure width here
      style={{ zIndex: 9999 }}
    >
      <Menu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        placement="bottom"
        style={{ width: menuWidth || "100%" }} // Use measured width for menu
        trigger={({ ...triggerProps }) => (
          <Pressable
            className="flex-row items-center border border-gray-400 rounded px-3 h-[3rem] bg-white w-full"
            {...triggerProps}
          >
            <FontAwesome
              name="search"
              size={20}
              color="#888"
              className="mr-2"
            />
            <TextInput
              placeholder="Search"
              onChangeText={(text) => {
                setTextInput(text);
                setMenuOpen(true);
              }}
              value={textInput}
              className="flex-1 h-full"
              autoCorrect={false}
              autoCapitalize="none"
              clearButtonMode="while-editing"
              onFocus={() => setMenuOpen(true)}
            />
          </Pressable>
        )}
      >
        {!loading && textInput.length <= 0 && (
          <>
            <MenuItem className="flex-row items-center gap-2 bg-neutral-100">
              <FontAwesome6 name="arrow-trend-up" size={24} color="black" />
              <MenuItemLabel size="lg" className="font-bold text-black">
                Trending
              </MenuItemLabel>
            </MenuItem>
            {searchSuggestion?.results.slice(0, 5).map((item) => (
              <MenuItem
                key={item.id}
                textValue={item.title || item.name}
                className="flex-row items-center px-2"
                onPress={() => goToMovie(item.id, item.media_type)}
              >
                <FontAwesome
                  name="search"
                  size={20}
                  color="#888"
                  className="mr-2"
                />
                <MenuItemLabel size="sm" style={{ flexShrink: 1 }}>
                  {item.title || item.name}
                </MenuItemLabel>
              </MenuItem>
            ))}
          </>
        )}

        {!loading &&
          textInput.length > 0 &&
          search?.results.slice(0, 8).map((item) => (
            <MenuItem
              key={item.id}
              textValue={item.title || item.name}
              onPress={() => goToMovie(item.id, item.media_type)}
              className="flex-row items-center px-2"
            >
              <FontAwesome
                name="search"
                size={20}
                color="#888"
                className="mr-2"
              />
              <MenuItemLabel size="sm" style={{ flexShrink: 1 }}>
                {item.title || item.name}
              </MenuItemLabel>
            </MenuItem>
          ))}
      </Menu>
    </View>
  );
}
