import { FilterOptions } from "@/app/filtered";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { ChevronDownIcon, ChevronRightIcon } from "../ui/icon";
import { FilterGenres } from "./FilterGenres";

export type FiltersConfigProps = {
  setFilters: React.Dispatch<React.SetStateAction<FilterOptions>>;
  type: string;
  filters?: FilterOptions;
};

const FiltersConfig = ({ setFilters, type, filters }: FiltersConfigProps) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <View>
      <View className="w-full h-[3rem] border rounded border-neutral-300 flex-col justify-center p-[3%] items-center">
        <TouchableOpacity
          onPress={() => setIsPressed(!isPressed)}
          className="w-full flex-row justify-between items-center"
        >
          <Text className="font-bold text-lg">Filters</Text>
          {isPressed ? (
            <ChevronDownIcon width={20} height={20} />
          ) : (
            <ChevronRightIcon width={20} height={20} />
          )}
        </TouchableOpacity>
      </View>
      {isPressed && (
        <>
          <FilterGenres type={type} filters={filters} setFilters={setFilters} />
        </>
      )}
    </View>
  );
};

export default FiltersConfig;
