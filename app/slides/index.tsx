import ThemeButton from "@/components/ui/ThemeButton";
import ThemeText from "@/components/ui/ThemeText";
import ThemeView from "@/components/ui/ThemeView";
import { router, useNavigation } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  ImageSourcePropType,
  FlatList,
  Image,
  useWindowDimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Text,
} from "react-native";

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: "Titulo 1",
    desc: "Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.",
    img: require("../../assets/images/slides/slide-1.png"),
  },
  {
    title: "Titulo 2",
    desc: "Anim est quis elit proident magna quis cupidatat curlpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ",
    img: require("../../assets/images/slides/slide-2.png"),
  },
  {
    title: "Titulo 3",
    desc: "Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.",
    img: require("../../assets/images/slides/slide-3.png"),
  },
];

interface SlideItemProps {
  item: Slide;
}

const SlideItem = ({ item }: SlideItemProps) => {
  const width = useWindowDimensions().width;
  return (
    <ThemeView className="flex-1 rounded p-10 justify-center" style={{ width }}>
      <Image
        source={item.img}
        style={{
          width: width * 0.7,
          height: width * 0.7,
          resizeMode: "center",
          alignSelf: "center",
        }}
      />

      <ThemeText
        type="h1"
        className="text-light-primary dark:text-dark-primary"
      >
        {item.title}
      </ThemeText>

      <ThemeText className="mt-5">{item.desc}</ThemeText>
    </ThemeView>
  );
};

const SlidesScreen = () => {
  const flatListRef = useRef<FlatList>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isScrollEnabled, setIsScrollEnabled] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isScrollEnabled) return;
    const { contentOffset, layoutMeasurement } = event.nativeEvent;

    const currentIndex = Math.floor(contentOffset.x / layoutMeasurement.width);

    setCurrentSlideIndex(currentIndex > 0 ? currentIndex : 0);

    if (currentIndex === items.length - 1) {
      setIsScrollEnabled(true);
    }
  };

  const scrollToSlide = (index: number) => {
    if (!flatListRef.current) return;

    flatListRef.current.scrollToIndex({
      index,
      animated: true,
    });
  };

  return (
    <ThemeView>
      <FlatList
        ref={flatListRef}
        data={items}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => <SlideItem item={item} />}
        horizontal
        pagingEnabled
        scrollEnabled={isScrollEnabled}
        onScroll={onScroll}
      />

      {currentSlideIndex === items.length - 1 ? (
        <ThemeButton
          className="absolute bottom-10 right-10"
          onPress={() => router.dismiss()}
        >
          Finalizar
        </ThemeButton>
      ) : (
        <ThemeButton
          className="absolute bottom-10 right-10"
          onPress={() => scrollToSlide(currentSlideIndex + 1)}
        >
          Siguiente
        </ThemeButton>
      )}
    </ThemeView>
  );
};
export default SlidesScreen;
