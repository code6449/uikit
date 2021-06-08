import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#aa8929",
  primaryBright: "#ff00f8",
  primaryDark: "#ff00f8",
  secondary: "#f3d007",
  success: "#4bff00", 
  warning: "#ff3743",
};

export const brandColors = {
  binance: "#ff00f8",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#ef9be7",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#f1d5f8", 
  tertiary: "#EFF4F5",
  text: "#a3659f",
  textDisabled: "#BDC2C4",
  textSubtle: "#b65bb9",
  borderColor: "#a3659f",
  card: "#fcb8f8",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #f4d5f8 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#9A6AFF",
  background: "#343135",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#c9c4d4",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
