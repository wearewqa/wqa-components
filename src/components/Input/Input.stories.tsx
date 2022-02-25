// YourComponent.stories.ts | YourComponent.stories.tsx

import React, { ComponentProps } from "react";

import { Story, Meta } from "@storybook/react";

import Input from "./index";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Components/Forms/Input",
  component: Input,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof Input>> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  labelText: "Email",
  hideLabel: true,
  placeholder: "olivia@untitledui.com",
  disabledAttr: false,
  titleText: "Search...",
};

export const Hint = Template.bind({});
Hint.args = {
  labelText: "Email",
  hideLabel: true,
  placeholder: "olivia@untitledui.com",
  hintText: "This is a hint text to help user.",
};

export const Label = Template.bind({});
Label.args = {
  labelText: "Email",
  hideLabel: false,
  placeholder: "olivia@untitledui.com",
};

export const Error = Template.bind({});
Error.args = {
  labelText: "Email",
  hideLabel: false,
  errorMessage: "This is an error message.",
  placeholder: "olivia@untitledui.com",
  cssModifier: "error"
};