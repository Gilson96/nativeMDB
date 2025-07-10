import React from "react";
import { ImageBackground, Text, View } from "react-native";
import InputSearch from "../Search/InputSearch";

const HeroImage = () => {
  return (
    <ImageBackground
      style={{
        height: 300,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
      source={require("../../assets/HeroImage.jpg")}
      resizeMode="cover"
    >
      <View
        className="absolute inset-0"
        style={{ backgroundColor: "#431407", opacity: 0.6 }}
      />
      <View className="p-[2%]">
        <Text className="text-white text-5xl font-bold">Welcome.</Text>
        <Text className="text-white text-4xl pb-[3%]">
          Millions of movies, TV shows and people to discover. Explore now.
        </Text>
        <InputSearch externalClasses={"rounded-full bg-white"} />
      </View>
    </ImageBackground>
  );
};

export default HeroImage;
