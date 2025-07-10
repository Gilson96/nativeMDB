import { useGetMoviesDetailsQuery } from "@/lib/moviesEndpoints";
import { languageMap } from "@/types/movies_shows";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

const Extras = ({ id, type }: { id: number; type: string }) => {
  const {
    data: extras,
    isLoading,
    isFetching,
  } = useGetMoviesDetailsQuery({ type, id });

  const loading = isLoading || isFetching;
  if (loading) return "";

  const getLanguageName = (code: string) => {
    return languageMap[code] || code;
  };

  return (
    <View className="w-full">
      <Text className="text-lg font-medium pl-[4%] py-[2%]">Companies</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          display: "flex",
          gap: 8,
          paddingLeft: 10,
          paddingVertical: 10,
        }}
      >
        {extras?.production_companies.map((company) =>
          company.logo_path !== null ? (
            <Image
              key={company.id}
              source={{
                uri: `https://image.tmdb.org/t/p/w500${company.logo_path}`,
              }}
              width={100}
              height={50}
            />
          ) : (
            <View className="pl-[2%]">
              <Text className="text-xl font-bold">{company.name}</Text>
            </View>
          )
        )}
      </ScrollView>
      <View style={{ paddingTop: 10 }} className="flex-col gap-2 pl-[4%]">
        <View className="flex-col">
          <Text className="font-bold">Status</Text>
          <Text>{extras?.status}</Text>
        </View>
        <View className="flex-col">
          <Text className="font-bold">Original Language</Text>
          <Text>
            {extras?.original_language === ""
              ? ""
              : getLanguageName(extras?.original_language!)}
          </Text>
        </View>
        <View className="flex-col">
          <Text className="font-bold">
            {extras?.budget !== undefined ? "Budget" : "Number of episodes"}
          </Text>
          <Text>
            {extras?.budget !== undefined ? (
              extras?.budget === 0 ? (
                "-"
              ) : (
                extras?.budget
              )
            ) : (
              <Text> {extras?.number_of_episodes} </Text>
            )}
          </Text>
        </View>
        <View className="flex-col">
          <Text className="font-bold">
            {extras?.revenue !== undefined ? "Revenue" : "Networks"}
          </Text>
          <Text>
            {extras?.revenue !== undefined
              ? extras?.revenue === 0
                ? "-"
                : extras?.revenue
              : extras?.networks.length! <= 0
              ? "-"
              : extras?.networks.map((net) => <Text>{net.name}</Text>)}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Extras;
