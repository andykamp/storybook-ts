import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { getTheme, ThemeInterface } from "./theme";

export const GlobalStyle = createGlobalStyle<{ theme: ThemeInterface }>`

`;

interface ProviderProps {
  theme: ThemeInterface;
}

export const WithThemeProvider = (
  props: React.PropsWithChildren<ProviderProps>
) => {
  return (
    <ThemeProvider theme={props.theme}>
      <GlobalStyle />
      {props.children}
    </ThemeProvider>
  );
};
