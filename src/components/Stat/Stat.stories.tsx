// YourComponent.stories.ts | YourComponent.stories.tsx

import React, { ComponentProps } from "react";

import { Story, Meta } from "@storybook/react";

import Stat from "./index";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Components/Stat",
  component: Stat,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof Stat>> = (args) => <Stat {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: "primary-light",
  value: "5000+",
  title: "Projects Completed",
  text: "We’ve helped build over 400 amazing projects.",
};
