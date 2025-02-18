import MenuItem from "@/components/menu/MenuItem";
import ThemeText from "@/components/ui/ThemeText";
import ThemeView from "@/components/ui/ThemeView";
import {
  animationMenuRoutes,
  menuRoutes,
  uiMenuRoutes,
} from "@/constants/Routes";
import { View } from "react-native";

const ComponentsApp = () => {
  return (
    <ThemeView margin>
      <ThemeText type="h1" className="mb-5">
        Components App
      </ThemeText>
      {animationMenuRoutes.map((route, index) => (
        <MenuItem
          key={route.nameScreen}
          title={route.title}
          icon={route.icon}
          href={route.href}
          isFirst={index === 0}
          isLast={index === animationMenuRoutes.length - 1}
        />
      ))}

      <View className="my-5" />

      {uiMenuRoutes.map((route, index) => (
        <MenuItem
          key={route.nameScreen}
          title={route.title}
          icon={route.icon}
          href={route.href}
          isFirst={index === 0}
          isLast={index === uiMenuRoutes.length - 1}
        />
      ))}

      <View className="my-5" />

      {menuRoutes.map((route, index) => (
        <MenuItem
          key={route.nameScreen}
          title={route.title}
          icon={route.icon}
          href={route.href}
          isFirst={index === 0}
          isLast={index === menuRoutes.length - 1}
        />
      ))}
    </ThemeView>
  );
};

export default ComponentsApp;
