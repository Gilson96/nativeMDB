import { Text, View } from "react-native";

export const CustomSelect = ({
  selectedValue,
  setSelectedValue,
  firstValue,
  secondValue,
}: {
  firstValue: string;
  secondValue: string;
  selectedValue: string;
  setSelectedValue: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <View className="w-[50%] flex-row justify-center items-center  rounded-full overflow-hidden">
      <Text
        onPress={() => setSelectedValue(firstValue)}
        className={`flex-1 capitalize text-center py-2 font-bold text-white ${
          selectedValue === firstValue
            ? "bg-orange-950 z-10"
            : "opacity-70 bg-orange-950"
        }`}
      >
        {firstValue === "day"
          ? "Today"
          : firstValue.charAt(0).toUpperCase() + firstValue.slice(1)}
      </Text>
      <Text
        onPress={() => setSelectedValue(secondValue)}
        className={`flex-1 text-center capitalize py-2 font-bold text-white ${
          selectedValue === secondValue
            ? "bg-orange-950 z-10"
            : "opacity-70 bg-orange-950"
        }`}
      >
        {secondValue === "week"
          ? "This Week"
          : secondValue.charAt(0).toUpperCase() + secondValue.slice(1)}
      </Text>
    </View>
  );
};
