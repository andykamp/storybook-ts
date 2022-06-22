import { css } from "styled-components";
import { WithThemeProvider } from "./ThemeProvider";
import { useDarkMode } from "storybook-dark-mode";

// ---------------------------------------------
// helper funcs
// ---------------------------------------------

export function addAlpha(color: string, opacity: number) {
  // coerce values so ti is between 0 and 1.
  const _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
  return color + _opacity.toString(16).toUpperCase();
}

// ---------------------------------------------
// Theme values
// ---------------------------------------------

// transitions
export const transition = "all .4s ease";
export const transitionFast = "all .2s ease";
export const transitionSlow = "all .8s ease";

// font
export const fontFamily = "Inter";
export const fontSize = "11px";

// three indend (layer panel)
export const treeIndent = 20;

// accent
export const accentBlue = "#189FFB";
export const accentPink = "#F531B3";
export const accentPurple = "#7B61FF";
export const accentGreen = "#03DAC5";
export const accentYellow = "#FDFF9F";

// success, warning and error
export const success = "#03DAC5";
export const successBg = addAlpha(success, 0.3);
export const warning = "#FDFF9F";
export const warningBg = addAlpha(warning, 0.3);
export const error = "#ED7498";
export const errorBg = addAlpha(error, 0.3);

// header
export const headerBg = "#000000";

// general

export const appBorderRadius = 0;
export const appGapSize = 8;

export const bg = "#1A1C21";
export const bgLT = "#FFFFFF";

export const textColor = "#9292A4";
export const textColorLT = "#5E6067";

export const grey1 = "#4A4B52";
export const grey1LT = "#DADADA";

export const grey2 = addAlpha(grey1, 0.4);
export const grey2LT = addAlpha(grey1LT, 0.1);

export const greySelection = addAlpha(grey1, 0.3);
export const greySelectionLT = addAlpha(grey1LT, 0.1);

export const greySelectionHover = addAlpha(grey1, 0.2);
export const greySelectionHoverLT = addAlpha(grey1, 0.05);

export const greyDisabled = addAlpha("#B1B1B4", 0.5);
export const greyDisabledLT = "#B1B1B4";

export const textColorContrast = "#FFFFFF";
export const textColorContrastLT = "#000000";

// ---------------------------------------------
// Theme interface and actual theme
// ---------------------------------------------

export interface ThemeInterface {
  // name of theme
  base: string;
  //
  accent: {
    blue: string;
    pink: string;
    purple: string;
    green: string;
    yellow: string;
  };
  status: {
    success: string;
    successBg: string;
    warning: string;
    warningBg: string;
    error: string;
    errorBg: string;
  };
  header: {
    headerBg: string;
  };
  general: {
    fontFamily: string;
    fontSize: string;
    appBorderRadius: number;
    appGapSize: number;
    bg: string;
    textColor: string;
    grey1: string;
    grey2: string;
    greySelection: string;
    greySelectionHover: string;
    greyDisabled: string;
    textColorContrast: string;
  };
}

export const themeNew: ThemeInterface = {
  // name of theme
  base: "dark",
  //
  accent: {
    blue: accentBlue,
    pink: accentPink,
    purple: accentPurple,
    green: accentGreen,
    yellow: accentYellow,
  },
  status: {
    success,
    successBg,
    warning,
    warningBg,
    error,
    errorBg,
  },
  header: {
    headerBg,
  },
  general: {
    fontFamily,
    fontSize,
    appBorderRadius,
    appGapSize,
    bg,
    textColor,
    grey1,
    grey2,
    greySelection,
    greySelectionHover,
    greyDisabled,
    textColorContrast,
  },
};

export const themeNewLT: ThemeInterface = Object.assign({}, themeNew, {
  // name of theme
  base: "light",
  //
  general: {
    fontFamily,
    fontSize,
    appBorderRadius,
    appGapSize,
    bg: bgLT,
    textColor: textColorLT,
    grey1: grey1LT,
    grey2: grey2LT,
    greySelection: greySelectionLT,
    greySelectionHover: greySelectionHoverLT,
    greyDisabled: greyDisabledLT,
    textColorContrast: textColorContrastLT,
  },
});

// ---------------------------------------------
//  Theme functions
// ---------------------------------------------
export const availableThemes = {
  dark: themeNew,
  light: themeNewLT,
};

// Function to obtain the intended theme
export const getTheme = (themeName: "dark" | "light"): ThemeInterface => {
  return availableThemes[themeName];
};

export const darkModeDecorator = (Story) => {
  const darkModeOn = useDarkMode();
  console.log(darkModeOn);

  return <Story />;
};
export const themeDecorator = (Story, context) => {
  const darkModeOn = useDarkMode();
  console.log("darkmodeon", darkModeOn);
  const theme = getTheme(darkModeOn ? "dark" : "light");
  return (
    <WithThemeProvider theme={theme}>
      <Story {...context} />
    </WithThemeProvider>
  );
};

// ---------------------------------------------
// old UI
// ---------------------------------------------

//export const codeThemeColors = {
//  purple: '#B879D6',
//  turquoise: '#9CF1F4',
//  pink: '#E48497',
//  blue: '#8898EE',
//  orange: '#E7A57A',
//  background: '#1E2027', // dark color
//  header: '#282B35', // lighter dark color
//};

//export const themeCode = JSON.parse(JSON.stringify(theme));
//(themeCode.activeColor = codeThemeColors.turquoise),
//  //themeCode.activeColorHover = '#b6bad1',
//  (themeCode.errorColor = codeThemeColors.pink),
//  (themeCode.successColor = codeThemeColors.turquoise),
//  //themeCode.labelColor = labelColorLT
//  (themeCode.textColor = codeThemeColors.blue),
//  //themeCode.subtextColor = subtextColorLT
//  //themeCode.textColorHl = textColorHlLT
//  // HEADER
//  //themeCode.header = headerLT
//  // BACKGROUND
//  (themeCode.background = codeThemeColors.background),
//  (themeCode.viewerBackground = codeThemeColors.background),
//  //PANEL
//  (themeCode.panelBackground = codeThemeColors.header),
//  (themeCode.panelBackgroundHover = codeThemeColors.header),
//  (themeCode.panelActiveBg = codeThemeColors.header);
//themeCode.panelBorder = codeThemeColors.header;
//themeCode.base = 'code';
