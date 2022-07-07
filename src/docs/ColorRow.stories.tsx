import React from "react";
import { CenteredPlayground } from "../decorators";
import { ComponentMeta } from "@storybook/react";
import { ColorRow } from "@/docs/ColorRow";

export default {
  title: "docs/ColorRow",
  component: ColorRow,
  decorators: [
    (Story) => (
      <CenteredPlayground width="300px">
        <Story />
      </CenteredPlayground>
    ),
  ],
} as ComponentMeta<typeof ColorRow>;

const Template = (args) => <ColorRow {...args} />;

export const Default = Template.bind({});
Default.args = {
  hexDark: "#6666",
  hexLight: "#444",
  name: "some_name",
  themePath: "some_them_path",
};
