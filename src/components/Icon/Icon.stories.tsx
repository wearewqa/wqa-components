// YourComponent.stories.ts | YourComponent.stories.tsx

import React, { ComponentProps } from "react";

import { Story, Meta } from "@storybook/react";

import Icon from "./Icon";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Components/Icon",
  component: Icon,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof Icon>> = (args) => <Icon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: "check",
};
