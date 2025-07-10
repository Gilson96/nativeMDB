import { useGetGenreListQuery } from "@/lib/peopleEndpoints";
import { Text, View } from "react-native";
import { FiltersConfigProps } from "./FiltersConfig";

export const FilterGenres = ({
  type,
  setFilters,
  filters,
}: FiltersConfigProps) => {
  const {
    data: genres,
    isLoading,
    isFetching,
  } = useGetGenreListQuery({ type });

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
    <View className="w-full border rounded border-neutral-300 flex-col justify-start p-[3%] items-start gap-3">
      <Text>Genres</Text>
      <View className="flex-row flex-wrap">
        {genres?.genres.map((genre) => (
          <View
            key={genre.id}
            className={`flex-row border rounded-full p-[2%] mr-2 mb-2 ${
              filters?.genres.includes(genre.id)
                ? "border-orange-950 bg-orange-950/20"
                : "border-neutral-200"
            }`}
          >
            <Text onPress={() => toggleGenre(genre.id)}>{genre.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};
