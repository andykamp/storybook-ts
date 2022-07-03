import { WithThemeProvider } from "./ThemeProvider";
import { useDarkMode } from "storybook-dark-mode";
import { create } from "@storybook/theming";
import { Themes, GeistProvider, CssBaseline } from "@geist-ui/core";

// ---------------------------------------------
// helper funcs
// ---------------------------------------------

export function addAlpha(color: string, opacity: number) {
  // coerce values so ti is between 0 and 1.
  const _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
  return color + _opacity.toString(16).toUpperCase();
}

export const darkModeDecorator = (Story) => {
  const darkModeOn = useDarkMode();
  console.log(darkModeOn);

  return <Story />;
};

const lt = Themes.createFromLight({
  type: "customLight",
});

const dt = Themes.createFromDark({
  type: "customDark",
});

export const geistProvider = (Story, context) => {
  const darkModeOn = useDarkMode();
  return (
    <GeistProvider
      themeType={darkModeOn ? "customDark" : "customLight"}
      themes={[lt, dt]}
    >
      <WithThemeProvider theme={darkModeOn ? dt : lt}>
        <CssBaseline />
        <Story {...context} />
      </WithThemeProvider>
    </GeistProvider>
  );
};

export const lightThemeStorybook = create({
  base: "light",

  brandTitle: "My custom storybook",
  brandUrl: "https://example.com",
  // brandImage: "https://place-hold.it/350x150",
  brandTarget: "_self",

  colorPrimary: lt.palette.violet,
  colorSecondary: lt.palette.cyan,

  // UI
  appBg: lt.palette.accents_1,
  appContentBg: lt.palette.background,
  appBorderColor: lt.palette.border,
  appBorderRadius: parseInt(lt.layout.radius[0]),

  // Typography
  fontBase: lt.font.sans,
  fontCode: "sans",

  // Text colors
  textColor: lt.palette.accents_6,
  textInverseColor: "red",

  // Toolbar defaucustomGiestThemeLight and active colors
  barTextColor: lt.palette.accents_6,
  barSelectedColor: lt.palette.foreground,
  barBg: lt.palette.background,

  // Form colors
  inputBg: lt.palette.background,
  inputBorder: lt.palette.border,
  inputTextColor: lt.palette.accents_6,
  inputBorderRadius: parseInt(lt.layout.radius[0]),
});

export const darkThemeStorybook = create({
  base: "dark",

  brandTitle: "My custom storybook",
  brandUrl: "https://example.com",
  // brandImage: "https://place-hold.it/350x150",
  brandTarget: "_self",

  colorPrimary: dt.palette.violet,
  colorSecondary: dt.palette.cyan,

  // UI
  appBg: dt.palette.accents_1,
  appContentBg: dt.palette.background,
  appBorderColor: dt.palette.border,
  appBorderRadius: parseInt(dt.layout.radius[0]),

  // Typography
  fontBase: dt.font.sans,
  fontCode: "sans",

  // Text colors
  textColor: dt.palette.accents_6,
  textInverseColor: "red",

  // Toolbar defaucustomGiestThemeLight and active colors
  barTextColor: dt.palette.accents_6,
  barSelectedColor: dt.palette.foreground,
  barBg: dt.palette.background,

  // Form colors
  inputBg: dt.palette.background,
  inputBorder: dt.palette.border,
  inputTextColor: dt.palette.accents_6,
  inputBorderRadius: parseInt(dt.layout.radius[0]),
});
