import { useState } from "react";
import ThemeCard from "@/components/ui/ThemeCard";
import ThemeSwitch from "@/components/ui/ThemeSwitch";
import ThemeView from "@/components/ui/ThemeView";
import { useThemeChangerContext } from "@/context/ThemeChangerContext";

const ThemesScreen = () => {
  const { currentTheme, isSystemTheme, toggleTheme, setSystemTheme } =
    useThemeChangerContext();

  const [darkModeSettings, setDarkModeSettings] = useState({
    darkMode: currentTheme === "dark",
    systemMode: isSystemTheme,
  });

  const setDarkMode = (value: boolean) => {
    toggleTheme();

    setDarkModeSettings({ darkMode: value, systemMode: false });
  };

  const setSystemMode = (value: boolean) => {
    if (value) {
      setSystemTheme();
    }

    setDarkModeSettings({
      darkMode: darkModeSettings.darkMode,
      systemMode: value,
    });
  };

  return (
    <ThemeView margin>
      <ThemeCard className="mt-5 gap-5">
        <ThemeSwitch
          text="Dark Mode"
          value={darkModeSettings.darkMode}
          onValueChange={setDarkMode}
        />
        <ThemeSwitch
          text="System Mode"
          value={darkModeSettings.systemMode}
          onValueChange={setSystemMode}
        />
      </ThemeCard>
    </ThemeView>
  );
};
export default ThemesScreen;
