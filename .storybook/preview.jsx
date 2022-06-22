import { themeDecorator, darkModeDecorator } from "../src/design/theme";
import { themes } from "@storybook/theming";

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "dark",
    toolbar: {
      icon: "circlehollow",
      // Array of plain string values or MenuItem shape (see below)
      items: ["dark", "light"],
      // Property that specifies if the name of the item will be displayed
      showName: true,
    },
  },
};

export const decorators = [themeDecorator, darkModeDecorator];

export const parameters = {
  darkMode: {
    dark: {
      ...themes.dark, // copy existing values
      appContentBg: "#202020", // override main story view frame
      barBg: "#202020", // override top toolbar
    },
  },
  layout: "fullscreen",
  actions: { argTypesRegex: "^on[A-Z].*" },
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
};
