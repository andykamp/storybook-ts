import React from "react";
import { StyledFullRowPadded, StyledPlayground } from "../decorators";
import { ComponentMeta } from "@storybook/react";
import { CodeCollapse } from "./CodeCollapse";

export default {
  title: "docs/CodeCollapse",
  component: CodeCollapse,
  decorators: [
    (Story) => (
      <StyledFullRowPadded>
        <StyledPlayground width="300px">
          <Story />
        </StyledPlayground>
      </StyledFullRowPadded>
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
