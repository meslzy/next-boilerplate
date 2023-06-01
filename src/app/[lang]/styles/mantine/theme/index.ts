import type { MantineThemeOverride, Tuple, DefaultMantineColor } from "@mantine/core";

type Colors = DefaultMantineColor;

declare module "@mantine/core" {
  export interface MantineThemeColorsOverride {
    colors: Record<Colors, Tuple<string, 10>>;
  }
}

const theme: MantineThemeOverride = {
  loader: "oval",
  fontFamily: "inherit",
  globalStyles: () => ({
    "*, *::before, *::after": {
      boxSizing: "border-box",
      userSelect: "none",
      margin: 0,
      padding: 0,
    },
    body: {
      position: "relative",
      height: "100vh",
    },
  }),
};

export default theme;