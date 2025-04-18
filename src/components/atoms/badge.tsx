interface BadgeProps {
  data: string;
  theme?: keyof typeof Themes;
}

export const Themes = {
  purple: {
    text: "text-white",
    background: "bg-purple-600",
    hoverBackground: "hover:bg-purple-500",
    activeBackground: "active:bg-purple-600",
  },
  yellow: {
    text: "text-white",
    background: "bg-yellow-500",
    hoverBackground: "hover:bg-yellow-600",
    activeBackground: "active:bg-yellow-600",
  },
  neutral: {
    text: "text-white",
    background: "bg-gray-600",
    hoverBackground: "hover:bg-gray-500",
    activeBackground: "active:bg-gray-600",
  },
  primary: {
    text: "text-white",
    background: "bg-blue-600",
    hoverBackground: "hover:bg-blue-500",
    activeBackground: "active:bg-blue-600",
  },
  warning: {
    text: "text-white",
    background: "bg-orange-600",
    hoverBackground: "hover:bg-orange-500",
    activeBackground: "active:bg-orange-600",
  },
  success: {
    text: "text-white",
    background: "bg-green-600",
    hoverBackground: "hover:bg-green-500",
    activeBackground: "active:bg-green-600",
  },
  danger: {
    text: "text-white",
    background: "bg-red-600",
    hoverBackground: "hover:bg-red-500",
    activeBackground: "active:bg-red-600",
  },
  transparent: {
    text: "text-black",
    background: "bg-transparent",
    hoverBackground: "hover:bg-gray-100",
    activeBackground: "active:bg-transparent",
  },
  white: {
    text: "text-purple-500",
    background: "bg-white",
    hoverBackground: "hover:bg-gray-100",
    activeBackground: "active:bg-gray-200",
  },
};

export default function Badge({
  data = "Data Not Parsed",
  theme = "primary",
}: BadgeProps) {
  const currentTheme = Themes[theme];
  return (
    <span
      className={`px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full ${currentTheme.text} ${currentTheme.background} ${currentTheme.hoverBackground} ${currentTheme.activeBackground}`}
    >
      {data}
    </span>
  );
}
