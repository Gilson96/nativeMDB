import HeroImage from "@/components/Home/HeroImage";
import MovieCollection from "@/components/Home/MovieCollection";
import MovieList from "@/components/Home/MovieList";
import Header from "@/components/Navigator/Header";
import InputSearch from "@/components/Search/InputSearch";
import { Stack } from "expo-router";
import React from "react";
import { ScrollView } from "react-native";

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ header: () => <Header /> }} />
      <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>
        <InputSearch externalClasses={null} />
        <HeroImage />
        <MovieList title="Trending" />
        <MovieCollection title="What's Popular" list="popular" />
        <MovieCollection title="Top Rated" list="top_rated" />
      </ScrollView>
    </>
  );
}
