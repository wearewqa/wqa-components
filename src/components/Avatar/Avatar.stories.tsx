// YourComponent.stories.ts | YourComponent.stories.tsx

import React, { ComponentProps } from "react";

import { Story, Meta } from "@storybook/react";

import Avatar from "./Avatar";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Components/Avatar",
  component: Avatar,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof Avatar>> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  size: "medium",
  image: "https://via.placeholder.com/150",
  imageAlt: "Descriptive text",
};
