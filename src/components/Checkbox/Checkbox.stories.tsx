// YourComponent.stories.ts | YourComponent.stories.tsx

import React, { ComponentProps } from "react";

import { Story, Meta } from "@storybook/react";

import Checkbox from "./index";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Components/Forms/Checkbox",
  component: Checkbox,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof Checkbox>> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: "medium",
  labelText: "Remember me...",
  helperText: "Save my login details for next time",
  // disabled: true,
  // checked: true,
  // hiddenLabel: true,
};
