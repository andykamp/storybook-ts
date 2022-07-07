import React from "react";

import { CenteredPlayground } from "../decorators";
import { ComponentMeta } from "@storybook/react";
import { IconSearcher } from "@/docs/IconSearcher";
import * as ICONS from "@geist-ui/icons";

export default {
  title: "docs/IconSearcher",
  component: IconSearcher,
  decorators: [
    (Story) => (
      <CenteredPlayground width="300px">
        <Story />
      </CenteredPlayground>
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
