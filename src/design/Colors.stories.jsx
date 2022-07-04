import { Theme } from "@storybook/theming";
import styled from "styled-components";
import { ColorItem, ColorPalette } from "./ColorPalette";

import { getBlockBackgroundStyle } from "./BlockBackgroundStyles";

const Background = styled.div(({ theme }) => ({
  ...getBlockBackgroundStyle(theme),
  width: "100%",
  height: "100%",
}));

export default {
  title: "design/Colors",
  component: ColorPalette,
};

// Declare a flatten function that takes
// object as parameter and returns the
// flatten object
const flattenObj = (ob) => {
  // The object which contains the
  // final result
  let result = {};
  // loop through the object "ob"
  for (const i in ob) {
    // We check the type of the i using
    // typeof() function and recursively
    // call the function again
    if (typeof ob[i] === "object" && !Array.isArray(ob[i])) {
      const temp = flattenObj(ob[i]);
      for (const j in temp) {
        // Store temp in result
        result[i + "." + j] = temp[j];
      }
    }
    // Else store ob[i] in result directly
    else {
      result[i] = ob[i];
    }
  }
  return result;
};

export const defaultStyle = (args, { globals: { theme } }) => {
  return null;
  // const themeValues = flattenObj(getTheme(theme));

  // const themeArray = Object.keys(themeValues);
  // console.log("fffff", themeValues);
  // return (
  //   <Background>
  //     <ColorPalette>
  //       {themeArray.map((colorName) => {
  //         var color = themeValues[colorName];
  //         if (typeof color !== "string" || color[0] !== "#") return null;
  //         return (
  //           <ColorItem title={colorName} subtitle={color} colors={[color]} />
  //         );
  //       })}
  //     </ColorPalette>
  //   </Background>
  // );
};
