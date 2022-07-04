import {
  darkModeDecorator,
  geistProvider,
  lightThemeStorybook,
  darkThemeStorybook,
} from "../src/design/theme";
import { DocsContainer } from "./DocsContainer";

export const decorators = [darkModeDecorator, geistProvider];

export const parameters = {
  darkMode: {
    dark: darkThemeStorybook,
    light: lightThemeStorybook,
    stylePreview: true,
  },
  layout: "fullscreen",
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: { disable: true },
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
        "Changelog",
        "design",
        ["about"],
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
      ],
    },
  },
  docs: {
    // theme: themes.dark,
    container: DocsContainer,
  },
};
