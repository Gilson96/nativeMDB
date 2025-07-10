import { useGetMoviesDetailsQuery } from "@/lib/moviesEndpoints";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import AddToMyList from "./AddToMyList";
import { UserScore } from "./UserScore";

const Details = ({ id, type }: { id: number; type: string }) => {
  const {
    data: movieDetails,
    isLoading,
    isFetching,
  } = useGetMoviesDetailsQuery({ type, id });

  const loading = isLoading || isFetching;

  const formatRuntime = (runtime: number | undefined) => {
    if (!runtime || runtime <= 0) return "NF";

    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;

    const hoursStr = hours > 0 ? `${hours}h` : "";
    const minutesStr = minutes > 0 ? ` ${minutes}m` : "";

    return `${hoursStr}${minutesStr}`.trim();
  };

  return (
    <>
      <View className="bg-orange-950 w-full">
        <ImageBackground
          source={{
            uri: `https://image.tmdb.org/t/p/w500${movieDetails?.backdrop_path}`,
          }}
          style={{ height: 250, left: 50 }}
          className="flex-col justify-center items-start"
        >
          <LinearGradient
            colors={["#431407", "transparent"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0.5, y: 0 }}
            style={{
              ...StyleSheet.absoluteFillObject,
              zIndex: 1,
            }}
          />
          <View style={{ zIndex: 2, paddingLeft: 16 }}>
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w500${movieDetails?.poster_path}`,
              }}
              style={{
                width: 100,
                height: 150,
                borderRadius: 5,
                position: "relative",
                right: 30,
              }}
            />
          </View>
        </ImageBackground>
      </View>
      <View className="w-full ">
        <View className="w-full bg-orange-950 flex-row items-center justify-center py-[5%] gap-4">
          <View className="flex-row items-center">
            <Text className="text-white text-2xl font-bold">
              {movieDetails?.title || movieDetails?.name}
            </Text>
            <Text className="text-white text-xl">
              (
              {movieDetails?.release_date === undefined
                ? movieDetails?.first_air_date.slice(0, 4)
                : movieDetails?.release_date.slice(0, 4)}
              )
            </Text>
          </View>
          <AddToMyList type={type} movieId={movieDetails?.id!} />
        </View>
        <View className="w-full bg-orange-950/80 flex-row justify-between items-center px-[2%] py-[3%]">
          <UserScore score={movieDetails?.vote_average} />
          <Text className="text-4xl text-white">|</Text>
          <View className="flex-row items-center justify-start w-[50%] gap-2">
            <Text className="text-white">
              {" "}
              {movieDetails?.release_date === undefined
                ? movieDetails?.first_air_date
                : movieDetails?.release_date}
            </Text>
            <Text className="text-white text-5xl">&#183;</Text>
            <Text className="text-white">
              {movieDetails?.runtime !== undefined
                ? formatRuntime(movieDetails?.runtime)
                : movieDetails?.number_of_seasons + " seasons"}
            </Text>
          </View>
        </View>
        <View className="flex-row flex-wrap gap-2 px-[3%] pt-[4%] pb-[2%] bg-orange-950">
          {movieDetails?.genres.map((genre, index) => (
            <View
              key={index}
              className="border border-white p-[3%] bg-orange-950/90 rounded-full"
            >
              <Text className="text-white">{genre.name}</Text>
            </View>
          ))}
        </View>
        <View className="bg-orange-950 p-[3%]">
          <Text className="text-neutral-400 italic font-medium text-lg">
            {movieDetails?.tagline}
          </Text>
          <Text className="text-white font-bold text-xl pt-[1%]">Overview</Text>
          <Text className="text-white text-base">{movieDetails?.overview}</Text>
        </View>
      </View>
    </>
  );
};

export default Details;
