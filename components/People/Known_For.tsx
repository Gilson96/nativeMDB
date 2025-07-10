import { useGetPeopleCombinedCreditsQuery } from "@/lib/peopleEndpoints";
import { RootStackParamList } from "@/types/navigation";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";

const Known_For = ({ id }: { id: number }) => {
  const {
    data: person_known_for,
    isLoading,
    isFetching,
  } = useGetPeopleCombinedCreditsQuery(id);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const goToMovie = (movieId: number, type: string) => {
    navigation.navigate("movie", {
      id: movieId,
      type,
    });
  };

  const loading = isLoading || isFetching;
  if (loading) return "";

  const person_cast = person_known_for?.cast || [];
  const person_crew = person_known_for?.crew || [];
  const combinedCredits = [...person_cast, ...person_crew];
  const sortedCredits = combinedCredits
    .slice(0, 8)
    .sort((a, b) => b.popularity - a.popularity);

  return (
    <View className="pl-[4%] pt-[4%]">
      <Text className="font-bold pb-[2%] text-lg">Known_For</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{ display: "flex", gap: 10 }}
      >
        {sortedCredits.map((credit) => (
          <Pressable onPress={() => goToMovie(credit.id, credit.media_type)}>
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w500${credit.poster_path}`,
              }}
              width={140}
              height={150}
              borderRadius={10}
            />
            <Text className="pt-[1%]">
              {credit.original_name || credit.original_title}
            </Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default Known_For;
