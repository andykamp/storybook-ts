import React from "react";

import { StyledFullRowPadded } from "../decorators";
import { ComponentMeta } from "@storybook/react";

import { ColorSection } from "./ColorSection";

export default {
  title: "docs/ColorSection",
  component: ColorSection,
  decorators: [
    (Story) => (
      <StyledFullRowPadded>
        <Story />
      </StyledFullRowPadded>
    ),
  ],
} as ComponentMeta<typeof ColorSection>;

const Template = (args) => <ColorSection {...args} />;

export const Default = Template.bind({});
Default.args = {};
