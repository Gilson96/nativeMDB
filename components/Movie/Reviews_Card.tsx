import { Reviews } from "@/types/movies_shows";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Avatar, AvatarFallbackText, AvatarImage } from "../ui/avatar";
import { ChevronDownIcon, ChevronUpIcon, StarIcon } from "../ui/icon";

type Reviews_Card = {
  review: Reviews;
  date: Date;
  options: Intl.DateTimeFormatOptions;
  readMore: boolean;
  setReadMore: React.Dispatch<React.SetStateAction<boolean>>;
};

const Reviews_card = ({
  review,
  date,
  options,
  readMore,
  setReadMore,
}: Reviews_Card) => {
  return (
    <TouchableOpacity
      key={review.id}
      className="w-[90%] gap-3 border p-[2%] border-neutral-300 rounded-xl justify-center items-center flex-col"
    >
      <View className="w-full flex-row items-center gap-2">
        <Avatar size="md">
          <AvatarFallbackText>
            {review.author.slice(0, 1).toUpperCase()}
          </AvatarFallbackText>
          <AvatarImage
            source={{
              uri: `https://image.tmdb.org/t/p/w500${review.author_details.avatar_path}`,
            }}
          />
        </Avatar>
        <View className="flex-col">
          <Text className="font-bold text-lg">A review by {review.author}</Text>
          <View className="flex-row gap-3">
            <View className="flex-row gap-1 items-center border rounded px-[2%] bg-orange-950">
              <StarIcon width={10} height={10} fill={"white"} />
              <Text className="text-white font-bold">
                {review.author_details.rating === 100
                  ? 100
                  : review.author_details.rating * 10}
                %
              </Text>
            </View>
            <Text className="text-xs text-neutral-500 w-[65%]">
              Written by <Text className="text-black">{review.author}</Text> on{" "}
              {date.toLocaleDateString("en-GB", options)}
            </Text>
          </View>
        </View>
      </View>
      <View className="flex-row flex-wrap items-end">
        <Text numberOfLines={!readMore ? 10 : undefined} ellipsizeMode="tail">
          {review.content}
        </Text>
        <Text onPress={() => setReadMore(!readMore)} className="underline">
          {readMore ? (
            <Text>
              less <ChevronUpIcon width={10} height={10} />
            </Text>
          ) : (
            <Text>
              more <ChevronDownIcon width={10} height={10} />
            </Text>
          )}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Reviews_card;
