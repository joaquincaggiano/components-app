import ThemeButton from "@/components/ui/ThemeButton";
import ThemeView from "@/components/ui/ThemeView";
import { useAnimation } from "@/hooks/useAnimation";
import { Animated } from "react-native";

const Animation101Screen = () => {
  const { animatedOpacity, animatedTop, fadeIn, fadeOut, startMoving, stopMoving } =
    useAnimation();

  return (
    <ThemeView margin className="flex-1 items-center justify-center gap-y-5">
      <Animated.View
        className="bg-light-secondary dark:bg-dark-secondary rounded-xl w-[100px] h-[100px]"
        style={{
          opacity: animatedOpacity,
          transform: [{ translateY: animatedTop }],
        }}
      />

      <ThemeButton onPress={() => {
        fadeIn({});
        startMoving({});
      }}
      >
        FadeIn
      </ThemeButton>
      <ThemeButton onPress={() => {
        fadeOut({});
        stopMoving({});
      }}
      >
        FadeOut
      </ThemeButton>
    </ThemeView>
  );
};
export default Animation101Screen;
