import React from "react";
import { CenteredPlayground } from "../decorators";
import { ComponentMeta } from "@storybook/react";
import { WelcomeCard } from "@/docs/WelcomeCard";
import { atoms } from "../assets";

export default {
  title: "docs/WelcomeCard",
  component: WelcomeCard,
  decorators: [
    (Story) => (
      <CenteredPlayground width="400px">
        <Story />
      </CenteredPlayground>
    ),
  ],
} as ComponentMeta<typeof WelcomeCard>;

const Template = (args) => <WelcomeCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  imgSrc: atoms,
};
