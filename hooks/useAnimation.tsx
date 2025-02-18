import { useRef } from "react";
import { Animated, Easing, EasingFunction } from "react-native";

interface AnimationProps {
  initialValue?: number;
  duration?: number;
  toValue?: number;
  useNativeDriver?: boolean;
  easing?: EasingFunction;
  callback?: () => void;
}

export const useAnimation = () => {
  const animatedOpacity = useRef(new Animated.Value(0)).current;
  const animatedTop = useRef(new Animated.Value(0)).current;

  const fadeIn = ({
    duration = 300,
    toValue = 1,
    useNativeDriver = true,
    easing = Easing.linear,
    callback,
  }: AnimationProps) => {
    Animated.timing(animatedOpacity, {
      toValue,
      duration,
      useNativeDriver,
      easing,
    }).start(() => callback?.());
  };

  const fadeOut = ({
    duration = 300,
    toValue = 0,
    useNativeDriver = true,
    easing = Easing.ease,
    callback,
  }: AnimationProps) => {
    Animated.timing(animatedOpacity, {
      toValue,
      duration,
      useNativeDriver,
      easing,
    }).start(() => callback?.());
  };

  const startMoving = ({
    initialValue = -80,
    duration = 300,
    toValue = 0,
    useNativeDriver = true,
    easing = Easing.linear,
    callback,
  }: AnimationProps) => {
    animatedTop.setValue(initialValue);

    Animated.timing(animatedTop, {
      toValue,
      duration,
      useNativeDriver,
      easing,
    }).start(() => callback?.());
  };

  const stopMoving = ({
    duration = 300,
    toValue = -80,
    useNativeDriver = true,
    easing = Easing.linear,
    callback,
  }: AnimationProps) => {
    Animated.timing(animatedTop, {
      toValue,
      duration,
      useNativeDriver,
      easing,
    }).start(() => callback?.());
  };

  return {
    animatedOpacity,
    animatedTop,
    fadeIn,
    fadeOut,
    startMoving,
    stopMoving,
  };
};
