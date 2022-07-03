# How to utilize Geist + styled components

We utilize the beutifal [Geist ui kit](www.geist.com) as the base ui kit. It has a nice interface for dark/light themes that are easily extendable, and so we costumize that, and inject that theme into both 
a **GeistProvider** and a **ThemeProvider**(styled components). The implementation can be found in the **./theme.tsx** file.

- to style the storybook in additoin to the limited exposed dark/light theme, we can override stuff in the .storybook/manager-head.html. But here it is important to remember that it will not respect the dark/light theme :( 
- we can decorate each story with a **decorator** from ./src/decorators. This will add a nice border container to contain the componant and center it properly with correct colors
- This theming does not work on the **docs** part of storybook. for that to use the light/dark theming we had to create a ./storybook/DocContainer and also add docs:{theming: DocContainer} to **./storybook/preview.jsx**. See https://github.com/hipstersmoothie/storybook-dark-mode/issues/127#issuecomment-1070524402 for details

For general info avbout geist theme look [here](https://geist-ui.dev/en-us/guide/themes). 


The structure of Geist themes are as follows:

```javascript
export interface GeistUIThemes {
  type: string
  font: GeistUIThemesFont
  layout: GeistUIThemesLayout
  palette: GeistUIThemesPalette
  breakpoints: GeistUIThemesBreakpoints
  expressiveness: GeistUIThemesExpressiveness
}
```

Where each key in the object literal is defined by the following interfaces (see components/themes/presets/default.ts  to see the default values):

```js
export interface GeistUIThemesPalette {
  accents_1: string
  accents_2: string
  accents_3: string
  accents_4: string
  accents_5: string
  accents_6: string
  accents_7: string
  accents_8: string
  background: string
  foreground: string
  selection: string
  secondary: string
  code: string
  border: string
  success: string
  successLighter: string
  successLight: string
  successDark: string
  error: string
  errorLighter: string
  errorLight: string
  errorDark: string
  warning: string
  warningLighter: string
  warningLight: string
  warningDark: string
  cyan: string
  cyanLighter: string
  cyanLight: string
  cyanDark: string
  violet: string
  violetLighter: string
  violetLight: string
  violetDark: string
  link: string
  purple: string
  magenta: string
  alert: string
}

export interface GeistUIThemesExpressiveness {
  linkStyle: string
  linkHoverStyle: string
  dropdownBoxShadow: string
  scrollerStart: string
  scrollerEnd: string
  shadowSmall: string
  shadowMedium: string
  shadowLarge: string
  portalOpacity: number
}

export interface GeistUIThemesLayout {
  gap: string
  gapNegative: string
  gapHalf: string
  gapHalfNegative: string
  gapQuarter: string
  gapQuarterNegative: string
  pageMargin: string
  pageWidth: string
  pageWidthWithMargin: string
  breakpointMobile: string
  breakpointTablet: string
  radius: string
  unit: string
}

export interface GeistUIThemesFont {
  sans: string
  mono: string
  prism: string
}

export interface BreakpointsItem {
  min: string
  max: string
}

export interface GeistUIThemesBreakpoints {
  xs: BreakpointsItem
  sm: BreakpointsItem
  md: BreakpointsItem
  lg: BreakpointsItem
  xl: BreakpointsItem
}


```

