import { Platform, Pressable, Switch, View } from "react-native";
import ThemeText from "./ThemeText";
import { useThemeColor } from "@/hooks/useThemeColor";

interface Props {
  text?: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
  className?: string;
}

const isAndroid = Platform.OS === "android";

const ThemeSwitch = ({ text, value, onValueChange, className }: Props) => {
  const switchActiveColor = useThemeColor({}, "primary");
  return (
    <Pressable
      className={`flex flex-row items-center justify-between active:opacity-80 ${className}`}
      onPress={() => onValueChange(!value)}
    >
      {text ? <ThemeText type="h2">{text}</ThemeText> : <View />}
      <Switch
        value={value}
        onValueChange={onValueChange}
        thumbColor={isAndroid ? switchActiveColor : ""}
        trackColor={{
          false: "grey",
          true: switchActiveColor,
        }}
      />
    </Pressable>
  );
};

export default ThemeSwitch;
