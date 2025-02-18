import { Href, router } from "expo-router";
import { View, Pressable } from "react-native";
import ThemeText from "../ui/ThemeText";
import { useThemeColor } from "@/hooks/useThemeColor";
import Ionicon from "@expo/vector-icons/Ionicons";

interface Props {
  title: string;
  icon: keyof typeof Ionicon.glyphMap;
  href: Href;

  isFirst?: boolean;
  isLast?: boolean;
}

const MenuItem = ({
  title,
  icon,
  href,
  isFirst = false,
  isLast = false,
}: Props) => {
  const primary = useThemeColor({}, "primary");

  return (
    <Pressable
      onPress={() => router.push(href)}
      className="bg-white dark:bg-black/15 px-5 py-2"
      style={{
        ...(isFirst && {
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          paddingTop: 10,
        }),
        ...(isLast && {
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          paddingBottom: 10,
        }),
      }}
    >
      <View className="flex-row items-center gap-5">
        <Ionicon name={icon} size={24} color={primary} />
        <ThemeText type="h2">{title}</ThemeText>
      </View>
    </Pressable>
  );
};

export default MenuItem;
