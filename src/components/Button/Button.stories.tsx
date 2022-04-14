// YourComponent.stories.ts | YourComponent.stories.tsx

import React, { ComponentProps } from "react";

import { Story, Meta } from "@storybook/react";

import Button from "./index";
import { Themes } from "../../enums/Themes";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Components/Buttons & Links/Button",
  component: Button,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof Button>> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  theme: Themes.default,
  size: "medium",
  children: "Button",
};
