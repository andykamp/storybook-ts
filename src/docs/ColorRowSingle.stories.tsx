import React from "react";
import { StyledFullRowPadded, StyledPlayground } from "../decorators";
import { ComponentMeta } from "@storybook/react";
import { ColorRowSingle } from "./ColorRowSingle";

export default {
  title: "docs/ColorRowSingle",
  component: ColorRowSingle,
  decorators: [
    (Story) => (
      <StyledFullRowPadded>
        <StyledPlayground width="500px">
          <Story />
        </StyledPlayground>
      </StyledFullRowPadded>
    ),
  ],
} as ComponentMeta<typeof ColorRowSingle>;

const Template = (args) => <ColorRowSingle {...args} />;

export const Default = Template.bind({});
Default.args = {
  hex: "#444",
  name: "some_name",
  themePath: "some_them_path",
};
