import React from "react";
import { CenteredPlayground } from "../decorators";
import { ComponentMeta } from "@storybook/react";
import { WelcomeHeader } from "@/docs/WelcomeHeader";

export default {
  title: "docs/WelcomeHeader",
  component: WelcomeHeader,
  decorators: [
    (Story) => (
      <CenteredPlayground width="650px">
        <Story />
      </CenteredPlayground>
    ),
  ],
} as ComponentMeta<typeof WelcomeHeader>;

const Template = (args) => <WelcomeHeader {...args} />;

export const Default = Template.bind({});
Default.args = {};
