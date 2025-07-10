import { FilterOptions } from "@/app/filtered";
import {
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectIcon,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
} from "@/components/ui/select";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { ChevronDownIcon, ChevronRightIcon } from "../ui/icon";

type SortByConfigProps = {
  setFilters: React.Dispatch<React.SetStateAction<FilterOptions>>;
  mediaType: string;
};

const SortByConfig = ({ setFilters, mediaType }: SortByConfigProps) => {
  const [isPressed, setIsPressed] = useState(false);
  const [getLabel, setGetLabel] = useState("Popularity Descending");

  const getSortOptions = () => {
    return [
      { label: "Popularity Descending", value: "popularity.desc" },
      { label: "Popularity Ascending", value: "popularity.asc" },
      {
        label: mediaType === "movie" ? "Title (Z-A)" : "Name (Z-A)",
        value: mediaType === "movie" ? "title.desc" : "name.desc",
      },
      {
        label: mediaType === "movie" ? "Title (A-Z)" : "Name (A-Z)",
        value: mediaType === "movie" ? "title.asc" : "name.asc",
      },
      {
        label:
          mediaType === "movie"
            ? "Release date Descending"
            : "First Air Date Descending",
        value:
          mediaType === "movie"
            ? "primary_release_date.desc"
            : "first_air_date.desc",
      },
      {
        label:
          mediaType === "movie"
            ? "Release date Ascending"
            : "First Air Date Ascending",
        value:
          mediaType === "movie"
            ? "primary_release_date.asc"
            : "first_air_date.asc",
      },
    ];
  };

  const updateSort = (value: FilterOptions["sortBy"]) => {
    setFilters((prev) => ({
      ...prev,
      sortBy: value,
    }));
  };

  return (
    <View>
      {/* Toggle section */}
      <View className="w-full h-[3rem] border rounded border-neutral-300 flex-col justify-center p-[3%] items-center">
        <TouchableOpacity
          onPress={() => setIsPressed(!isPressed)}
          className="w-full flex-row justify-between items-center"
        >
          <Text className="font-bold text-lg">Sort</Text>
          {isPressed ? (
            <ChevronDownIcon width={20} height={20} />
          ) : (
            <ChevronRightIcon width={20} height={20} />
          )}
        </TouchableOpacity>
      </View>

      {/* Select dropdown */}
      {isPressed && (
        <View className="w-full border rounded border-neutral-300 flex-col justify-start p-[3%] items-start gap-3">
          <Text>Sort Results By</Text>
          <Select
            onValueChange={(value) => {
              const selected = getSortOptions().find(
                (opt) => opt.value === value
              );
              if (selected) {
                updateSort(selected.value);
                setGetLabel(selected.label);
              }
            }}
            closeOnOverlayClick
          >
            <SelectTrigger variant="outline" size="md">
              <SelectInput placeholder={getLabel} className="py-[2%] w-[90%]" />
              <SelectIcon className="mr-3" as={ChevronDownIcon} />
            </SelectTrigger>
            <SelectPortal>
              <SelectBackdrop />
              <SelectContent className="pb-[20%]">
                <SelectDragIndicatorWrapper>
                  <SelectDragIndicator />
                </SelectDragIndicatorWrapper>

                {getSortOptions().map((item) => (
                  <SelectItem
                    key={item.value}
                    label={item.label}
                    value={item.value}
                  />
                ))}
              </SelectContent>
            </SelectPortal>
          </Select>
        </View>
      )}
    </View>
  );
};

export default SortByConfig;
