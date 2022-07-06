import React from "react";

import { StyledFullRowPadded, StyledPlayground } from "../decorators";
import { ComponentMeta } from "@storybook/react";
import { IconSearcher } from "./IconSearcher";
import * as ICONS from "@geist-ui/icons";

export default {
  title: "docs/IconSearcher",
  component: IconSearcher,
  decorators: [
    (Story) => (
      <StyledFullRowPadded>
        <StyledPlayground width="300px">
          <Story />
        </StyledPlayground>
      </StyledFullRowPadded>
    ),
  ],
} as ComponentMeta<typeof IconSearcher>;

export interface OptionsObj {
  label: string;
  value: string;
}

// list of all geist icons
const geistIcons: OptionsObj[] = Object.keys(ICONS).map((key) => ({
  label: key,
  value: key,
}));

const Template = (args) => <IconSearcher {...args} />;

export const Default = Template.bind({});
Default.args = {
  allOptions: [...geistIcons],
};
