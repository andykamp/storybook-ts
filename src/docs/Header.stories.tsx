import React from "react";
import { StyledFullRowPadded, StyledPlayground } from "../decorators";
import { ComponentMeta } from "@storybook/react";
import { Header } from "@/docs/Header";

export default {
  title: "docs/Header",
  component: Header,
  decorators: [
    (Story) => (
      <StyledFullRowPadded>
        <StyledPlayground width="650px">
          <Story />
        </StyledPlayground>
      </StyledFullRowPadded>
    ),
  ],
} as ComponentMeta<typeof Header>;

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {};
