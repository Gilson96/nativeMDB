import { useGetMyListQuery } from "@/lib/accountEndpoints";
import React from "react";
import { Text, View } from "react-native";

type MovieListProps = {
  title: string;
  id: string;
  type: string;
};

const MovieList = ({ title, id, type }: MovieListProps) => {
  const {
    data: myList,
    isLoading,
    isFetching,
  } = useGetMyListQuery({ id, type });

  const loading = isLoading || isFetching;

  return (
    <View>
      <Text>{title}</Text>

      
    </View>
  );
};

export default MovieList;
