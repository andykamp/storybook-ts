import React from "react";

import { StyledFullRowPadded, StyledPlayground } from "../decorators";
import { ComponentMeta } from "@storybook/react";
import { IconContainer } from "./IconContainer";
import { Activity } from "@geist-ui/icons";

export default {
  title: "docs/IconContainer",
  component: IconContainer,
  decorators: [
    (Story) => (
      <StyledFullRowPadded>
        <StyledPlayground width="100px">
          <Story />
        </StyledPlayground>
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
