import React from "react";

import { StyledFullRowPadded, StyledPlayground } from "../decorators";
import { ComponentMeta } from "@storybook/react";
import { IconSearcher } from "./IconSearcher";

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

const Template = (args) => <IconSearcher {...args} />;

export const Default = Template.bind({});
Default.args = {};
