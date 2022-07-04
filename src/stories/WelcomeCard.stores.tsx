import React from "react";

import { ComponentMeta } from "@storybook/react";

import { WelcomeCard } from "./WelcomeCard";

export default {
  title: "atoms/WelcomeCard",
  component: WelcomeCard,
} as ComponentMeta<typeof WelcomeCard>;

const Template = (args) => <WelcomeCard {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Playground = Template.bind({});
Playground.args = {};
