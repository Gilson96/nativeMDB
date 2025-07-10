import { CustomSelect } from "@/components/Home/CustomSelect";
import Header from "@/components/Navigator/Header";
import MovieCard from "@/components/Profile/MovieCard";
import { Avatar, AvatarFallbackText } from "@/components/ui/avatar";
import {
  Toast,
  ToastDescription,
  ToastTitle,
  useToast,
} from "@/components/ui/toast";
import { useGetMyListQuery } from "@/lib/accountEndpoints";
import { RootState } from "@/store";
import { Stack } from "expo-router";
import React, { useCallback, useEffect, useState } from "react";
import { RefreshControl, ScrollView, Text, View } from "react-native";
import { useSelector } from "react-redux";

const Profile = () => {
  const [selectedValue, setSelectedValue] = useState("favorites");
  const [mediaType, setMediaType] = useState("movie");
  const [isDeleted, setIsDeleted] = useState(false);
  const user = useSelector((state: RootState) => state.auth.user);
  const userId = user?.uid;
  const toast = useToast();
  const {
    data: movieList,
    isLoading,
    isFetching,
    error,
    refetch,
  } = useGetMyListQuery({
    userId: userId!,
    list: selectedValue,
  });
  const [refreshing, setRefreshing] = useState(false);

  const showToast = (action: "remove", list: "favorites" | "watchlist") => {
    const id = Math.random().toString();

    toast.show({
      id,
      placement: "top",
      duration: 3000,
      containerStyle: { paddingTop: 40 },
      render: () => (
        <Toast
          action={action === "add" ? "success" : "error"}
          variant="outline"
          nativeID={`toast-${id}`}
        >
          <ToastTitle>{action === "add" ? "Added!" : "Removed!"}</ToastTitle>
          <ToastDescription>
            {action === "add" ? `Added to ${list}` : `Removed from ${list}`}
          </ToastDescription>
        </Toast>
      ),
    });
  };

  useEffect(() => {
    if (isDeleted) {
      showToast("remove", selectedValue as "favorites" | "watchlist");
      setIsDeleted(false);
    }
  }, [isDeleted]);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    try {
      await refetch().unwrap(); // actually fetch new data
    } catch (err) {
      console.error("Refresh failed:", err);
    } finally {
      setRefreshing(false);
    }
  }, [refetch]);

  console.log(movieList)
  return (
    <>
      <Stack.Screen options={{ header: () => <Header /> }} />
      <ScrollView
     contentContainerStyle={{ paddingBottom: 40 }}
  refreshControl={
    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
  }
      >
        {isDeleted &&
          toast.show({
            title: "Success!",
            description: "Movie removed",
            variant: "solid",
            action: "success",
            placement: "top",
          })}
        <View className="h-[7rem] bg-amber-950/80 flex-row justify-center items-center gap-3">
          <Avatar size="lg" className="bg">
            <AvatarFallbackText>User</AvatarFallbackText>
          </Avatar>
          <Text className="text-xl text-white font-bold">User</Text>
        </View>
        <View className="p-[3%]">
          <CustomSelect
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
            firstValue="watchlist"
            secondValue="favorites"
          />
          <View className="w-full flex-row  justify-between pt-[7%] px-[4%]">
            <Text className="capitalize font-bold text-lg">
              My {selectedValue}
            </Text>
          </View>
          <View className="py-[3%] flex-col gap-3">
            {movieList?.map((movie) => (
              <MovieCard
                key={movie.id}
                selectedValue={selectedValue}
                mediaType={movie.media_type}
                movieId={Number(movie.id)}
                setIsDeleted={setIsDeleted}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Profile;
