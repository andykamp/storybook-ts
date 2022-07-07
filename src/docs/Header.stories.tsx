import React from "react";
import { CenteredPlayground } from "../decorators";
import { ComponentMeta } from "@storybook/react";
import { Header } from "@/docs/Header";

export default {
  title: "docs/Header",
  component: Header,
  decorators: [
    (Story) => (
      <CenteredPlayground width="650px">
        <Story />
      </CenteredPlayground>
    ),
  ],
} as ComponentMeta<typeof Header>;

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {};
