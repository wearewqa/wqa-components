// YourComponent.stories.ts | YourComponent.stories.tsx

import React, { ComponentProps } from "react";

import { Story, Meta } from "@storybook/react";

import RadioButton from "./index";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Components/Forms/Radio Button",
  component: RadioButton,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof RadioButton>> = (args) => <RadioButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  // size: "medium",
  labelText: "Remember me...",
  helperText: "Save my login details for next time",
  disabled: true,
  // checked: true,
  // hiddenLabel: true,
};
