import { useGetMoviesRecommendationsQuery } from "@/lib/moviesEndpoints";
import { RootStackParamList } from "@/types/navigation";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

const Recommendations = ({ id, type }: { id: number; type: string }) => {
  const {
    data: recommendation,
    isLoading,
    isFetching,
  } = useGetMoviesRecommendationsQuery({ type, id });

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const goToMovie = (movieId: number) => {
    navigation.navigate("movie", { id: movieId, type });
  };
  const loading = isLoading || isFetching;
  if (loading) return "";

  return (
    <View className="">
      <Text className="text-lg font-medium pl-[4%] py-[2%]">
        Recommendations
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator>
        {recommendation?.results
          .filter((reco) => reco.backdrop_path !== null)
          .map((reco) => (
            <TouchableOpacity
              onPress={() => goToMovie(reco.id)}
              key={reco.id}
              className="flex-col px-[10px]"
            >
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${reco.backdrop_path}`,
                }}
                width={200}
                height={150}
                borderRadius={10}
              />
              <View className="flex-row justify-between">
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  className="w-[150px]"
                >
                  {reco.title || reco.name}
                </Text>
                <Text>{Math.round(reco.vote_average * 10)}%</Text>
              </View>
            </TouchableOpacity>
          ))}
      </ScrollView>
    </View>
  );
};

export default Recommendations;
