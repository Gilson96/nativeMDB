import Header from "@/components/Navigator/Header";
import Known_For from "@/components/People/Known_For";
import { useGetPeopleDetailsQuery } from "@/lib/peopleEndpoints";
import { RootStackParamList } from "@/types/navigation";
import { RouteProp, useRoute } from "@react-navigation/native";
import { Stack } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

const People = () => {
  const route = useRoute<RouteProp<RootStackParamList, "People">>();
  const { id } = route.params;
  const { data: person, isLoading, isFetching } = useGetPeopleDetailsQuery(id);

  const loading = isLoading || isFetching;
  if (loading) return "";

  return (
    <>
      <Stack.Screen options={{ header: () => <Header /> }} />
      <ScrollView className="mb-[5rem]">
        <View className="w-full gap-4 flex-col justify-center items-center mt-8">
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${person?.profile_path}`,
            }}
            className="mb-1 h-[200px] w-[150px] rounded-md "
            alt="image"
          />
          <Text className="text-2xl font-black">{person?.name}</Text>
        </View>
        <View className="w-full flex-col items-start pl-[4%] pt-[8%]">
          <Text className="font-bold text-lg">Personal info</Text>
          <View className="flex-col gap-2">
            <View className="flex-row w-[70%]  justify-between mt-3">
              <View>
                <Text className="font-bold">Know For</Text>
                <Text>{person?.known_for_department}</Text>
              </View>
              <View>
                <Text className="font-bold">Popularity</Text>
                <Text>{Math.round(person?.popularity! * 10)}%</Text>
              </View>
            </View>
            <View>
              <Text className="font-bold">Gender</Text>
              <Text>
                {(person?.gender === 2 && "Male") ||
                  (person?.gender === 1 && "Female")}
              </Text>
            </View>
            <View>
              <Text className="font-bold">Birthdate</Text>
              <Text>{person?.birthday}</Text>
            </View>
            <View>
              <Text className="font-bold">Place of Birth</Text>
              <Text>{person?.place_of_birth}</Text>
            </View>
            <View className="w-[90%]">
              <Text className="font-bold text-lg">Biography</Text>
              <Text className="pt-[2%]">{person?.biography}</Text>
            </View>
          </View>
        </View>
        <Known_For id={id} />
      </ScrollView>
    </>
  );
};

export default People;
