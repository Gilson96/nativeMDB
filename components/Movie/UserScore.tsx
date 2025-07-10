import { Text, View } from "react-native";
import { CircularProgress } from "react-native-circular-progress";

export const UserScore = ({ score }: { score?: number }) => {
  let percent: number | null = null;
  let tintColor = "#666"; // Default grey for "Not Found"
  let displayText = "NF";

  if (typeof score === "number") {
    percent = Math.floor(score * 10);
    displayText = `${percent}%`;

    if (percent >= 70) {
      tintColor = "#21d07a"; // Green
    } else if (percent >= 50) {
      tintColor = "#d2d531"; // Yellow
    } else {
      tintColor = "#db2360"; // Red
    }
  }

  return (
    <View className="flex-row gap-2 items-center justify-center">
      <CircularProgress
        size={50}
        width={5}
        fill={percent ?? 100}
        tintColor={tintColor}
        backgroundColor="#204529"
        rotation={0}
      >
        {() => (
          <Text className="text-white text-xs font-bold">{displayText}</Text>
        )}
      </CircularProgress>
      <Text className="text-white font-bold text-base mt-1">User Score</Text>
    </View>
  );
};
