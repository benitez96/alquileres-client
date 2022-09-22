import { ColorScheme, Scheme } from "../../interfaces/colorscheme";

export const colorSchemes: { [key: Scheme | string]: ColorScheme } = {
  light: {
    textPrimary: "text-dark-primary",
    textSecondary: "hover:text-dark-primary",
    bgPrimary: "bg-light",
    bgSecondary: "hover:brightness-110",
  },
  dark: {
    textPrimary: "text-light",
    textSecondary: "text-light",
    bgPrimary: "bg-neutral-darkest",
    bgSecondary: "hover:brightness-110",
  },
  red: {
    textPrimary: "text-light",
    textSecondary: "text-light",
    bgPrimary: "bg-red-primary",
    bgSecondary: "hover:brightness-110",
  },
  uranus: {
    textPrimary: "text-dark-primary",
    textSecondary: "hover:text-light",
    bgPrimary: "bg-uranus-base",
    bgSecondary: "hover:brightness-110",
  },
  venus: {
    textPrimary: "text-light",
    textSecondary: "hover:text-light",
    bgPrimary: "bg-venus-base",
    bgSecondary: "hover:brightness-110",
  },
  "dark-nebula": {
    textPrimary: "text-light",
    textSecondary: "hover:text-light",
    bgPrimary: "bg-nebula-dark",
    bgSecondary: "hover:brightness-110",
  },
  "light-nebula": {
    textPrimary: "text-light",
    textSecondary: "hover:text-light",
    bgPrimary: "bg-nebula-light",
    bgSecondary: "hover:brightness-110",
  },
}
