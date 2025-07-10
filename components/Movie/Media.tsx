import { useGetMoviesMediaQuery } from "@/lib/moviesEndpoints";
import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { ArrowRightIcon } from "../ui/icon";

type MediaProps = {
  id: number;
  type: string;
  setNavigatorLink: React.Dispatch<React.SetStateAction<string>>
};

const Media = ({ id, type, setNavigatorLink }: MediaProps) => {
  const [content, setContent] = useState(false);
  const {
    data: media,
    isLoading,
    isFetching,
  } = useGetMoviesMediaQuery({ type, id });

  const loading = isLoading || isFetching;
  if (loading) return "";

  return (
    <View className="w-full">
      <View className="flex-row px-[4%] justify-between items-center">
        <Text className="text-lg font-medium">Media</Text>
        <View className="flex-row flex-wrap gap-3 ">
          <View className="font-bold gap-[0.5px] ">
            <Text
              className="font-medium text-lg"
              onPress={() => setContent(false)}
            >
              Posters
            </Text>
            {!content && <View className="bg-black w-full h-[2px]"></View>}
          </View>
          <View className="font-bold gap-[0.5px] ">
            <Text
              className="font-medium text-lg"
              onPress={() => setContent(true)}
            >
              Backdrops
            </Text>
            {content && <View className="bg-black w-full h-[2px]"></View>}
          </View>
        </View>
      </View>
      {media?.backdrops.length === 0 && <Text className="w-full text-start  py-[2%] pl-[4%]">No reviews</Text>}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        alwaysBounceHorizontal
        contentContainerStyle={{ paddingTop: 10 }}
      >
        { content
          ? media?.backdrops.slice(0, 6).map((backdrop, index) => (
              <Image
                key={index}
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${backdrop.file_path}`,
                }}
                width={200}
                height={150}
              />
            ))
          : media?.posters.slice(0, 6).map((poster, index) => (
              <Image
                key={index}
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${poster.file_path}`,
                }}
                width={130}
                height={200}
                resizeMode="center"
              />
            ))}

        <TouchableOpacity onPress={() => setNavigatorLink('media')} className="flex-row pl-[2%] items-center w-[8rem]">
          <Text>View More</Text>
          <ArrowRightIcon width={15} height={15} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Media;
