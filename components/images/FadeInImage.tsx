import { useAnimation } from "@/hooks/useAnimation";
import { useThemeColor } from "@/hooks/useThemeColor";
import { useState } from "react";
import {
  View,
  ActivityIndicator,
  StyleProp,
  ImageStyle,
  Animated,
} from "react-native";

interface Props {
  uri: string;
  style: StyleProp<ImageStyle>;
}

const FadeInImage = ({ uri, style }: Props) => {
  const primaryColor = useThemeColor({}, "primary");
  const [isLoading, setIsLoading] = useState(true);

  const { animatedOpacity, fadeIn } = useAnimation();

  return (
    <View className="justify-center items-center">
      {isLoading && (
        <ActivityIndicator
          size="small"
          color={primaryColor}
          className="absolute"
        />
      )}

      <Animated.Image
        source={{ uri }}
        style={[style, { opacity: animatedOpacity }]}
        onLoadEnd={() => {
          fadeIn({});
          setIsLoading(false);
        }}
      />
    </View>
  );
};

export default FadeInImage;
