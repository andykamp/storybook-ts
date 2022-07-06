import React from "react";

import { StyledFullRowPadded } from "../decorators";
import { ComponentMeta } from "@storybook/react";
import { IconContainer } from "@/docs/IconContainer";
import { Activity } from "@geist-ui/icons";

export default {
  title: "docs/IconContainer",
  component: IconContainer,
  decorators: [
    (Story) => (
      <StyledFullRowPadded width="100px">
        <Story />
      </StyledFullRowPadded>
    ),
  ],
} as ComponentMeta<typeof IconContainer>;

const Template = (args) => <IconContainer {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "Activity",
  icon: <Activity />,
};
