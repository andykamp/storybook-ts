import React from "react";

import { CenteredPlayground } from "../decorators";
import { ComponentMeta } from "@storybook/react";

import { ColorSection } from "@/docs/ColorSection";

export default {
  title: "docs/ColorSection",
  component: ColorSection,
  decorators: [
    (Story) => (
      <CenteredPlayground>
        <Story />
      </CenteredPlayground>
    ),
  ],
} as ComponentMeta<typeof ColorSection>;

const Template = (args) => <ColorSection {...args} />;

export const Default = Template.bind({});
Default.args = {};
