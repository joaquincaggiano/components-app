import FadeInImage from "@/components/images/FadeInImage";
import ThemeView from "@/components/ui/ThemeView";
import { useThemeColor } from "@/hooks/useThemeColor";
import { useState } from "react";
import { ActivityIndicator, FlatList, Image, View } from "react-native";

interface ListItemProps {
  number: number;
}

const ListItem = ({ number }: ListItemProps) => {
  return (
    <FadeInImage
      uri={`https://picsum.photos/id/${number}/500/400`}
      style={{ height: 400, width: "100%" }}
    />
  );
};

const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  const primaryColor = useThemeColor({}, "primary");

  const loadMore = () => {
    const newArray = Array.from(
      { length: 5 },
      (_, i) => numbers.length + i + 1
    );

    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 3000);
  };

  return (
    <ThemeView margin>
      <FlatList
        data={numbers}
        renderItem={({ item }) => <ListItem number={item} />}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() => (
          <View className="h-[100px] justify-center items-center">
            <ActivityIndicator size="small" color={primaryColor} />
          </View>
        )}
      />
    </ThemeView>
  );
};
export default InfiniteScrollScreen;
