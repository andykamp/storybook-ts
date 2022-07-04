import React from "react";
import { DocsContainer as BaseContainer } from "@storybook/addon-docs/blocks";
import { useDarkMode } from "storybook-dark-mode";
import {
  GeistProviderMdx,
  lightThemeStorybook,
  darkThemeStorybook,
} from "../src/design/theme";

export const DocsContainer = ({ children, context }) => {
  const dark = useDarkMode();

  return (
    <BaseContainer
      context={{
        ...context,
        storyById: (id) => {
          const storyContext = context.storyById(id);
          return {
            ...storyContext,
            parameters: {
              ...storyContext?.parameters,
              docs: {
                ...storyContext?.parameters?.docs,
                theme: dark ? darkThemeStorybook : lightThemeStorybook,
              },
            },
          };
        },
      }}
    >
      <GeistProviderMdx>{children}</GeistProviderMdx>
    </BaseContainer>
  );
};
