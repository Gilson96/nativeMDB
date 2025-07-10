import { useGetMoviesReviewsQuery } from "@/lib/moviesEndpoints";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Reviews_card from "./Reviews_Card";

type ReviewsProps = {
  id: number;
  type: string;
  setNavigatorLink: React.Dispatch<React.SetStateAction<string>>;
};

const Reviews = ({ id, type, setNavigatorLink }: ReviewsProps) => {
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
    <View className="w-full flex-col justify-start items-center">
      <Text className="py-[2%] pl-[4%] text-lg font-medium w-full text-start">
        Social
      </Text>

      {review?.results.length === 0 ? (
        <Text className="w-full text-start  py-[2%] pl-[4%]">No reviews</Text>
      ) : (
        review?.results.slice(0, 1).map((review) => {
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
        })
      )}
      <TouchableOpacity
        onPress={() => setNavigatorLink("review")}
        className="py-[3%] pl-[4%]  w-full "
      >
        <Text className="text-lg font-medium text-start">
          {" "}
          Read All Reviews
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Reviews;
