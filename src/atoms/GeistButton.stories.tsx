import React from "react";
import { ComponentMeta } from "@storybook/react";
import { StyledFullRowPadded, StyledPlayground } from "../decorators";

import { Button } from "./GeistButton";

export default {
  title: "atoms/GeistButton",
  component: Button,
  decorators: [
    (Story) => (
      <StyledFullRowPadded>
        <StyledPlayground>
          <Story />
        </StyledPlayground>
      </StyledFullRowPadded>
    ),
  ],
} as ComponentMeta<typeof Button>;

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Playground = Template.bind({});
Playground.args = {};

Default.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File",
  },
};
