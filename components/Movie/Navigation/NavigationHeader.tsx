import { ArrowLeftIcon } from "@/components/ui/icon";
import { useGetMoviesDetailsQuery } from "@/lib/moviesEndpoints";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";

type Cast_Crew_PageProps = {
  id: number;
  type: string;
  setNavigatorLink: React.Dispatch<React.SetStateAction<string>>;
};

const NavigationHeader = ({
  id,
  type,
  setNavigatorLink,
}: Cast_Crew_PageProps) => {
  const {
    data: movieDetails,
    isLoading,
    isFetching,
  } = useGetMoviesDetailsQuery({ type, id });

  const loading = isLoading || isFetching;
  if (loading) return "";

  return (
    <View className="h-[10rem] bg-neutral-700 flex-row gap-[3%] pl-[8%] justify-start items-center">
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500${movieDetails?.poster_path}`,
        }}
        style={{
          width: 80,
          height: 110,
          borderRadius: 5,
          position: "relative",
        }}
      />
      <View className="flex-col gap-1">
        <View className="flex-row items-center gap-1">
          <Text className="text-white text-2xl font-bold">
            {movieDetails?.title || movieDetails?.name}
          </Text>
          <Text className="text-neutral-400 text-2xl font-bold">
            (
            {movieDetails?.release_date === undefined
              ? movieDetails?.first_air_date.slice(0, 4)
              : movieDetails?.release_date.slice(0, 4)}
            )
          </Text>
        </View>
        <Pressable className="flex-row items-center">
          <ArrowLeftIcon width={15} height={15} color={"#a3a3a3"} />
          <Pressable
            className="text-neutral-400 text-lg font-bold"
            onPress={() => setNavigatorLink("main")}
          >
            <Text className="text-neutral-400 text-lg font-bold">
              {" "}
              Back to main
            </Text>
          </Pressable>
        </Pressable>
      </View>
    </View>
  );
};

export default NavigationHeader;
