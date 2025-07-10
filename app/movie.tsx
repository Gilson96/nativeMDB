import Cast_Crew from "@/components/Movie/Cast_Crew";
import Details from "@/components/Movie/Details";
import Extras from "@/components/Movie/Extras";
import Keywords from "@/components/Movie/Keywords";
import Media from "@/components/Movie/Media";
import Cast_Crew_Page from "@/components/Movie/Navigation/Cast_Crew_Page";
import Media_Page from "@/components/Movie/Navigation/Media_Page";
import Navigation from "@/components/Movie/Navigation/Navigation";
import Review_Page from "@/components/Movie/Navigation/Review_Page";
import Recommendations from "@/components/Movie/Recommendations";
import Reviews from "@/components/Movie/Reviews";
import Header from "@/components/Navigator/Header";
import type { RootStackParamList } from "@/types/navigation";
import type { RouteProp } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { Stack } from "expo-router";
import React, { useState } from "react";
import { ScrollView, View } from "react-native";

const Movie = () => {
  const [nagivatorLink, setNavigatorLink] = useState<string>("main");
  const route = useRoute<RouteProp<RootStackParamList, "movie">>();
  const { id, type } = route.params;

  return (
    <>
      <Stack.Screen options={{ header: () => <Header /> }} />
      <ScrollView
        key={nagivatorLink}
        showsVerticalScrollIndicator
        contentContainerStyle={{ paddingBottom: 80 }}
      >
        <Navigation setNavigatorLink={setNavigatorLink} />
        {nagivatorLink === "main" ? (
          <>
            <Details id={id} type={type} />
            <Cast_Crew
              setNavigatorLink={setNavigatorLink}
              id={id}
              type={type}
            />
            <View className="border-b border-gray-400 my-4" />
            <Reviews setNavigatorLink={setNavigatorLink} id={id} type={type} />
            <View className="border-b border-gray-400 my-4" />
            <Media setNavigatorLink={setNavigatorLink} id={id} type={type} />
            <View className="border-b border-gray-400 my-4" />
            <Recommendations id={id} type={type} />
            <View className="border-b border-gray-400 my-4" />
            <Extras id={id} type={type} />
            <Keywords id={id} type={type} />
          </>
        ) : (
          <>
            {nagivatorLink === "cast" && (
              <Cast_Crew_Page
                setNavigatorLink={setNavigatorLink}
                id={id}
                type={type}
              />
            )}
            {nagivatorLink === "media" && (
              <Media_Page
                setNavigatorLink={setNavigatorLink}
                id={id}
                type={type}
              />
            )}
            {nagivatorLink === "review" && (
              <Review_Page
                setNavigatorLink={setNavigatorLink}
                id={id}
                type={type}
              />
            )}
          </>
        )}
      </ScrollView>
    </>
  );
};

export default Movie;
