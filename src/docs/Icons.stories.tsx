import React from "react";

import { StyledFullRowPadded } from "../decorators";
import { ComponentMeta } from "@storybook/react";

import { Icons } from "./Icons";

export default {
  title: "docs/Icons",
  component: Icons,
  decorators: [
    (Story) => (
      <StyledFullRowPadded>
        <Story />
      </StyledFullRowPadded>
    ),
  ],
} as ComponentMeta<typeof Icons>;

const Template = (args) => <Icons {...args} />;

export const Default = Template.bind({});
Default.args = {};
