import { useGetMoviesListQuery } from "@/lib/moviesEndpoints";
import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { CustomSelect } from "./CustomSelect";
import MovieCard from "./MovieCard";

type MovieListProps = {
  title: string;
  list: string;
};

const MovieList = ({ title, list }: MovieListProps) => {
  const [selectedValue, setSelectedValue] = useState("movie");
  const {
    data: movieList,
    isLoading,
    isFetching,
  } = useGetMoviesListQuery({ type: selectedValue, list });

  const loading = isLoading || isFetching;

  return (
    <View className="p-[3%] mt-[3%]">
      <View className="flex-row gap-2">
        <Text className="my-[2%] text-2xl font-medium">{title}</Text>
        <CustomSelect
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
          firstValue="movie"
          secondValue="tv"
        />
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        alwaysBounceHorizontal
        contentContainerStyle={{ paddingTop: 16, gap: 14 }}
      >
        {loading
          ? ""
          : movieList?.results.map((movie) => (
              <MovieCard
                key={movie.id}
                movieTitle={movie.title || movie.name}
                movieImage={movie.poster_path}
                movieDate={movie.release_date || movie.first_air_date}
                movieId={movie.id}
                type={selectedValue}
              />
            ))}
      </ScrollView>
    </View>
  );
};

export default MovieList;
