import type { RootStackParamList } from "@/types/navigation";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";

type MovieCardProps = {
  movieImage: string;
  movieTitle: string;
  movieDate: string;
  movieId: number;
  type: string;
};

const MovieCard = ({
  movieImage,
  movieTitle,
  movieDate,
  movieId,
  type,
}: MovieCardProps) => {
  const stringToDate = new Date(movieDate);
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };
  const formattedDate = stringToDate.toLocaleDateString("en-GB", options);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const goToMovie = () => {
    navigation.navigate("movie", {
      id: movieId,
      type,
    });
  };

  return (
    <TouchableOpacity onPress={goToMovie}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${movieImage}` }}
        style={{ width: 140, height: 200, borderRadius: 5 }}
      />
      <Text className="text-sm font-bold mt-2 w-[70%]">{movieTitle}</Text>
      <Text className="text-neutral-400 text-sm">{formattedDate}</Text>
    </TouchableOpacity>
  );
};

export default MovieCard;
