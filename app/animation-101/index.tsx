import ThemeButton from "@/components/ui/ThemeButton";
import ThemeView from "@/components/ui/ThemeView";
import { useRef } from "react";
import { Animated, View } from "react-native";

const Animation101Screen = () => {
  const animatedOpacity = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(animatedOpacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(animatedOpacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <ThemeView margin className="flex-1 items-center justify-center gap-y-5">
      <Animated.View
        className="bg-light-secondary dark:bg-dark-secondary rounded-xl w-[100px] h-[100px]"
        style={{ opacity: animatedOpacity }}
      />

      <ThemeButton onPress={fadeIn}>FadeIn</ThemeButton>
      <ThemeButton onPress={fadeOut}>FadeOut</ThemeButton>
    </ThemeView>
  );
};
export default Animation101Screen;
