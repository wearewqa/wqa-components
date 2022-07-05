// YourComponent.stories.ts | YourComponent.stories.tsx

import React, { ComponentProps } from "react";

import { Story, Meta } from "@storybook/react";

import Button from "./index";
import { Theme } from "../../enums/Theme";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Components/Buttons & Links/Button",
  component: Button,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof Button>> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  theme: Theme.Default,
  type: "primary",
  size: "medium",
  children: "Button",
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   theme: Themes.default,
//   type: "secondary",
//   size: "large",
//   children: "Button",
// };

// export const Tertiary = Template.bind({});
// Tertiary.args = {
//   theme: Themes.default,
//   type: "tertiary",
//   size: "large",
//   children: "Button",
// };
