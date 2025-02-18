import { View, ViewProps } from "react-native";

interface Props extends ViewProps {
  className?: string;
}

const ThemeCard = ({ children, className, ...props }: Props) => {
  return (
    <View
      className={`bg-white dark:bg-black rounded-xl p-5 shadow shadow-black/5 ${className}`}
      {...props}
    >
      {children}
    </View>
  );
};

export default ThemeCard;
