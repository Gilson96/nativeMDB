import { useGetMoviesReviewsQuery } from "@/lib/moviesEndpoints";
import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import Reviews_card from "../Reviews_Card";
import NavigationHeader from "./NavigationHeader";

type Reviews_PageProps = {
  id: number;
  type: string;
  setNavigatorLink: React.Dispatch<React.SetStateAction<string>>;
};

const Review_Page = ({ id, type, setNavigatorLink }: Reviews_PageProps) => {
  const [readMore, setReadMore] = useState(false);
  const {
    data: review,
    isLoading,
    isFetching,
  } = useGetMoviesReviewsQuery({ type, id });

  const loading = isLoading || isFetching;
  if (loading) return "";

  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>
      <NavigationHeader
        id={id}
        type={type}
        setNavigatorLink={setNavigatorLink}
      />

      <View className="flex-col gap-4 justify-center items-center mt-[1rem]">
        {review?.results.map((review) => {
          const date = new Date(review.created_at);
          return (
            <Reviews_card
              key={review.id}
              date={date}
              options={options}
              readMore={readMore}
              review={review}
              setReadMore={setReadMore}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Review_Page;
