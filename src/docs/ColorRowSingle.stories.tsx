import React from "react";
import { CenteredPlayground } from "../decorators";
import { ComponentMeta } from "@storybook/react";
import { ColorRowSingle } from "@/docs/ColorRowSingle";

export default {
  title: "docs/ColorRowSingle",
  component: ColorRowSingle,
  decorators: [
    (Story) => (
      <CenteredPlayground width="500px">
        <Story />
      </CenteredPlayground>
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
