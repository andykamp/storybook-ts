import {
  darkModeDecorator,
  GeistProviderTs,
  lightThemeStorybook,
  darkThemeStorybook,
} from "../src/design/theme";
import { DocsContainer } from "./DocsContainer";

export const decorators = [darkModeDecorator, GeistProviderTs];

export const parameters = {
  darkMode: {
    dark: darkThemeStorybook,
    light: lightThemeStorybook,
    stylePreview: true,
  },
  layout: "fullscreen",
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: { disable: true },
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: true },
    eject: { hidden: true },
    copy: { hidden: true },
    fullscreen: { hidden: false },
    "storybook/background": { hidden: true },
    "storybook/viewport": { hidden: false },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    enableShortcuts: false,
    storySort: {
      order: [
        "Welcome",
        "Introduction",
        "Testing",
        "design",
        ["about", "Colors", "Typography", "Icons"],
        "atoms",
        ["about"],
        "molecules",
        ["about"],
        "organisms",
        ["about"],
        "templates",
        ["about"],
        "pages",
        ["about"],
        "docs",
        [
          "about",
          "WelcomeCard",
          "CodeCollapse",
          "ColorRowSingle",
          "ColorRow",
          "ColorSection",
          "IconSearcher",
          "IconContainer",
          "Icons",
        ],
      ],
    },
  },
  docs: {
    // theme: themes.dark,
    container: DocsContainer,
  },
};
