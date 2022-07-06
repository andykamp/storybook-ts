import React from "react";
import { StyledFullRowPadded, StyledPlayground } from "../decorators";
import { ComponentMeta } from "@storybook/react";
import { ColorRow } from "@/docs/ColorRow";

export default {
  title: "docs/ColorRow",
  component: ColorRow,
  decorators: [
    (Story) => (
      <StyledFullRowPadded>
        <StyledPlayground width="300px">
          <Story />
        </StyledPlayground>
      </StyledFullRowPadded>
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
