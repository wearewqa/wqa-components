// YourComponent.stories.ts | YourComponent.stories.tsx

import React, { ComponentProps } from "react";

import { Story, Meta } from "@storybook/react";

import ProgressLink from "./index";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Components/Buttons & Links/Progress Link",
  component: ProgressLink,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof ProgressLink>> = (args) => <ProgressLink {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Read more",
};
