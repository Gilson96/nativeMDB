import {
  useAddToMyListMutation,
  useGetMyListQuery,
  useRemoveFromMyListMutation,
} from "@/lib/accountEndpoints";
import { RootState } from "@/store";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import { Toast, ToastDescription, ToastTitle, useToast } from "../ui/toast";

const AddToMyList = ({ movieId, type }: { movieId: number; type: string }) => {
  const user = useSelector((state: RootState) => state.auth.user);
  const userId = user?.uid!;
  const toast = useToast();

  const { data: favorites = [], refetch: refetchFavorites } = useGetMyListQuery(
    { userId, list: "favorites" }
  );
  const { data: watchlist = [], refetch: refetchWatchlist } = useGetMyListQuery(
    { userId, list: "watchlist" }
  );

  const [addToMyList] = useAddToMyListMutation();
  const [removeFromMyList] = useRemoveFromMyListMutation();

  const isInFavorites = favorites.some((movie) => Number(movie.id) === movieId);
  const isInWatchlist = watchlist.some((movie) => Number(movie.id) === movieId);

  const showToast = (
    action: "add" | "remove",
    list: "favorites" | "watchlist"
  ) => {
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

  const handleToggle = async (
    list: "favorites" | "watchlist",
    isInList: boolean
  ) => {
    try {
      if (isInList) {
        await removeFromMyList({ userId, list, movieId }).unwrap();
        showToast("remove", list);
      } else {
        await addToMyList({ userId, list, type, movieId }).unwrap();
        showToast("add", list);
      }

      list === "favorites" ? refetchFavorites() : refetchWatchlist();
    } catch (err) {
      console.error(`Failed to update ${list}`, err);
    }
  };

  return (
    <View className="flex-row items-center gap-2">
      {/* Toggle Favorites */}
      <FontAwesome
        onPress={() => handleToggle("favorites", isInFavorites)}
        name={isInFavorites ? "heart" : "heart-o"}
        size={25}
        color="white"
      />
      {/* Toggle Watchlist */}
      <FontAwesome
        onPress={() => handleToggle("watchlist", isInWatchlist)}
        name={isInWatchlist ? "bookmark" : "bookmark-o"}
        size={25}
        color="white"
      />
    </View>
  );
};

export default AddToMyList;
