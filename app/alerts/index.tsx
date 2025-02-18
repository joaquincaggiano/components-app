import ThemeButton from "@/components/ui/ThemeButton";
import ThemeText from "@/components/ui/ThemeText";
import ThemeView from "@/components/ui/ThemeView";
import { View, Text, Alert } from "react-native";

const AlertsScreen = () => {
  const createTwoButtonAlert = () =>
    Alert.alert("Alert Title", "My Alert Msg", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  const createThreeButtonAlert = () =>
    Alert.alert("Alert Title", "My Alert Msg", [
      {
        text: "Ask me later",
        onPress: () => console.log("Ask me later pressed"),
      },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "destructive",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  return (
    <ThemeView margin className="justify-center items-center gap-5">
      <ThemeButton onPress={createTwoButtonAlert} className="w-full">
        2-Button Alert
      </ThemeButton>
      <ThemeButton onPress={createThreeButtonAlert} className="w-full">
        3-Button Alert
      </ThemeButton>
    </ThemeView>
  );
};
export default AlertsScreen;
