import { useGetMoviesDetailsQuery } from "@/lib/moviesEndpoints";
import { RootStackParamList } from "@/types/navigation";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import DeleteMovie from "./DeleteMovie";

type MovieCardProps = {
  movieId: number;
  mediaType: string;
  selectedValue: string;
  setIsDeleted: React.Dispatch<React.SetStateAction<boolean>>;
};

const MovieCard = ({
  movieId,
  mediaType,
  selectedValue,
  setIsDeleted,
}: MovieCardProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const {
    data: movieDetails,
    isLoading,
    isFetching,
  } = useGetMoviesDetailsQuery({ id: movieId, type: mediaType });

  const loading = isLoading || isFetching;

  const myDate =
    movieDetails?.release_date === undefined
      ? movieDetails?.first_air_date
      : movieDetails.release_date;

  const stringToDate = new Date(myDate!);

  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };
  const formattedDate = stringToDate.toLocaleDateString("en-GB", options);
  const goToMovie = () => {
    navigation.navigate("movie", {
      id: movieId,
      type: mediaType,
    });
  };

  return (
    <TouchableOpacity onPress={goToMovie} className="">
      <View className="w-full h-[10rem] border border-neutral-200 flex-row justify-start items-center">
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500${movieDetails?.poster_path}`,
          }}
          style={{ width: 100, height: "100%", borderRadius: 5 }}
        />
        <View className="p-[3%] flex-col gap-2 justify-start items-start">
          <View className="flex-col ">
            <View className="flex-row w-[80%] justify-between items-center">
              <Text className="text-sm font-bold">
                {" "}
                {movieDetails?.title || movieDetails?.name}
              </Text>
              <DeleteMovie
                selectedValue={selectedValue}
                movieId={movieDetails?.id}
                setIsDeleted={setIsDeleted}
              />
            </View>
            <Text className="pl-[2%] text-xs text-neutral-500">
              {formattedDate}
            </Text>
          </View>
          <Text
            numberOfLines={3}
            className="text-sm pl-[2%]"
            style={{ width: 200 }}
          >
            {movieDetails?.overview}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;
