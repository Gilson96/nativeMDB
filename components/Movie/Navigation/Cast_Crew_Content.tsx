import { Cast } from "@/types/movies_shows";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";

type Cast_Crew_Props = {
  cast_type?: string;
  cast_length?: number;
  profile_path?: string;
  name?: string;
  character?: string;
  crew?: Cast["crew"] | undefined;
  crewLabel?: string;
};

export const Cast_Content = ({
  profile_path,
  name,
  character,
}: Cast_Crew_Props) => {
  return (
    <Pressable className="flex-row items-center gap-4">
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500${profile_path}`,
        }}
        style={{
          width: 80,
          height: 110,
          borderRadius: 5,
          position: "relative",
          backgroundColor: "#a3a3a3",
        }}
      />
      <View>
        <Text className="font-bold">{name}</Text>
        <Text>{character}</Text>
      </View>
    </Pressable>
  );
};

export const Cast_Crew_Label = ({
  cast_length,
  cast_type,
}: Cast_Crew_Props) => {
  return (
    <View>
      <Text className="font-bold text-lg py-[3%]">
        {cast_type} <Text className="text-neutral-400">{cast_length}</Text>
      </Text>
    </View>
  );
};

export const Crew_Label = ({ crew, crewLabel }: Cast_Crew_Props) => {
  const label = crew?.find(
    (crew) => crew !== undefined && crew.known_for_department === crewLabel
  );

  return (
    <>
      <Text key={label?.id} className="font-bold text-lg">
        {label?.known_for_department}
      </Text>
    </>
  );
};

export const Crew_Content = ({ crew, crewLabel }: Cast_Crew_Props) => {
  return (
    <>
      {crew
        ?.filter((crew) => crew.known_for_department === crewLabel)
        .map((cast) => (
          <>
            <Cast_Content
              key={cast.id}
              character={cast?.job}
              name={cast?.name}
              profile_path={cast?.profile_path}
            />
          </>
        ))}
    </>
  );
};
