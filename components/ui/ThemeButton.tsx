import { Text, Pressable, PressableProps } from "react-native";

interface Props extends PressableProps {
  className?: string;
  children: string;
}
const ThemeButton = ({ className, children, ...props }: Props) => {
  return (
    <Pressable
      {...props}
      className={`bg-light-primary dark:bg-dark-primary items-center rounded-xl px-6 py-2 active:opacity-80 ${className}`}
    >
      <Text className="text-white font-2xl">{children}</Text>
    </Pressable>
  );
};

export default ThemeButton;
