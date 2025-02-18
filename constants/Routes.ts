import { Href } from "expo-router";
import Ionicon from "@expo/vector-icons/Ionicons";
interface MenuRoute {
  title: string;
  icon: keyof typeof Ionicon.glyphMap;
  nameScreen: string;
  href: Href;
}

export const menuRoutes: MenuRoute[] = [
  {
    title: "Pull to refresh",
    icon: "refresh-outline",
    nameScreen: "pull-to-refresh/index",
    href: "/pull-to-refresh",
  },
  {
    title: "Section List",
    icon: "list-outline",
    nameScreen: "section-list/index",
    href: "/section-list",
  },
  {
    title: "Modal",
    icon: "copy-outline",
    nameScreen: "modal/index",
    href: "/modal",
  },
  {
    title: "InfiniteScroll",
    icon: "download-outline",
    nameScreen: "infinite-scroll/index",
    href: "/infinite-scroll",
  },
  {
    title: "Slides",
    icon: "flower-outline",
    nameScreen: "slides/index",
    href: "/slides",
  },
  {
    title: "Themes",
    icon: "flask-outline",
    nameScreen: "themes/index",
    href: "/themes",
  },
];

export const uiMenuRoutes: MenuRoute[] = [
  {
    title: "Switches",
    icon: "toggle-outline",
    nameScreen: "switches/index",
    href: "/switches",
  },
  {
    title: "Alerts",
    icon: "alert-circle-outline",
    nameScreen: "alerts/index",
    href: "/alerts",
  },
  {
    title: "TextInputs",
    icon: "document-text-outline",
    nameScreen: "text-inputs/index",
    href: "/text-inputs",
  },
];

export const animationMenuRoutes: MenuRoute[] = [
  {
    title: "Animation 101",
    icon: "cube-outline",
    nameScreen: "animation-101/index",
    href: "/animation-101",
  },
  {
    title: "Animation 102",
    icon: "albums-outline",
    nameScreen: "animation-102/index",
    href: "/animation-102",
  },
];

export const allRoutes: MenuRoute[] = [
  ...menuRoutes,
  ...uiMenuRoutes,
  ...animationMenuRoutes,
];
