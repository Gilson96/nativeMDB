import { useGetSearchQuery } from "@/lib/peopleEndpoints";
import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { FiltersConfigProps } from "./FiltersConfig";

export const FilteredKeyword = ({
  type,
  setFilters,
  filters,
}: FiltersConfigProps) => {
  const [textInput, setTextInput] = useState("");

  const {
    data: keywords,
    isLoading,
    isFetching,
  } = useGetSearchQuery({ title: "", type: "keyword" });

  const toggleGenre = (genreId: number) => {
    setFilters((prevFilters) => {
      const alreadySelected = prevFilters.genres.includes(genreId);
      const updatedGenres = alreadySelected
        ? prevFilters.genres.filter((id) => id !== genreId)
        : [...prevFilters.genres, genreId];

      return {
        ...prevFilters,
        genres: updatedGenres,
      };
    });
  };

  if (isLoading || isFetching) return <Text>...</Text>;

  return (
    <View className="w-full h-[7rem] border rounded border-neutral-300 flex-col justify-start p-[3%] items-start gap-3">
      <Text>Keywords</Text>
      <View className="h-[3rem] w-full">
        <TextInput
          placeholder="Filter by keywords..."
          onChangeText={(text) => {
            setTextInput(text);
          }}
          value={textInput}
          className="flex-1 border border-neutral-300 p-[2%] w-full"
          autoCorrect={false}
          autoCapitalize="none"
          clearButtonMode="while-editing"
        />
      </View>
    </View>
  );
};
