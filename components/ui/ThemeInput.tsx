import { TextInputProps, TextInput } from "react-native";

interface Props extends TextInputProps {
  className?: string;
}

const ThemeInput = ({ className, ...props }: Props) => {
  return (
    <TextInput
      className={`py-4 px-2 text-black dark:text-white ${className}`}
      {...props}
    />
  );
};

export default ThemeInput;
