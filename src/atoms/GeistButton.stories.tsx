import React from "react";
import { ComponentMeta } from "@storybook/react";
import { StyledFullRowPadded, StyledPlayground } from "../decorators";
import { Button } from "@/atoms/GeistButton";

import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

export default {
  title: "atoms/GeistButton",
  component: Button,
  decorators: [
    (Story) => (
      <StyledFullRowPadded>
        <StyledPlayground>
          <Story />
        </StyledPlayground>
      </StyledFullRowPadded>
    ),
  ],
} as ComponentMeta<typeof Button>;

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Playground = Template.bind({});
Playground.args = {};

Default.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File",
  },
};
Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  // find the element
  const loginButton = await canvas.getByRole("button", { name: /Action/i });
  // perform an action on it (in this case a click)
  await userEvent.click(loginButton);
  // 👇 Assert DOM structure with jest's expect
  // await expect(canvas.getByText(/Welcome/i)).toBeInTheDocument();
};
