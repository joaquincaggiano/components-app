import { Colors } from "./constants/Colors";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      light: {
        primary: Colors.light.primary,
        secondary: Colors.light.secondary,
        tertiary: Colors.light.tertiary,
        background: Colors.light.background,
        text: Colors.light.text,
        success: Colors.light.success,
      },
      dark: {
        primary: Colors.dark.primary,
        secondary: Colors.dark.secondary,
        tertiary: Colors.dark.tertiary,
        background: Colors.dark.background,
        text: Colors.dark.text,
        success: Colors.dark.success,
      },
    },
  },
  plugins: [],
};
