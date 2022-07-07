import React from "react";
import { StyledFullRowPadded, StyledPlayground } from "../decorators";
import { ComponentMeta } from "@storybook/react";
import { WelcomeHeader } from "@/docs/WelcomeHeader";

export default {
  title: "docs/WelcomeHeader",
  component: WelcomeHeader,
  decorators: [
    (Story) => (
      <StyledFullRowPadded>
        <StyledPlayground width='650px'>
          <Story />
        </StyledPlayground>
      </StyledFullRowPadded>
    ),
  ],
} as ComponentMeta<typeof WelcomeHeader>;

const Template = (args) => <WelcomeHeader {...args} />;

export const Default = Template.bind({});
Default.args = {};
