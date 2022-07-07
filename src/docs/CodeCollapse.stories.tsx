import React from "react";
import { CenteredPlayground } from "../decorators";
import { ComponentMeta } from "@storybook/react";
import { CodeCollapse } from "@/docs/CodeCollapse";

export default {
  title: "docs/CodeCollapse",
  component: CodeCollapse,
  decorators: [
    (Story) => (
      <CenteredPlayground width="300px">
        <Story />
      </CenteredPlayground>
    ),
  ],
} as ComponentMeta<typeof CodeCollapse>;

const Template = (args) => <CodeCollapse {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: (
    <div>
      This is some content. Click the 'code' footer to review the code that
      generated it
    </div>
  ),
  code: `export const Playground = Template.bind({});
  Playground.args = {
  content: <div>hei</div>,
  code: "some code"
};`,
};
