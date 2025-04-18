import { Themes } from "@/components/atoms/badge";

const themeMap: Record<string, keyof typeof Themes> = {
  php: "primary",
  html: "success",
  js: "warning",
  nextJs: "danger",
  css: "purple",
  tealwindcss: "neutral",
};

export const getBadgeTheme = (category: string): keyof typeof Themes => {
  return themeMap[category.toLowerCase()] ?? "neutral";
};
