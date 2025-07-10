import { ChevronDownIcon, ChevronUpIcon } from "@/components/ui/icon";
import { useGetMoviesMediaQuery } from "@/lib/moviesEndpoints";
import React, { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import Media_Page_Content from "./Media_Page_Content";
import NavigationHeader from "./NavigationHeader";

type Media_PageProps = {
  id: number;
  type: string;
  setNavigatorLink: React.Dispatch<React.SetStateAction<string>>;
};

const Media_Page = ({ id, type, setNavigatorLink }: Media_PageProps) => {
  const [mediaType, setMediaType] = useState("backdrops");

  const {
    data: media,
    isLoading,
    isFetching,
  } = useGetMoviesMediaQuery({ type, id });

  const loading = isLoading || isFetching;
  if (loading) return "";

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
      <NavigationHeader
        setNavigatorLink={setNavigatorLink}
        id={id}
        type={type}
      />
      <View className="h-[3rem]  bg-neutral-800 flex-row justify-around items-center">
        <Pressable
          onPress={() => setMediaType("backdrops")}
          className="flex-row items-center gap-1"
        >
          <Text className="text-lg text-white font-bold">Backdrops</Text>
          {mediaType === "backdrops" ? (
            <ChevronDownIcon width={10} height={10} color={"white"} />
          ) : (
            <ChevronUpIcon width={10} height={10} color={"white"} />
          )}
        </Pressable>
        <Pressable
          onPress={() => setMediaType("posters")}
          className="flex-row items-center gap-1"
        >
          <Text className="text-lg text-white font-bold">Posters</Text>
          {mediaType === "posters" ? (
            <ChevronDownIcon width={10} height={10} color={"white"} />
          ) : (
            <ChevronUpIcon width={10} height={10} color={"white"} />
          )}
        </Pressable>
        <Pressable
          onPress={() => setMediaType("logos")}
          className="flex-row items-center gap-1"
        >
          <Text className="text-lg text-white font-bold">Logos</Text>
          {mediaType === "logos" ? (
            <ChevronDownIcon width={10} height={10} color={"white"} />
          ) : (
            <ChevronUpIcon width={10} height={10} color={"white"} />
          )}
        </Pressable>
      </View>

      <View className="flex-col justify-center items-center gap-3 mt-[1rem]">
        {mediaType === "backdrops" &&
          media?.backdrops.map((media, index) => (
            <Media_Page_Content
              key={index}
              image={media.file_path}
              imageHeight={media.height}
              imageWidth={media.width}
            />
          ))}
        {mediaType === "posters" &&
          media?.posters.map((media, index) => (
            <Media_Page_Content
              key={index}
              image={media.file_path}
              imageHeight={media.height}
              imageWidth={media.width}
            />
          ))}
        {mediaType === "logos" &&
          media?.logos.map((media, index) => (
            <Media_Page_Content
              key={index}
              image={media.file_path}
              imageHeight={media.height}
              imageWidth={media.width}
            />
          ))}
      </View>
    </ScrollView>
  );
};

export default Media_Page;
