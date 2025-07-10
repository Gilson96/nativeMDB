import { useGetTrendingListQuery } from "@/lib/moviesEndpoints";
import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { CustomSelect } from "./CustomSelect";
import MovieCard from "./MovieCard";

type MovieListProps = {
  title: string;
};

const MovieList = ({ title }: MovieListProps) => {
  const [selectedValue, setSelectedValue] = useState("day");
  const {
    data: movieList,
    isLoading,
    isFetching,
  } = useGetTrendingListQuery({type: 'movie' ,time_window: selectedValue});

  const loading = isLoading || isFetching;

  return (
    <View className="p-[3%] mt-[3%]">
      <View className="flex-row gap-2">
        <Text className="my-[2%] text-2xl font-medium">{title}</Text>
        <CustomSelect
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
          firstValue="day"
          secondValue="week"
        />
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        alwaysBounceHorizontal
        contentContainerStyle={{ paddingTop: 16, gap: 16 }}
      >
        {loading
          ? ""
          : movieList?.results.map((movie) => (
              <MovieCard
                key={movie.id}
                movieTitle={movie.title}
                movieImage={movie.poster_path}
                movieDate={movie.release_date}
                movieId={movie.id}
                type="movie"
              />
            ))}
      </ScrollView>
    </View>
  );
};

export default MovieList;
