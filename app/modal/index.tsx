import ThemeButton from "@/components/ui/ThemeButton";
import ThemeView from "@/components/ui/ThemeView";
import { Link, router } from "expo-router";
import { Text } from "react-native";

const ModalScreen = () => {
  return (
    <ThemeView margin>
      <Link asChild href="/modal/modal-window">
        <Text className="text-light-text dark:text-dark-text my-2 text-xl">
          Abrir modal
        </Text>
      </Link>

      <ThemeButton onPress={() => router.push("/modal/modal-window")}>
        Abrir modal
      </ThemeButton>
    </ThemeView>
  );
};
export default ModalScreen;
