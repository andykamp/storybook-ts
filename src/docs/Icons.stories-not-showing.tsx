import React from "react";

import { CenteredPlayground } from "../decorators";
import { ComponentMeta } from "@storybook/react";

import { Icons } from "@/docs/Icons";

export default {
  title: "docs/Icons",
  component: Icons,
  decorators: [
    (Story) => (
      <CenteredPlayground>
        <Story />
      </CenteredPlayground>
    ),
  ],
} as ComponentMeta<typeof Icons>;

const Template = (args) => <Icons {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  // disables Chromatic's snapshotting on a story level
  chromatic: { disableSnapshot: true },
  //
};
