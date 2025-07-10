import { useGetMoviesCreditsQuery } from "@/lib/moviesEndpoints";
import { RootStackParamList } from "@/types/navigation";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { ArrowRightIcon } from "../ui/icon";

type Cast_CrewProps = {
  id: number;
  type: string;
  setNavigatorLink: React.Dispatch<React.SetStateAction<string>>;
};

const Cast_Crew = ({ id, type, setNavigatorLink }: Cast_CrewProps) => {
  const {
    data: cast,
    isLoading,
    isFetching,
  } = useGetMoviesCreditsQuery({ type, id });

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const loading = isLoading || isFetching;
  if (loading) return "";

  return (
    <View className="flex-col w-full">
      <View className="flex-row p-[3%] justify-between bg-orange-950">
        {cast?.crew
          .filter((cast) => cast.job === "Story")
          .map((director) => (
            <View key={director.id} className="flex-col">
              <Text className="text-white font-bold">{director.name}</Text>
              <Text className="text-white">{director.job}</Text>
            </View>
          ))}
      </View>

      <Text className="py-[2%] pl-[4%] text-xl font-medium">
        Top Billed Cast
      </Text>

      <View className="flex-col">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          alwaysBounceHorizontal
        >
          <View className="flex-row justify-between">
            <View className="flex-row">
              {cast?.cast.length === 0 ? (
                <Text className="w-full text-start  py-[2%] pl-[4%]">
                  No cast available
                </Text>
              ) : (
                cast?.cast.slice(0, 9).map((actor) => (
                  <TouchableOpacity
                    key={actor.id}
                    onPress={() =>
                      navigation.navigate("people", {
                        id: actor.id,
                      })
                    }
                  >
                    <View className="rounded-lg w-full m-3">
                      <Image
                        source={{
                          uri: `https://image.tmdb.org/t/p/w500${actor.profile_path}`,
                        }}
                        className="mb-1 h-[200px] w-[150px] rounded-md "
                        alt="image"
                      />
                      <View>
                        <Text className="mb-2">{actor.name}</Text>
                        <Text className="mb-2">{actor.character}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                ))
              )}
            </View>
            <TouchableOpacity
              onPress={() => setNavigatorLink("cast")}
              className="flex-row items-center w-[8rem]"
            >
              <Text>View More</Text>
              <ArrowRightIcon width={15} height={15} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Cast_Crew;
