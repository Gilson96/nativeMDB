import { useGetMoviesCreditsQuery } from "@/lib/moviesEndpoints";
import React from "react";
import { ScrollView, View } from "react-native";
import {
  Cast_Content,
  Cast_Crew_Label,
  Crew_Content,
  Crew_Label,
} from "./Cast_Crew_Content";
import NavigationHeader from "./NavigationHeader";

type Cast_Crew_PageProps = {
  id: number;
  type: string;
  setNavigatorLink: React.Dispatch<React.SetStateAction<string>>;
};

const Cast_Crew_Page = ({
  id,
  type,
  setNavigatorLink,
}: Cast_Crew_PageProps) => {
  const {
    data: cast,
    isLoading,
    isFetching,
  } = useGetMoviesCreditsQuery({ type, id });

  const loading = isLoading || isFetching;
  if (loading) return "";

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
      {" "}
      <NavigationHeader
        setNavigatorLink={setNavigatorLink}
        id={id}
        type={type}
      />
      <View className="py-[3%] pl-[8%]">
        <Cast_Crew_Label cast_length={cast?.cast.length!} cast_type="Cast" />
        <View className="flex-col gap-2">
          {cast?.cast.map((cast) => (
            <Cast_Content
              key={cast.id}
              character={cast?.character}
              name={cast?.name}
              profile_path={cast?.profile_path}
            />
          ))}
        </View>
      </View>
      <View className="border-b border-gray-400 my-4" />
      <View className="py-[3%] pl-[8%]">
        <Cast_Crew_Label cast_length={cast?.crew.length!} cast_type="Crew" />

        <View className="flex-col gap-2 py-[3%]">
          <Crew_Label crew={cast?.crew} crewLabel="Art" />
          <Crew_Content crew={cast?.crew} crewLabel="Art" />
        </View>

        <View className="flex-col gap-2 py-[3%]">
          <Crew_Label crew={cast?.crew} crewLabel="Camera" />
          <Crew_Content crew={cast?.crew} crewLabel="Camera" />
        </View>

        <View className="flex-col gap-2 py-[3%]">
          <Crew_Label crew={cast?.crew} crewLabel="Costume & Make-Up" />
          <Crew_Content crew={cast?.crew} crewLabel="Costume & Make-Up" />
        </View>

        <View className="flex-col gap-2 py-[3%]">
          <Crew_Label crew={cast?.crew} crewLabel="Crew" />
          <Crew_Content crew={cast?.crew} crewLabel="Crew" />
        </View>

        <View className="flex-col gap-2 py-[3%]">
          <Crew_Label crew={cast?.crew} crewLabel="Directing" />
          <Crew_Content crew={cast?.crew} crewLabel="Directing" />
        </View>

        <View className="flex-col gap-2 py-[3%]">
          <Crew_Label crew={cast?.crew} crewLabel="Editing" />
          <Crew_Content crew={cast?.crew} crewLabel="Editing" />
        </View>

        <View className="flex-col gap-2 py-[3%]">
          <Crew_Label crew={cast?.crew} crewLabel="Production" />
          <Crew_Content crew={cast?.crew} crewLabel="Production" />
        </View>

        <View className="flex-col gap-2 py-[3%]">
          <Crew_Label crew={cast?.crew} crewLabel="Sound" />
          <Crew_Content crew={cast?.crew} crewLabel="Sound" />
        </View>

        <View className="flex-col gap-2 py-[3%]">
          <Crew_Label crew={cast?.crew} crewLabel="Visual Effects" />
          <Crew_Content crew={cast?.crew} crewLabel="Visual Effects" />
        </View>

        <View className="flex-col gap-2 py-[3%]">
          <Crew_Label crew={cast?.crew} crewLabel="Writing" />
          <Crew_Content crew={cast?.crew} crewLabel="Writing" />
        </View>
      </View>
    </ScrollView>
  );
};

export default Cast_Crew_Page;
