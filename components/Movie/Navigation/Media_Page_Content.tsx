import React from "react";
import { Image, Text, View } from "react-native";

type Media_Page_ContentProps = {
  image: string;
  imageWidth: number;
  imageHeight: number;
};

const Media_Page_Content = ({
  image,
  imageHeight,
  imageWidth,
}: Media_Page_ContentProps) => {
  return (
    <View className="w-[90%] border rounded border-neutral-200">
      <View className="w-full h-[250px]">
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500${image}`,
          }}
          style={{ width: "100%", height: "100%" }}
        />
      </View>
      <View className="bg-white">
        <Text className="text-neutral-500 p-[2%] text-xl">Info</Text>
        <View className="border-b border-gray-400 my-1" />
        <View className="p-[2%] gap-2">
          <Text className="text-xl">Size</Text>
          <Text className="text-xl">
            {imageWidth}x{imageHeight}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Media_Page_Content;
