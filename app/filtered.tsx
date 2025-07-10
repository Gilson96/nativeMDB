import FiltersConfig from "@/components/Filtered/FiltersConfig";
import SortByConfig from "@/components/Filtered/SortByConfig";
import Header from "@/components/Navigator/Header";
import { useLazyGetFilteredMovieQuery } from "@/lib/peopleEndpoints";
import { RootStackParamList } from "@/types/navigation";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Stack } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

export type FilterOptions = {
  genres: number[];
  sortBy: string;
};

const Filtered = () => {
  const [filters, setFilters] = useState<FilterOptions>({
    genres: [],
    sortBy: "popularity.desc",
  });

  const [shouldFetch, setShouldFetch] = useState(false);

  const route = useRoute<RouteProp<RootStackParamList, "filtered">>();
  const { mediaType } = route.params;
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [trigger, result] = useLazyGetFilteredMovieQuery();

  const { data: movieDetails, isLoading, isFetching } = result;

  useEffect(() => {
    if (shouldFetch) {
      trigger({
        genresId: filters.genres,
        sortBy: filters.sortBy,
        type: mediaType,
      });
      setShouldFetch(false);
    }
  }, [shouldFetch]);
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };
  const formattedDate = (date: string) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString("en-GB", options);
  };

  const goToMovie = ({ movieId, type }: { movieId: number; type: string }) => {
    navigation.navigate("movie", {
      id: movieId,
      type,
    });
  };
  console.log(filters);
  return (
    <>
      <Stack.Screen options={{ header: () => <Header /> }} />
      <ScrollView>
        <View className="py-[3%] px-[5%]">
          <Text className="py-[4%]  text-xl font-bold">
            {mediaType === "movie" ? "All Movies" : "All TV Shows"}
          </Text>
          <View className="flex-col gap-5">
            <SortByConfig setFilters={setFilters} mediaType={mediaType} />
            <FiltersConfig
              setFilters={setFilters}
              type={mediaType}
              filters={filters}
            />
          </View>
        </View>
        <View className="w-full flex-col justify-center items-center">
          <TouchableOpacity
            onPress={() => setShouldFetch(true)}
            className="bg-orange-950 w-[90%] py-[4%] rounded-full flex-row justify-center items-center"
          >
            <Text className="text-white font-bold text-xl">Search</Text>
          </TouchableOpacity>
        </View>
        <View className="w-full flex-col justify-center items-center p-[4%] gap-3">
          {movieDetails?.results.map((movie) => (
            <TouchableOpacity
              key={movie.id}
              onPress={() => goToMovie({ movieId: movie.id, type: mediaType })}
              className="w-full overflow-hidden h-[30rem] flex-row justify-start items-center border border-neutral-300 rounded"
            >
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                }}
                style={{
                  width: 90,
                  height: 150,
                  borderRadius: 5,
                  backgroundColor: "#737373",
                }}
              />
              <View className="px-[2%] flex-col gap-2">
                <View>
                  <Text className="text-lg font-bold" style={{ width: 200 }}>
                    {movie.name || movie.title}
                  </Text>
                  <Text className="text-neutral-500">
                    {movie.release_date === undefined
                      ? formattedDate(movie.first_air_date)
                      : formattedDate(movie.release_date)}
                  </Text>
                </View>
                <View className="">
                  <Text
                    numberOfLines={3}
                    ellipsizeMode="tail"
                    className="text-sm leading-tight"
                    style={{ width: 200 }}
                  >
                    {movie.overview}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default Filtered;
