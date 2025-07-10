import { useGetMoviesKeywordsQuery } from "@/lib/moviesEndpoints";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Keywords = ({ id, type }: { id: number; type: string }) => {
  const {
    data: keywords,
    isLoading,
    isFetching,
  } = useGetMoviesKeywordsQuery({ type, id });

  const loading = isLoading || isFetching;
  if (loading) return "";

  return (
    <View
      style={{ height: 200, paddingTop: 30 }}
      className="w-full pl-[4%] py-[2%]"
    >
      <Text className="text-lg font-medium ">Keywords</Text>
      <View className="flex-row flex-wrap gap-2 pt-[1rem]">
        {type === "movie" &&
          keywords?.keywords?.map((key) => (
            <TouchableOpacity
              key={key.id}
              style={{ backgroundColor: "#d4d4d4" }}
              className="p-[2%] flex-row justify-center items-center rounded-lg"
            >
              <Text> {key.name || key.title}</Text>
            </TouchableOpacity>
          ))}
        {type === "tv" &&
          keywords?.results?.map((key) => (
            <TouchableOpacity
              key={key.id}
              style={{ backgroundColor: "#d4d4d4" }}
              className="p-[2%] flex-row justify-center items-center rounded-lg"
            >
              <Text> {key.name || key.title}</Text>
            </TouchableOpacity>
          ))}
      </View>
    </View>
  );
};

export default Keywords;
